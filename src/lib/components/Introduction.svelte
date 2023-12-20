<script>
    import stern from "$lib/assets/stern.jpeg"
</script>

<section>
  <p>
    Peaks pierce the sky, giants of stone, Their mantles of snow, a pristine
    crown. Valleys cradle life, serene and deep, Where rivers meander, secrets
    to keep.
  </p>

  <div class="about-wrapper">
    <img src={stern} alt="">


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
    text-indent: 15vw;
    font-weight: 100;
    margin-right: 20vw;
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

  img {
    height: 30%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
  }
</style>
