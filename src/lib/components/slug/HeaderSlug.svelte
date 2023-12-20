<script>
  export let data;

  import InfoButton from "./buttons/InfoButton.svelte";
  import PlayButton from "./buttons/PlayButton.svelte";
  import PauseButton from "./buttons/PauseButton.svelte";
  import MuteButton from "./buttons/MuteButton.svelte";
  import Description from "./Description.svelte";
  import Article from "./Article.svelte";
</script>

<div class="video-container">
  <video autoplay loop muted playsinline src={data.project.video.url}>
</div>



<section class="info-container">
  <InfoButton />
  <PlayButton />  
  <PauseButton class="pause" />
  <MuteButton /> 
  <h1>{data.project.title}</h1>
  <span></span>

  <div class="container-inner">
    <Description {data}/>
    <Article />
  </div>
</section>



<style>
.video-container {
  position: fixed;
  width: 100%;
  height: 100vh;
}

video {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.info-container {
  position: absolute;
  margin-top: 100vh;
  background-color: rgba(0, 0, 0, 0.635);
  width: 100%;
  left: 0;
  height: 25vw;
  color:var(--main-offwhite);
  padding: var(--margin);
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
</style>