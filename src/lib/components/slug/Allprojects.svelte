<script>
  export let data;
  console.log(data);

  import { onMount } from 'svelte';
  onMount(() => {
    const videos = document.querySelectorAll('.video');

    videos.forEach(video => {
      video.addEventListener('mouseover', () => {
        video.play();
      });

      video.addEventListener('mouseleave', () => {
        video.pause();
      });
    });
  });

  console.log(data);

</script>


<div class="container-allprojects">
  {#each data.allProjects as all}
    <div class="container-project">
      <p>{all.title}</p>
    </div>
  {/each}
</div>


<style>

  .container-allprojects {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    width: 100%;
    height: 80vh;
    padding-top: var(--);
  }

  a {
    text-decoration: none;
    color: var(--main-offwhite);
    font-weight: 300;
  }

  .container-project {
    display: flex;
    align-items: center;
    width: 100%;
    height: 10vw;
    opacity: 0.5;
    transition: 0.5s;
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

