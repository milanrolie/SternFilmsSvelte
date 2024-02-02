<script>
  export let data;
  console.log(data);

  import InfoButton from "./buttons/InfoButton.svelte";
  import PauseButton from "./buttons/PauseButton.svelte";
  import MuteButton from "./buttons/MuteButton.svelte";
  import Description from "./Description.svelte";
  import Article from "./Article.svelte";
  import AllProjects from "../slug/Allprojects.svelte";

  import { onMount } from "svelte";
  import { afterUpdate } from "svelte";

  let showOverlay = false;
  let timeout;

  onMount(() => {
    window.addEventListener("mousemove", handleMouseMove);

    const container = document.querySelector(".info-container")

    window.addEventListener('load', () => {
      container.style.transform = 'translateY(-100px)'

      setTimeout(() => {
        container.style.transform = 'translateY(0px)'
      }, 1000) 
    });
  });

  afterUpdate(() => {
    if (showOverlay) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        showOverlay = false;
      }, 3000);
    }
  });

  function handleMouseMove() {
    showOverlay = true;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      showOverlay = false;
    }, 3000);
  }
</script>

  <div class="video-container">
    <div class="overlay" class:visible={showOverlay}></div>
    <!-- <video
      autoplay
      loop
      muted
      playsinline
      src={data.projectData.data.project.videoShortWebm.url}
    >
    </video> -->

    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/875250336?h=18db1e89de&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="InWork_Traineeship_FINAL_NOsubs"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  
  <section class="info-container">
    <InfoButton />
  
    <div class="buttonVideo">
      <PauseButton />
      <MuteButton />
    </div>
  
    <h1>{data.projectData.data.project.title}</h1>
    <span></span>
  
    <div class="container-inner">
      <Description data={data.projectData.data} />
      <Article data={data.projectData.data} />
    </div>
    
    <AllProjects data={data.allProjectsData.data} />
  </section>


<style>
  .video-container {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5760679271708684) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  .overlay.visible {
    opacity: 0.5;
  }

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    aspect-ratio: 16/9;
  }

  .info-container {
    position: relative;
    background-color: rgba(0, 0, 0, 0.635);
    width: 100%;
    left: 0;
    height: 100%;
    color: var(--main-offwhite);
    padding: var(--margin);
    background-color: rgba(0, 0, 0, 0.675);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    transition: 1s ease;
    transform: translateY(-6.5%);
  }

  span {
    display: block;
    width: 100%;
    height: 1px;
    background-color: white;
    margin: 1rem 0;
  }

  h1 {
    font-weight: 600;
    font: 24px;
  }

  .container-inner {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  .buttonVideo {
    position: absolute;
    gap: 0.5rem;
    top: -5.5rem;
    left: 4rem;
  }

  @media (max-width: 768px) {
    .info-container {
      padding: 2rem;
      font-size: 1rem;
    transform: translateY(-5%);

    }

    .buttonVideo {
      top: -3.5rem;
      left: 1rem;
    }

    .container-inner {
      flex-direction: column;
    }
  }
</style>
