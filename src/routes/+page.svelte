<script>
  export let data;
  // console.log(data); 
  import Hero from "$lib/components/Hero.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  
</script>

<Navigation />
<Hero />
  // console.log(data)


{#each data.allProjects as project }
  <h1>{project.title}</h1>
  <a href={project.slug}>project</a>
{/each}

<!-- {#each data.allProjects as project }
  <h1>{project.title}</h1>
  <a href={project.slug}>project</a>
{/each} -->