<script>
  export let data;
  console.log(data);
  import Hero from "$lib/components/Hero.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  import CursorGradient from "../lib/components/CursorGradient.svelte";
  import IntroAnimation from "../lib/components/IntroAnimation.svelte";
  import Introduction from "../lib/components/Introduction.svelte";
  
</script>

<IntroAnimation />
<!-- <CursorGradient /> -->
<Navigation />
<Hero />
<Introduction />


<div class="grain" />

<style>
  .grain {
    position: absolute;
    height: 100vh;
    text-align: left;
    isolation: isolate;
    z-index: 1000;
    pointer-events: none;
  }

  .grain:before {
    content: "";
    position: fixed;
    top: -150%;
    left: -100%;
    z-index: -1;
    width: 350%;
    height: 350%;
    background-image: url("https://github.com/sannevanseeventer/Squadpage-FDND/blob/main/public/img/grain.png?raw=true");
    opacity: 0.1;
  }

  .grain::before {
    animation: grain 5s steps(10) infinite;
  }

  @keyframes grain {
    0%,
    100% {
      transform: translate(0);
    }

    10% {
      transform: translate(-5%, -10%);
    }

    20% {
      transform: translate(-15%, 5%);
    }

    30% {
      transform: translate(7%, -25%);
    }

    40% {
      transform: translate(-5%, 25%);
    }

    50% {
      transform: translate(-15%, 5%);
    }

    60% {
      transform: translate(15%);
    }

    70% {
      transform: translateY(15%);
    }

    80% {
      transform: translate(3%, 35%);
    }

    90% {
      transform: translate(-10%, 10%);
    }
  }
</style>