<script>
  export let data
  console.log(data)
</script>

<div class="video-container">
  <video autoplay loop muted playsinline src={data.project.video.url}>
</div>

<div class="info-container">
  <h1>{data.project.title}</h1>

  <span></span>

  <div class="description">
    <div class="date">
      <h4>Date:</h4>
      <p>{data.project.date}</p>
    </div>

   <div class="client">
      <h4>Client:</h4>
      <p>{data.project.client}</p>
    </div>
  </div>
</div>

<style>
.video-container {
  position: fixed;
  width: 100%;
  height: 100vh;
}

.info-container {
  position: absolute;
  margin-top: 100vh;
  background-color: rgba(0, 0, 0, 0.635);
  width: 90%;
  left: 5%;
  height: 25vw;
  color:var(--main-offwhite);
  padding: var(--margin);
  border-radius: var(--borderr);
  background-color: rgba(0, 0, 0, 0.675);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}

span {
  display: block;
  width: 100%;
  height: 1px;
  background-color: white;
  margin: 1rem 0;
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 80%
}

.date {
  margin-bottom: 1rem;
}

h1 {
  font-weight: 600;
  font: 24px;
}
</style>