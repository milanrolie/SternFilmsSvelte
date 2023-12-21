<script>
    import stern from "$lib/assets/stern.jpeg"

    import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import SplitType from "split-type";
  import { onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const text = new SplitType("#split", { types: "words" });
    const subtext = new SplitType("#subtext", { types: "words" });

    gsap.from(text.words, {
      duration: 1,
      stagger: 0.01,
      scrollTrigger: {
        trigger: ".gsap-load",
        start: "top-=400",
      },
      opacity: 0,
      y: 20,

      // onComplete() {
      //   SplitType.revert("#split");
      // },
    });

    gsap.from(subtext.words, {
      duration: 1,
      stagger: 0.005,
      scrollTrigger: {
        trigger: ".gsap-load",
        start: "top-=300",
      },
      opacity: 0,
      y: 20,

      onComplete() {
        // SplitType.revert("#subtext");
      },
    });
  });

</script>

<section>
  <p class="introduction gsap-load" id="split">
    <span class="text-indent"> Peaks</span> pierce the sky, giants of stone, Their mantles of snow, a pristine
    crown. Valleys cradle life, serene and deep, Where rivers meander, secrets
    to keep.
  </p>

  <div class="about-wrapper">
    <img src={stern} alt="" />
  </div>
</section>

<style>
  section {
    position: relative;
    padding: var(--main-padding);
    z-index: 5;
  }

  p {
    font-size: 3.3rem;
    line-height: 1.2em;
    padding: 0 2rem;
    font-weight: 100;
    margin-right: 15vw;
    letter-spacing: 0.5px;
    color: var(--main-offwhite);
  }

  .about-wrapper {
    position: relative;
    height: 60vh;
    margin-left: 35vw;
    margin-top: var(--main-padding);
    border-radius: 1rem;
    z-index: 5;
    background: rgba(14, 14, 14, 0.76);
    padding: 2rem;
  }

  .text-indent {
    text-indent: 5rem;
  }

  img {
    height: 30%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
  }
</style>
