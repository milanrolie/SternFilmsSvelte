<script>
  import Pause from '$lib/assets/pause.svg';
  import Play from '$lib/assets/play.svg';
  import { onMount } from "svelte";

  onMount(() => {
    const video = document.querySelector("video");
    const Button = document.querySelector("#buttonPlay");
    const pauseButton = document.querySelector("#pause");
    const playButton = document.querySelector("#play");


    
    Button.addEventListener("click", () => {
      video.paused ? video.play() : video.pause();
      pauseButton.style.display = video.paused ? "none" : "block";
      playButton.style.display = video.paused ? "block" : "none";
    });
  
  });
</script>

<button id="buttonPlay">
    <img id="pause" src={Pause} alt="">  
    <img id="play" src={Play} alt="">
</button>

<style>
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    z-index: 100;
  }

  button:hover {
    opacity: 0.8;
  }

  #play {
    display: none;
  }
</style>