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
  {#each data.allProjects as all}
  <a href={all.slug}>
    <div class="container-project">
      <p>{all.title}</p>
      <video class="video" src={all.videoShortWebm.url} />
    </div>
  </a>
  {/each}
</div>


<style>

  .container-allprojects {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    width: 100%;
    height: 90vh;
    padding-top: var(--);
    overflow-y: scroll;
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
    width: 80%;
    height: 10vw;
    opacity: 0.3;
    transition: 0.5s;
    padding-top: 1rem;
    margin: 0 auto;
  }

  .container-project:hover {
    opacity: 1;
  }

  p {
    font-size: 32px;
  }

  video {
    height: 100%;
  }
</style>

