<script>
  import Play from '$lib/assets/play.svg';
</script>

<button>
    <img src={Play} alt="">
</button>

<style>
  button {
    position: absolute;
    top: -4rem;
    left: 2rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    z-index: 100;
  }

  button:hover {
    opacity: 0.8;
  }
</style>