<script>
export let data
console.log(data)

import { onMount } from 'svelte'

onMount(() => {
  const aHref = document.querySelector('a')
  
})

</script>

<article>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore assumenda nihil nobis aut accusantium perferendis, id molestias expedita ipsam. Provident porro ipsa omnis earum veniam voluptatum unde dolore! Sequi, quasi!
  </p>

  <a href=#a >NEXT PROJECT</a>
</article>

<style>
  article{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 80%;
}

a {
  text-decoration: none;
  color: var(--main-offwhite);
  font-weight: 300;
  text-align: end;
}
</style>