<script>
  import { gsap } from "gsap";
  import Lenis from "@studio-freight/lenis";
  import { onMount, onDestroy } from "svelte";

  let darkMode = false;

  function toggleDarkMode() {
    darkMode = !darkMode;
    document.documentElement.style.setProperty(
      "--main-dark",
      darkMode ? "#F5F5F5" : "#000000"
    );
    document.documentElement.style.setProperty(
      "--main-offwhite",
      darkMode ? "#000000" : "#F5F5F5"
    );
  }

  onMount(() => {
    document.documentElement.style.setProperty(
      "--main-dark",
      darkMode ? "#F5F5F5" : "#000000"
    );
    document.documentElement.style.setProperty(
      "--main-offwhite",
      darkMode ? "#000000" : "#F5F5F5"
    );

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(1.8, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 1.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", () => {});
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    onDestroy(() => {
      lenis.destroy();
    });
  });
</script>

<main>
  <slot />
  <!-- <button on:click={toggleDarkMode}>Dark mode</button> -->
</main>

<style>
  :root {
    --main-dark: #000000;
    --main-bright: #fcb81f;
    --main-blue: #002c4a;
    --accent-blue: #ffe7ce;
    --main-offwhite: #f9f9f9;
    --main-padding: 4rem;

    --margin: 4rem;
    --borderr: 0.5rem;
    --line-height: 1.5;
  }

  button {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    transition: background-color 0.2s ease;
  }
</style>
