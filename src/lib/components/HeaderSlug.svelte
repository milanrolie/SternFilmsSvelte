<script>
  export let data
  console.log(data)
</script>

<div class="container">
  <div class="video-container">
    <video autoplay loop muted playsinline src={data.project.video.url}>
  </div>

  <section>
    <h2>{data.project.title}</h2>
    <span></span>

    <div class="container-info-project">
      <div class="date">
        <h4>Date</h4>
        <p class="date">{data.project.date}</p>
      </div>

      <div class="client-info">
        <h4>Opdrachtgever</h4>
        <p class="client">coming..</p>
      </div>
    </div>
  </section>
</div>

<style>
  secton {
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

  .container-info-project {
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 50%;
    height: 100%;
  }
</style>