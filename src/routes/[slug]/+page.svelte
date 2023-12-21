<script>
  import HeaderSlug from '../../lib/components/slug/HeaderSlug.svelte';
  import Navigation from '../../lib/components/Navigation.svelte';
  import Footer from '../../lib/components/Footer.svelte';
  export let data;
</script>

<Navigation />
<HeaderSlug {data}/>
<Footer />


