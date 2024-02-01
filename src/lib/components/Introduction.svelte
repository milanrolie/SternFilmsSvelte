<script>
  import stern from "$lib/assets/stern.jpeg";

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
    <span class="text-indent"> I</span> am incredibly curious and enjoy pushing my
    own boundaries. I tried to expose myself to video as much as possible, working
    alongside a lot of people in the world of videography.
  </p>

  <div class="about-wrapper">
    <img src={stern} alt="" />
    <p>
      Hi, I’m Stern (23). <br> <br>
      
      Filmmaking is in my blood. My grandfather made films,
      my uncle animates, and my father has been busy with photography his entire
      life. It's quite strange then, that I only picked up a camera for the
      first time at the age of 18. I wasn't a natural talent, but the spark had
      been ignited. It was so fiery that I decided to switch my course of study,
      marking the beginning of my video journey. 

      <br> <br>
      
      In May 2022, I decided it was
      time to register my own company, Stern Films became a reality, and my
      hobby became my job. I am very curious about what videography will bring
      to me — what experiences I will have, what I will learn and I look forward
      to all the stories we will create.
    </p>
  </div>
</section>

<style>
  section {
    position: relative;
    padding: var(--main-padding);
    z-index: 5;
  }

  .introduction{
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
    gap: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .about-wrapper p {
    font-size: 1rem;
    line-height: var(--line-height);
    font-weight: 100;
    color: var(--main-offwhite);
    width: 80%;
  }

  .text-indent {
    text-indent: 5rem;
  }

  img {
    height: 15rem;
    width: 15rem;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    section {
      padding: 1rem;
    }

    .introduction {
      font-size: 2rem;
      margin-right: 0;
      padding:  1rem;
    }

    .about-wrapper {
      margin-left: 0;
      padding: 1rem;
      height: 100%;
      width: 100%;
    }

    .about-wrapper p {
      width: 100%;
      font-size: 1rem;
    }

    img {
      height: 10rem;
      width: 10rem;
    }
  }
</style>
