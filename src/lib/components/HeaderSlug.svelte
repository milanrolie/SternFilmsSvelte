<script>
  export let data
  console.log(data)
</script>

<div class="container">

  <div class="video-container">
    <video autoplay loop muted playsinline src={data.project.video.url}>
  </div>

  <section class="info-container">
    <h1>{data.project.title}</h1>
    <span></span>

    <div class="info-project">
      <p class="date">
        {data.project.date}
      </p>
      <p class="client"></p>
    </div>

    <article>
      coming....
    </article>
    
  </section>
</div>

<style>
  .container { 
    position: sticky;
    position: relative;
    width: 100%;
    height: 100vh;
  }

  .video-container {
    width: 100%;
    height: 100%;

    & img {
      width: 100%;
      height: 100%;
    }
  }

  .info-container {
    position: absolute;
    color: white;
    background-color: rgba(0, 0, 0, 0.765);
    bottom: 0;
    left: 5%;
    width: 90%;
    height: 20vw;
    padding: var(--margin);

    & span {
      display: flex;
      width: 100%;
      border-bottom: 1px solid white;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }

  }
</style>