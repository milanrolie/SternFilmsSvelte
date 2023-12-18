<script>
      export let data;
      console.log(data);

      // Function to handle video play
  function playVideo(event) {
    event.target.play();
  }

  // Function to handle video pause
  function pauseVideo(event) {
    event.target.pause();
  }
</script>

<section>
    {#each data.allProjects as project }
    <h1>{project.title}</h1>
    <a href={project.slug}>project</a>
    <div class="project-wrapper">
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
  {/each}
  
</section>

<style>
    section {
        height: 100vh;
    }

    .project-wrapper {
        width: 80%;
        height: 70vh;
        position: relative;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 10;
        opacity: 1;
        transition: .5s;
    }

    img:hover {
        opacity: 0;
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
        transition: .5s;
        opacity: 0.5;
    }

    video:hover {
        filter: grayscale(0);
        opacity: 1;
    }

</style>