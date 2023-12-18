<script>
    import { gsap } from "gsap";
    import Lenis from '@studio-freight/lenis'
    import { onMount } from "svelte";
  
    onMount(() => {
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
  
      lenis.on("scroll", () => {
        console.log('scrollieeee');
      });
      console.log('hoi');
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
  
      gsap.ticker.lagSmoothing(0);
    });
  </script>
  
  <main>
  <slot />
  </main>
  