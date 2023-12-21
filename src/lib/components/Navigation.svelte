<script>
  import { onMount } from 'svelte';
  import logo from '$lib/assets/logo.svg';

  let darkMode = false;

  function toggleDarkMode() {
    darkMode = !darkMode;
  }

  onMount(() => {
    document.documentElement.style.setProperty('--main-dark', darkMode ? '#c3c3c3' : '#000000');
    document.documentElement.style.setProperty('--main-offwhite', darkMode ? '#000000' : '#c3c3c3');
  });
</script>

<nav>
  <a href="/">
    <div class="logo">
      <img src={logo} alt="">
    </div>
  </a>

  
  <div class="menu-wrapper">
    <svg data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M97.092 36.078H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 61.889H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 87.7H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222z"/></svg>
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
  }

  nav {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: var(--main-dark);
    padding: var(--main-padding);
    text-transform: uppercase;
    align-items: center;
    z-index: 100;
  }

  .logo {
    width: 10%;
    opacity: .8;
  }

  a {
    width: max-content;
  }

  svg {
    width: 2rem;
    height: 2rem;
    fill: var(--main-offwhite);
  }

  .available {
    padding: 0.6em 1.5em;
    border: .5px solid var(--main-offwhite);
    border-radius: .5rem;
    font-size: 0.9em;
    font-size: .8rem;
  }

  .menu-wrapper {
    position: fixed;
    right: var(--main-padding);
    top: var(--main-padding);
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-wrapper p {
    writing-mode: sideways-rl;
    position: absolute;
    left: 0;
    bottom: 0;
    color: var(--main-offwhite);
  }
</style>
