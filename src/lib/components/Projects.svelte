<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { Flip } from "gsap/dist/Flip";

  gsap.registerPlugin(Flip);

  export let data;


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
      pauseVideo({ target: video.querySelector("video") }); // Pause video by default
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
    <div class="project-wrapper">
      <a
        href={project.slug}
        on:click={(event) => navigateWithDelay(event, project.slug)}
      >
        <div class="project video-flip">
          <video
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
      <div class="subscript-wrapper">
        <div class="subscript">
        <h3>{project.title}</h3>
        <p>Project in one sentence</p>
      </div>
      <button>GO</button>
      </div>
    </div>
  {/each}
</section>

<style>
  section {
    height: 100vh;
    padding: var(--main-padding);
  }

  .project-wrapper {
    width: 60vw;
    position: relative;
    margin-bottom: 15vh;
  }

  .project {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    aspect-ratio: 16/9;
    margin-bottom: 2rem;
  }

  .project-wrapper:nth-of-type(even) {
    margin-left: 30vw;
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
    transition:
      filter 0.5s,
      opacity 0.5s;
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

  .subscript-wrapper {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    font-size: 2rem;
    font-weight: 100;
    margin-bottom: .2rem;
  }

  p {
    font-size: .8rem;
    font-weight: 100;
    margin-top: .5rem;
    opacity: .8;
  }

  a {
    text-decoration: none;
    color: currentColor;
    background-color: aqua;
  }

  button {
    padding: .5rem 3rem;
    border: none;
    border-radius: 5rem;
    color: var(--main-offwhite);
    font-size: .8rem;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: .5px;
    cursor: pointer;
    background: none;
    border: solid 1px var(--main-offwhite);
    transition: all .3s;
  }

  button:hover {
    background: var(--main-offwhite);
    color: var(--main-dark);
  }
</style>
