<script>
  import Mute from '$lib/assets/mute.svg';
</script>

<button>
    <img src={Mute} alt="">   
</button>

<style>
  button {
    position: absolute;
    top: -4rem;
    left: 9rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    z-index: 100;
  }

  button:hover {
    opacity: 0.8;
  }
</style>