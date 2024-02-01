<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { Flip } from "gsap/dist/Flip";

  import placeholder from "$lib/assets/gradientBG.png";

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
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      videos.forEach((video) => {
        playVideo({ target: video });
      });
    } else {
      videos.forEach((video) => {
        pauseVideo({ target: video });
        video.addEventListener("click", () => {
          flipAnimation(video);
        });
      });
    }
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
    <div class="project-wrapper" id="project-wrapper">
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
            preload="auto"
            on:mouseenter={playVideo}
            on:mouseleave={pauseVideo}
          >
            <source src={project.videoShortWebm.url} type="video/webm" />
            <source src={project.videoShortMp4.url} type="video/mp4" />
          </video>
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
            ><span class="button-text"> Watch video </span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></button
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
    /* background-color: var(--main-dark); */
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
    position: relative;
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
    min-width: 12rem;
  }

  svg {
    position: absolute;
    top: 40%;
    right: 3rem;
    width: .9rem;
    height: .9rem;
    margin-left: 0.5rem;
    fill: var(--main-offwhite);
    overflow: visible;
    transform: translateY(-4px) translateX(2rem);
    transition: all 0.3s;
    opacity: 0;
  }

  button:hover svg {
    opacity: 1;
    transform: translateY(-4px)  translateX(.5rem); ;
  }

  .project-wrapper:hover svg {
    opacity: 1;
    transform: translateY(-4px)  translateX(.5rem); ;
  }

  .button-text {
    position: absolute;
    left: 0;
    top: 40%;
    transition: all 0.3s;
    width: 12rem;
  }

  button:hover .button-text {
    transform: translateX(-.8rem);
  }

  .project-wrapper:hover  .button-text {
    transform: translateX(-.8rem);
  }

  .project-wrapper:hover .video-flip {
    filter: grayscale(0);
    opacity: 1;
  }

  @media (max-width: 768px) {
    section {
      padding: 1rem;
    }

    .project-wrapper {
      width: 100%;
      margin-bottom: 10vh;
    }

    .project-wrapper:nth-of-type(even) {
      margin-left: 0;
    }

    h3 {
      font-size: 1.5rem;
    }

    .project {
      border-radius: 0;
    }

    .subscript-wrapper {
      flex-direction: column;
    }

    video {
      border-radius: 0;
      filter: grayscale(0);
      opacity: 1;
      border-radius: 1rem;
    }

    button {
      margin-top: 1rem;
      margin-top: 10%;
      margin-left: 40%;
    }

    .button-text {
      position: relative;
      left: 0;
      top: 0;
      transform: none;
      width: auto;
    }

    svg {
      position: relative;
      top: 0;
      right: 0;
      width: 1rem;
      height: 1rem;
      margin-left: 0.5rem;
      fill: var(--main-offwhite);
      overflow: visible;
      transform: none;
      transition: all 0.3s;
      opacity: 1;
    }

    .project-wrapper:hover svg {
      opacity: 1;
      transform: none;
    }

    .project-wrapper:hover .button-text {
      transform: none;
    }

    .project-wrapper:hover .video-flip {
      filter: grayscale(0);
      opacity: 1;
    }

  }


</style>

