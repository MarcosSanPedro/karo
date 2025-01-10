<script lang="ts">
	const services = [
		{
			src: '/services/diseno_1.jpg',
			link: '/migracion',
			tittle: 'Trámites Migratorios',
			subtittle:
				'Ofrecemos una amplia gama de servicios migratorios, desde visas de inmigrante y residencia, hasta parol humanitario y asilo. Nuestro equipo experto te guía en cada paso del proceso.',
		},
		{
			src: '/services/diseno_2.jpg',
			link: '/',
			tittle: 'Taxes',
			subtittle:
				'Gestionamos declaraciones de impuestos tanto personales como corporativas, asegurando el cumplimiento fiscal y maximizando tus beneficios.'
		},
		{
			src: '/services/diseno_3.jpg',
			link: '/',
			tittle: 'Registro de Compañías',
			subtittle:
				'Facilitamos el proceso de creación de tu negocio, ya sea como LLC o INC, brindando asesoría para elegir la estructura más adecuada.'
		},
		{
			src: '/services/diseno_4.jpg',
			link: '/',
			tittle: 'Notarizaciones',
			subtittle: 'Proporcionamos servicios de notarización para autenticar y certificar tus documentos importantes de manera rápida y confiable.'
		},
		{
			src: '/services/diseno_5.jpg',
			link: '/',
			tittle: 'Trámites legales en Nicaragua',
			subtittle: ' Ofrecemos asesoría legal y gestionamos tus trámites legales en Nicaragua, facilitando tus procesos desde Estados Unidos.'
		},
		{
			src: '/services/diseno_6.jpg',
			link: '/',
			tittle: 'Formación en hostelería',
			subtittle: 'Ofrecemos cursos especializados en hostelería, abarcando servicio al cliente, tecnología y sistemas, cocina y gastronomía, para impulsar tu carrera en este sector.'
		},
	];
</script>

<h2 class="text-4xl pl-3 py-3 font-bold mt-10">Nuestros Servicios:</h2>
<div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-5 px-3">
	{#each services as service}
		<div class="bg-seg min-h-[630px] relative">
			<img src={service.src} class=" " alt="Service Pict" />
			<h2 class="px-5 font-semibold text-3xl pt-5 pb-3">{service.tittle}</h2>
			<p class="text-xl px-5">{service.subtittle}</p>
			<a href={service.link} class="py-3 absolute bottom-0 btn px-7 bg-primary ml-5 rounded-md text-white my-7 text-xl">Ver Mas</a>
		</div>
	{/each}
</div>
