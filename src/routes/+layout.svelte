<script>
	import '../app.postcss';
	import Footer from '$lib/components/footer/footer.svelte';
	import Navbar from '$lib/components/navbar/navbar.svelte';
</script>

<Navbar />
<main class="container max-w-screen-2xl mx-auto px-8 mb-20">
	<slot />
</main>
<Footer />
