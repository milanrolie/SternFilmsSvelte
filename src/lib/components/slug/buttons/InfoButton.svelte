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
  <span>informatie</span>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
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
    letter-spacing: 0.5px;

  }

  button:hover {
    opacity: 0.8;
  }

  svg {
    position: absolute;
    top: 40%;
    right: 0.5rem;
    width: .9rem;
    height: .9rem;
    margin-left: 0.5rem;
    fill: var(--main-offwhite);
    overflow: visible;
    transform: translateY(-4px) translateX(2rem);
    transition: all 0.3s;
    opacity: 0;
  }

  button:hover svg {
    opacity: 1;
    transform: translateY(-4px)  translateX(.5rem); 
    transform: rotate(150deg);
  }
</style>