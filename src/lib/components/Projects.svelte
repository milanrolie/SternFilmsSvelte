<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { Flip } from "gsap/dist/Flip";

  gsap.registerPlugin(Flip);

  export let data;

  let isVideoPlaying = false;
  let isButtonHovered = false;

  function playVideo(event) {
    event.target.play();
    isVideoPlaying = true;
  }

  function pauseVideo(event) {
    event.target.pause();
    isVideoPlaying = false;
  }

  function flipAnimation(video) {
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
  }

  onMount(() => {
    const videos = document.querySelectorAll(".video-flip");
    videos.forEach((video) => {
      pauseVideo({ target: video });
      video.addEventListener("click", () => {
        flipAnimation(video);
      });
    });
  });

  function navigateWithDelay(event, url) {
  event.preventDefault();
  setTimeout(() => {
    window.location.href = url;
    const video = document.querySelector('.video-flip');
    if (video) {
      flipAnimation(video);
    }
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
        <div class="project">
          <video
            class="video-flip"
            loop
            playsinline
            muted
            autoplay
            src={project.videoShortWebm.url}
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
          <button
            class:active={isButtonHovered}
            on:mouseenter={() => {
              isButtonHovered = true;
              if (!isVideoPlaying) {
                playVideo({ target: document.querySelector('.video-flip') });
              }
            }}
            on:mouseleave={() => {
              isButtonHovered = false;
              pauseVideo({ target: document.querySelector('.video-flip') });
            }}
            on:click={(event) => {
              navigateWithDelay(event, project.slug);
              flipAnimation(document.querySelector('.video-flip'));
            }}
            >Watch video</button
          >
        </div>
    </div>
  {/each}
</section>

<style>
  section {
    position: relative;
    padding: var(--main-padding);
    z-index: 5;
    background-color: var(--main-dark);
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
    border-radius: 1rem;
    cursor: pointer;
    margin-bottom: 2rem;
    aspect-ratio: 16/9;
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
    aspect-ratio: 16/9;
    border-radius: 1rem;
  }

  video:hover {
    filter: grayscale(0);
    opacity: 1;
    aspect-ratio: none;
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
    margin-bottom: 0.2rem;
    color: var(--main-offwhite);
  }

  p {
    font-size: 0.8rem;
    font-weight: 100;
    margin-top: 0.5rem;
    opacity: 0.8;
    color: var(--main-offwhite);
  }

  a {
    text-decoration: none;
    color: currentColor;
  }

  button {
    padding: 0.5rem 3rem;
    border: none;
    border-radius: 5rem;
    color: var(--main-offwhite);
    font-size: 0.8rem;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    cursor: pointer;
    background: none;
    border: solid 1px var(--main-offwhite);
    transition: all 0.3s;
  }

  button:hover  {
    background: var(--main-offwhite);
    color: var(--main-dark);
  }

  .project-wrapper:hover .video-flip {
    filter: grayscale(0);
    opacity: 1;
  }
</style>
