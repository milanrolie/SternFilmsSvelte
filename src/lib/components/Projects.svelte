<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { Flip } from "gsap/dist/Flip";

  gsap.registerPlugin(Flip);

  export let data;
  console.log(data);

  function playVideo(event) {
    event.target.play();
  }

  function pauseVideo(event) {
    event.target.pause();
  }

  onMount(() => {
    const videos = document.querySelectorAll(".video-flip");
    videos.forEach((video) => {
      video.addEventListener("click", () => {
        const state = Flip.getState(video);
        video.classList.toggle("full-screen");
        const newState = Flip.getState(video);
        Flip.from(state, {
          duration: 1.5,
          ease: "power4.inOut",
          absolute: true,
          simple: newState,
          onEnter: (elements) =>
            gsap.from(elements, { opacity: 0, stagger: 0.1 }),
          onLeave: (elements) =>
            gsap.to(elements, { opacity: 0, stagger: 0.1 }),
        });
      });
      
      
    });
  });

  
  function navigateWithDelay(event, url) {
    event.preventDefault();
    setTimeout(() => {
      window.location.href = url;
    }, 1500);
  }
</script>

<section>
  {#each data.allProjects as project}
  <a href={project.slug} on:click={(event) => navigateWithDelay(event, project.slug)}>
    <h1>{project.title}</h1>
    <div class="project-wrapper">
      <video
        class="video-flip"
        loop
        playsinline
        muted
        autoplay
        src={project.video.url}
        on:mouseenter={playVideo}
        on:mouseleave={pauseVideo}
      ></video>
    </div>
  </a>
  {/each}
</section>

<style>
  section {
    height: 100vh;
  }

  .project-wrapper {
    width: 50%;
    position: relative;
    aspect-ratio: 16/9;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 10;
    filter: grayscale(90%);
    transition: filter 0.5s, opacity 0.5s;
    opacity: 0.5;
  }

  video:hover {
    filter: grayscale(0);
    opacity: 1;
  }

  :is(.video-flip.full-screen) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }
</style>
