<script>
  import HeaderSlug from '../../lib/components/slug/HeaderSlug.svelte';
  import Navigation from '../../lib/components/Navigation.svelte';
  import Allprojects from '../../lib/components/slug/Allprojects.svelte';
  import Footer from '../../lib/components/Footer.svelte';
  export let data;
</script>

<Navigation />
<HeaderSlug {data}/>
<Allprojects />

<!-- <Footer /> -->




