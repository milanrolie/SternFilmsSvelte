<script>
  import HeaderSlug from '../../lib/components/slug/HeaderSlug.svelte';
  import Navigation from '../../lib/components/Navigation.svelte';
  export let data;
  console.log(data)
</script>

<Navigation />
<HeaderSlug {data}/>


