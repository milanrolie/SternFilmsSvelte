<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import logo from "$lib/assets/logo.svg";

  let darkMode = false;

  function toggleDarkMode() {
    darkMode = !darkMode;
  }

  onMount(() => {
    document.documentElement.style.setProperty(
      "--main-dark",
      darkMode ? "#c3c3c3" : "#000000"
    );
    document.documentElement.style.setProperty(
      "--main-offwhite",
      darkMode ? "#000000" : "#c3c3c3"
    );

    const menuButton = document.querySelector(".menu-button");
    let closeMenu = document.querySelector(".close-button");

    let tl = gsap.timeline({ paused: true, reversed: true });

    // tl.to(".menu-wrapper", {
    //   width: "100%",
    //   borderRadius: "0em",
    //   duration: 1.2,
    //   ease: "Expo.easeInOut",
    // });

    tl.to(
      ".menu-button",
      { opacity: 0, duration: 0.5, ease: "Expo.easeInOut", delay: 0.3 },
      "<"
    );
    ".close-button",
      { opacity: 1, duration: 0.001, ease: "Expo.easeInOut", delay: 1 },
      "<";
    tl.to(
      ".menu-wrapper",
      {
        height: "100svh",
        opacity: 1,
        duration: 1.2,
        ease: "Expo.easeOut",
        delay: 0.1,
        y: "0",
      },
      "<"
    );
    tl.to(
      ".menu-text-gsap",
      { y: 0, duration: 2, ease: "Expo.easeOut", delay: 0.7 },
      "<"
    );

    menuButton.addEventListener("click", function () {
      tl.timeScale(1.5).play();
    });

    closeMenu.addEventListener("click", function () {
      tl.timeScale(1.5).reverse();
    });
  });
</script>

<nav>
  <a href="/">
    <div class="logo">
      <img src={logo} alt="" />
    </div>
  </a>

  <button class="menu-button">
    <svg data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"
      ><path
        d="M97.092 36.078H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 61.889H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 87.7H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222z"
      /></svg
    >
  </button>
  <div class="menu-wrapper">
    <button class="close-button">
      <svg viewBox="0 0 15 15" fill="" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="1.19685"
          y1="1.29289"
          x2="13.2177"
          y2="13.3137"
          stroke=""
          stroke-width="2"
        />
        <line
          x1="1.29289"
          y1="13.3139"
          x2="13.3137"
          y2="1.29307"
          stroke=""
          stroke-width="2"
        />
      </svg>
    </button>

    <div class="menu-container">
      <ul class="nav-list">
        <li><a href="#" class="menu-text-gsap">Home</a></li>
        <li><a href="#" class="menu-text-gsap">Blog</a></li>
        <li><a href="#" class="menu-text-gsap">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

<style>
  :root {
    --main-dark: #000000;
    --main-bright: #fcb81f;
    --main-blue: #002c4a;
    --accent-blue: #ffe7ce;
    --main-offwhite: #c3c3c3;
    --main-padding: 4rem;
    --margin: 4rem;
    --borderr: 0.5rem;
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
    opacity: 0.8;
  }

  a {
    width: max-content;
  }

  svg {
    width: 2rem;
    height: 2rem;
    fill: var(--main-offwhite);
  }

  /* .available {
    padding: 0.6em 1.5em;
    border: .5px solid var(--main-offwhite);
    border-radius: .5rem;
    font-size: 0.9em;
    font-size: .8rem;
  } */

  .menu-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    opacity: 1;
    transform: translateY(-3em);
    z-index: 99999;
  }

  .menu-button {
    display: flex;
    align-items: center;
    position: fixed;
    top: 4em;
    right: 4em;
    padding: 0.5rem;
    background-color: rgba(128, 128, 128, 0.2);
    border-radius: 50%;
    opacity: 1;
    z-index: 99999;
  }

  .close-button {
    stroke: #fff;
    position: fixed;
    top: 4em;
    right: 4em;
    opacity: 1;
    z-index: 2000;
    padding: 0.5rem;
    z-index: 99999;
    cursor: pointer;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  nav li {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-items: baseline;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  .menu-text-gsap {
    font-size: 5em;
    transform: translateY(-130%);
    transition: margin 0.5s;
    list-style: none;
    color: var(--main-offwhite);
  }

  /* .menu-wrapper p {
    writing-mode: sideways-rl;
    position: absolute;
    left: 0;
    bottom: 0;
    color: var(--main-offwhite);
  } */
</style>
