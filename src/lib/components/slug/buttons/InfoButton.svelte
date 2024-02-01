<script>
  import { onMount } from "svelte";

  onMount(() => {
    const infoButton = document.querySelector("#info");
    const infoContainer = document.querySelector(".info-container");

    infoButton.addEventListener("click", () => {
      infoContainer.scrollIntoView({ behavior: "smooth" });
    });
    
    window.addEventListener("scroll", (event) => {
      window.scrollY > 10
        ? (infoButton.style.display = "none")
        : (infoButton.style.display = "block");
    });
  });
</script>

<div class="container">
  <button id="info">
    <span class="button-text"> Informatie </span><svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      ><path
        d="m18.707 6.707-1.414-1.414L7 15.586V7H5v12h12v-2H8.414L18.707 6.707z"
      /></svg
    >
  </button>
</div>

<!-- <style>
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
    letter-spacing: 0.5px;

  }

  button:hover {
    opacity: 0.8;
  }
</style> -->

<style>
  .container {
    position: absolute;
    top: -6rem;
    right: 4rem;
  }

  button {
    position: relative;
    padding: 1.5rem 3rem;
    border: none;
    border-radius: 5rem;
    color: var(--main-offwhite);
    font-size: 0.8rem;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    cursor: pointer;
    background: none;
    border: solid 1px var(--main-offwhite);
    transition: all 0.3s;
    min-width: 12rem;
  }

  svg {
    position: absolute;
    top: 40%;
    right: 3rem;
    width: 0.9rem;
    height: 0.9rem;
    margin-left: 0.5rem;
    fill: var(--main-offwhite);
    overflow: visible;
    transform: translateY(-4px) translateX(2rem);
    transition: all 0.3s;
    opacity: 0;
  }

  button:hover svg {
    opacity: 1;
    transform: translateY(-6px) translateX(0.5rem);
  }

  .button-text {
    position: absolute;
    left: 0;
    top: 40%;
    transition: all 0.3s;
    width: 12rem;
  }

  button:hover .button-text {
    transform: translateX(-0.8rem);
  }

  @media screen and (max-width: 768px) {
    .container {
      display: none;
    }
  }
</style>
