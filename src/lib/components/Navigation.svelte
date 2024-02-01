<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import logo from "$lib/assets/logo.svg";
  import menuImage from "$lib/assets/stern.jpeg";

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
        width: "33%",
        opacity: 1,
        duration: 1,
        ease: "circ.out",
        delay: 0.1,
      },
      "<"
    );
    tl.to(
      ".menu-text-gsap",
      { y: 0, duration: 2, ease: "Expo.easeOut", delay: 0.7 },
      "<"
    );

    tl.to("span", { y: 0, duration: 2, opacity: 1, ease: "Expo.easeOut", delay: 1 }, "<");

    menuButton.addEventListener("click", function () {
      tl.timeScale(1.5).play();
    });

    closeMenu.addEventListener("click", function () {
      tl.timeScale(1.5).reverse();
    });
  });
</script>

<nav aria-labelledby="mainmenulabel" role="navigation">
  <a href="/">
    <div class="logo">
      <img src={logo} alt="" />
    </div>
  </a>

  <button class="menu-button">
    <svg
      class="button-click"
      data-name="Layer 3"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      ><path
        d="M97.092 36.078H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 61.889H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 87.7H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222z"
      /></svg
    >
  </button>

  <div class="menu-wrapper">
    <button class="close-button">
      <svg
        class="button-click"
        viewBox="0 0 15 15"
        fill=""
        xmlns="http://www.w3.org/2000/svg"
      >
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
      <div class="list-wrapper">
        <ul class="nav-list">
          <li><a href="/" class="menu-text-gsap">Home</a> <span>01</span></li>
          <li><a href="/#project-wrapper" class="menu-text-gsap">Work</a> <span>02</span></li>
          <li><a href="#contact" class="menu-text-gsap">Contact</a><span>03</span></li>
        </ul>
      </div>
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
    /* width: max-content; */
    text-decoration: none;
    font-weight: 100;
  }

  .menu-button  {
    display: flex;
    align-items: center;
    position: fixed;
    top: 4em;
    right: 4em;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 50%;
    opacity: 1;
    z-index: 99999;
    transition: 0.5s;
  }

  .menu-button:focus,
  .close-button:focus {
    border: rgb(238, 238, 238) 2px solid;
  }

  .button-click {
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
    right: 0;
    width: 0;
    height: 100svh;
    cursor: pointer;
    background: rgba(53, 53, 53, 0.4);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    overflow: hidden;
    opacity: 1;
    /* transform: translateY(-3em); */
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
    transition: 0.5s;
  }

  .close-button:hover,
  .menu-button:hover {
    scale: 1.1;
  }

  .menu-container {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .list-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: var(--main-padding);
  }

  .heading {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1em;
    height: 100%;
    margin-top: var(--margin);
  }

  nav li {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-items: baseline;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    border-bottom: 1px solid var(--main-offwhite);
  }

  span {
    color: var(--main-offwhite);
    transform: translateY(100%);
    opacity: 0;
  }

  .socials {
    background-color: blue;
    width: 100%;
    height: 100%;
    border-radius: var(--borderr);
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
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

  @media (max-width: 768px) {
    nav {
      padding: 1rem;
    }

    .menu-button {
      top: 1em;
      right: 1em;
    }
  }
</style>
