<script>
 import { onMount } from "svelte";

let mouseX = 0;
let mouseY = 0;

onMount(() => {
  addEventListener("mousemove", handleMouseMove);
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

<div class="gradient-circle">

</div>

<style>
 .gradient-circle {
    position: fixed;
    width: 15rem;
    height: 15rem;
    background-color: rgb(121, 207, 250);
    border-radius: 100%;
    filter: blur(150px);
    z-index: -1;
    transform: translateX(-50%) translateY(-50%);
}
</style>