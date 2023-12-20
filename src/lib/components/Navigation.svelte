<script>
  let darkColor = true;

  function swapColors() {
    darkColor = !darkColor;
  }
</script>

<nav>
  <a href="/">
    <div class="logo">
      <svg width="96" height="38" viewBox="0 0 96 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- SVG paths omitted for brevity -->
      </svg>
    </div>
  </a>
  <div class="menu-wrapper">
    <button on:click={swapColors}>Swap Colors</button>
  </div>
</nav>

<style>
  :root {
    --main-dark: #000000;
    --main-bright: #FCB81F;
    --main-blue: #002C4A;
    --accent-blue: #FFE7CE;
    --main-offwhite: #c3c3c3;
    --main-padding: 4rem;

    --margin: 4rem;
    --borderr: .5rem;

    /* Swap colors based on the 'darkColor' variable */
    --main-dark: {darkColor ? '--main-offwhite' : '#000000'};
    --main-offwhite: {darkColor ? '#000000' : '--main-dark'};
  }

  /* Rest of the CSS styles omitted for brevity */
</style>
