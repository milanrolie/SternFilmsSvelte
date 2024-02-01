<script>
  export let data;
  console.log(data);
</script>

<article>
  <p>
    {data.project.shortIntroduction}
  </p>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    height: 80%;
    line-height: var(--line-height);
  }

  @media (max-width: 768px) {
    article {
      width: 100%;
    }
  }
</style>
