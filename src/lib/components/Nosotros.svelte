<script lang="ts">
	const mision = ['Transparencia', 'Confiabilidad', 'Profesionalismo', 'Presición'];
</script>

<div class=" px-2 flex flex-col gap-5 py-5 bg-neutral-content mt-10 md:px-16 lg:px-28 xl:px-60 lg:py-16 ">
	<h2 class=" text-center text-4xl py-2">¿Quiénes Somos?</h2>
	<p class=" text-xl text-center py-1 "> 
		Somos una firma conformada por profesionales de Derechos y Finanzas debidamente acreditados en
		Nicaragua y Estados Unidos. Ofrecemos Servicios especializados en inmigración, impuestos,
		notaría, entre otros.
	</p>

	<div class="mision-list grid grid-cols-2 w-fit m-auto lg:grid-cols-4 p-4 gap-4">
		{#each mision as item}
			<div class="mision-item flex gap-3 text-xl items-center">
				<svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
					><path
						d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
					/></svg
				>
				<span class=" text-base md:text-lg">{item}</span>
			</div>
		{/each}
	</div>
</div>
