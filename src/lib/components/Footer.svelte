<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";
  import gradientBG from "$lib/assets/gradientBG.png";


  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    gsap.from(".footer-wrapper", {
      scrollTrigger: {
        trigger: "footer",
        scrub: 1,
        start: "top-=700",
        end: "top",
      },
      y: 150,
    });
  });
</script>

<footer id="contact">
  <div class="footer-wrapper">
    <img src={gradientBG} alt="">
    <div class="footer-content">
      <div class="footer-left">
        <h2>Let's work together</h2>
        <p>
          I'm currently available for freelance work. If you have a project that
          you want to get started, think you need my help with something or just
          fancy saying hey, then get in touch.
        </p>

          <a href="mailto:filmsstern@gmail.com">contact@sternfilms.nl</a>

          
                    

</footer>
<!-- <div class="filler"></div> -->

<style>
  footer {
    position: relative;
    padding: var(--main-padding);
    height: 90vh;
    background-color: var(--main-white);
    width: 100%;
    z-index: 1;
    /* transform: translateY(-300px); */
    /* background-color: rgba(0, 0, 0, 0.675);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px); */
  }

  .footer-wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 100%;
    border-radius: 1rem;
    /* background: rgba(14, 14, 14, 0.76); */
    padding: 2rem;
    overflow: hidden;
  }

  .footer-content {
    width: 50%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
  }

  .footer-left {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
  }

  .footer-left h2 {
    font-size: 2rem;
    font-weight: 100;
    z-index: 5;
  }

  .footer-left p {
    font-size: 0.8rem;
    font-weight: 100;
    opacity: 0.8;
  }

  a {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    text-decoration: none;
    color: currentColor;
    font-size: 4rem;
    font-weight: 100;
    opacity: 0.8;
    transition: .2s;
    margin-top: 5rem;
  }

  a:hover {
    color: rgb(255, 105, 64);
  }

  @media screen and (max-width: 1122px) {
  }

  @media screen and (max-width: 700px) {
    footer {
      height: 50vh;
      padding: 1rem;
    }

    .footer-wrapper {
      flex-direction: column;
      padding: 1rem;
    }

    .footer-content {
      width: 100%;
    }

    .footer-left {
      width: 100%;
    }

    .footer-left h2 {
      font-size: 1.5rem;
    }

    .footer-left p {
      font-size: 0.8rem;
    }

    a {
      font-size: 2rem;
      left: 1rem;
      bottom: 1rem;
    }

  }
</style>
