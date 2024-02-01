<script>
 import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

let mouseX = 0;
let mouseY = 0;

onMount(() => {
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    addEventListener("mousemove", handleMouseMove);
  }

  gsap.to(".circleColor", {
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      start: "top",
      end: "bottom+=7000",
    },
    backgroundColor: "orange", 
  });

});

const smoothFactor = 0.05;


function handleMouseMove(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;

  updateDivPosition();
}

function updateDivPosition() {
  const div = document.querySelector("#CursorMove");

  div.style.top = `${mouseY}px`;
  div.style.left = `${mouseX}px`;
}

</script>

<div class="gradient-circle circleColor"></div>
<div class="gradient-circle-mobile circleColor"></div>

<style>
 .gradient-circle {
    position: fixed;
    width: 15rem;
    height: 15rem;
    background-color: rgb(121, 207, 250);
    border-radius: 100%;
    filter: blur(150px);
    z-index: 1;
    transform: translateX(-50%) translateY(-50%);
}

.gradient-circle-mobile {
  display: none;
}

@media (max-width: 768px) {
  .gradient-circle-mobile {
    position: fixed;
    width: 15rem;
    height: 15rem;
    background-color: rgb(121, 207, 250);
    border-radius: 100%;
    filter: blur(150px);
    z-index: 1;
    transform: translateX(-50%) translateY(-50%);
    top: 30%;
    left: 10%;
    display: block;
  }

  .gradient-circle {
  display: none;
  }
}
</style>