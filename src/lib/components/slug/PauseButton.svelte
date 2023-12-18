<script>
  import Pause from '$lib/assets/pause.svg';
</script>

<button>
    <img src={Pause} alt="">  
</button>

<style>
  button {
    position: absolute;
    top: -4rem;
    left: 5.5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    z-index: 100;
  }

  button:hover {
    opacity: 0.8;
  }
</style>