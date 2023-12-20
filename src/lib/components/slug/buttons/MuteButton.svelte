<script>
  import Mute from '$lib/assets/mute.svg';
  import { onMount } from 'svelte';

  onMount(() => {
    const video = document.querySelector('video');
    const muteButton = document.querySelector('#onMute');

    muteButton.addEventListener('click', () => {
      video.muted ? (video.muted = false) : (video.muted = true);
    });
  });

</script>

<button id="onMute">
    <img src={Mute} alt="">   
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
</style>