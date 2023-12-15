<script>
  export let data
  console.log(data)
</script>

<div class="container">
  <div class="video-container">
    <img src={data.project.videoThumbnail.url}>
  </div>
  <div class="info-container">
    <p></p>
  </div>
</div>

<style>
  .container {
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
    background-color: rgba(0, 0, 0, 0.765);
    bottom: 0;
    left: 5%;
    width: 90%;
    height: 20vw;
  }
</style>