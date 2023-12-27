<script>
  export let data;
  // console.log(data);

  import { onMount } from 'svelte';
  onMount(() => {
  const containers = document.querySelectorAll('.container-project');

  containers.forEach(container => {
    container.addEventListener('mouseover', () => {
      const video = container.querySelector('.video');
      video ? video.play() : null;
    });

    container.addEventListener('mouseleave', () => {
      const video = container.querySelector('.video');
      video ? video.pause() : null;
    });
  });
});
</script>


<div class="container-allprojects">
  <h2>Other Projects:</h2>
  {#each data.allProjects as all}
  <div class="border">
    <a href={all.slug}>
      <div class="container-project">
        <p>{all.title}</p>
        <video preload="auto" class="video" src={all.videoShortWebm.url} />
      </div>
    </a>
  </div>
  {/each}
</div>


<style>

  .container-allprojects {
    width: 100%;
    height: 100vh;
    padding-top: var(--);
    margin-top: 4rem;
    overflow-y: auto;
  }

  h2 {
    font-size: 32px;
    font-weight: 300;
    padding-bottom: 2rem;
  }

  a {
    text-decoration: none;
    color: var(--main-offwhite);
    font-weight: 300;
  }

  .container-project {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 10vw;
    opacity: 0.3;
    transition: .5s;
    margin: 0 auto;
  }

  .border {
    border-bottom: 1px solid var(--main-offwhite);
    border-top: 1px solid var(--main-offwhite);
  }

  .border:nth-of-type(even) {
    border-top: none;
  }

  .border:nth-of-type(even) {
    border-bottom: none;
  }

  .container-project:hover {
    background-color: var(--main-offwhite);
    color: black;
    opacity: 1;
    padding-left: 1rem;
  }

  p {
    font-size: 32px;
  }

  video {
    height: 100%;
  }
</style>

