<script>
  import { onMount } from "svelte";

  onMount(() => {
    const infoButton = document.querySelector("#info");
    const infoContainer = document.querySelector(".info-container");

    infoButton.addEventListener("click", () => {
      infoContainer.scrollIntoView({ behavior: 'smooth' });
    });

    window.addEventListener('scroll',(event) => {
      window.scrollY > 10 ? infoButton.style.display = "none" : infoButton.style.display = "block";
      });
  });
</script>

<button id="info">
  informatie
</button>

<style>
  button {
    position: absolute;
    color: var(--main-offwhite);
    top: -4rem; 
    right: 0;
    width: 10rem;
    height: 3rem;
    background-color: rgba(0, 0, 0, 0.675);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: none;
    margin-right: 1rem;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.8;
  }
</style>