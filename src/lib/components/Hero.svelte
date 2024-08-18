<script lang="ts">
	export let backgroundImage: string;
	export let title: string;
	export let subtitle: string;
	export let buttonText: string;
	export let buttonLink: string;

	const services: string[] = [
		'Declaración de impuestos (Taxes)',
		'Trámites Notariales',
		'Trámites migratorios',
		'Trámites legales en EU y Nicaragua'
	];
</script>

<div class="relative bg-cover bg-center h-full" style="background-image: url({backgroundImage});">
	<div class="absolute inset-0 bg-black opacity-20"></div>

	<div class="relative text-amber-900 flex justify-center h-full px-4 py-10">
		<div class="text-center text-white">
			<h1 class="text-4xl md:text-6xl font-bold py-6 text- text-slate-300">{title}</h1>
			<hr />
			<p class="  md:text-2xl py-6 text-xl">{subtitle}</p>
			<div class=" flex flex-col text-xl gap-2 py-4">
				{#each services as service}
					<div class=" flex gap-3">
						<svg class=" w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
							><path
								fill="#FFD43B"
								d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
							/></svg
						>
						<span>{service}</span>
					</div>
				{/each}
			</div>
			<a
				href={buttonLink}
				class="my-7 text-xl inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
				>{buttonText}</a
			>
		</div>
	</div>
</div>
