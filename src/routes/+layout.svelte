<script>
	import Footer from '$lib/components/Footer.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
	<div class="z-50">
		<Menu />
	</div>
	{@render children()}
	<Footer />
</div>
