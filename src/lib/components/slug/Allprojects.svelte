<script>
  export let data;

  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  onMount(() => {
    const containers = document.querySelectorAll(".container-project");

    containers.forEach((container) => {
      container.addEventListener("mouseover", () => {
        const video = container.querySelector(".video");
        video ? video.play() : null;
      });

      container.addEventListener("mouseleave", () => {
        const video = container.querySelector(".video");
        video ? video.pause() : null;
      });
    });

    gsap.registerPlugin(ScrollTrigger);
    const elements = document.querySelectorAll(".container-project");

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 100%",
            end: "bottom 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  });
</script>

<div class="container-allprojects">
  <h4>Other Projects:</h4>
  {#each data.allProjects as all}
    <div class="container-project">
      <div class="container-video">
        <a href={all.slug} />
        <div class="container-left">
          <video muted preload="auto" class="video" src={all.videoShortWebm.url} />
          <span>{all.title}</span>
        </div>

        <div class="container-right">
          <p>{all.projectInOneSentence}</p>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .container-allprojects {
    width: 100%;
    height: 100%;
    margin-top: 15rem;
    overflow-y: auto;
  }

  h4 {
    font-size: 24px;
    font-weight: 300;
    padding-bottom: 2rem;
  }
  a {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .container-project {
    position: relative;
    border-bottom: 1px solid var(--main-offwhite);
    border-top: 1px solid var(--main-offwhite);
  }

  .container-project:nth-of-type(even) {
    border-top: none;
  }

  .container-project:nth-of-type(even) {
    border-bottom: none;
  }
  .container-video {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 9rem;
    transition: 0.5s;
    margin: 0 auto;
    opacity: 0.5;
  }

  .container-video:hover {
    padding-left: 1rem;
    transition: 0.5s;
    opacity: 1;
  }

  .container-left {
    display: flex;
    align-items: center;
    width: 50%;
    height: 5rem;
  }

  .container-right p {
    padding-right: 1rem;
  }

  span {
    font-size: 24px;
    margin-left: 1rem;
  }

  video {
    height: 100%;
  }

  @media (max-width: 768px) {
    .container-allprojects {
      width: 100%;
      height: 100%;
      margin-top: 15rem;
      overflow: hidden;
    }
    p {
      display: none;
    }
  }
</style>
