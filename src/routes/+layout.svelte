<script>
	import Footer from '$lib/components/Footer.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
	<Menu />
	{@render children()}
	<Footer />
</div>
