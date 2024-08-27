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

<div class="relative bg-cover bg-center h-full md:h-screen  ">
	<div class="absolute inset-0 bg-black opacity-50 md:opacity-50"></div>
	<video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover">
		<source src="/img8.mp4" type="video/mp4">
		Your browser does not support the video tag.
	  </video>
	<div class="relative  flex justify-center h-full px-4 py-10 lg:px-40">
		<div class="text-center text-blue-200">
			<h1 class="text-4xl md:text-6xl font-bold py-6 text-300">{title}</h1>
			<hr />
			<p class="  md:text-2xl py-6 text-xl">{subtitle}</p>
			<div class=" flex flex-col  w-fit m-auto text-left text-xl gap-2 py-4">
				{#each services as service}
					<div class="  flex gap-3">
						<svg class=" text-left w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
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
				class="my-7 text-xl inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
				>{buttonText}</a
			>
		</div>
	</div>
</div>
