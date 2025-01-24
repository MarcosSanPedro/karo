<script lang="ts">
	type Link = {
		label: string;
		href: string;
		sublinks?: Link[];
	};

	function closeDrawer(event: Event) {
    const drawerCheckbox = document.getElementById('my-drawer-4') as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = false; // Desmarcar el checkbox para cerrar el drawer
    }
  }
	const defaultLinks: Link[] = [
		{ label: 'Inicio', href: '/#inicio' },
		{
			label: 'Servicios',
			href: '/#servicios',
			sublinks: [
				{ label: 'Servicios Migratorios', href: '/#servicios-migratorios' },
				{ label: 'Creacion de empresas', href: '/#creacion-de-empresas' },
				{ label: 'Notarizaciones', href: '/#notarizaciones' },
				{ label: 'Trámites en Nicaragua', href: '/#tramites-en-nicaragua' },
				{ label: 'Formacion Profesional', href: '/#formacion-profesional' },
				{ label: 'Taxes', href: '/taxes' }
			]
		},
		{ label: 'Contactenos', href: '/test' }
	];

	let { links = defaultLinks } = $props<{ links?: Link[] }>();
</script>

<div class="navbar h-16 sticky top-0 bg-base-100 md:hidden">
	<div class="flex-1">
		<a href="/#inicio" class="">
			<img class="w-52" src="logo.svg" alt="logo" />
		</a>
	</div>

	<div class="flex-none pr-3">
		<a href="tel:+17869191911" class="btn btn-square btn-ghost w-20 text-xl">
			Call
			<svg class=" inline w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
				><path
					d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
				/></svg
			>
		</a>
	</div>
	<div class="flex-none mr-4">
		<div class="drawer drawer-end">
			<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content">
				<label for="my-drawer-4" class=""
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-10 w-8 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg></label
				>
			</div>
			<div class="drawer-side z-10">
				<label for="my-drawer-4" aria-label="close-sidebar" class="drawer-overlay"></label>
				<ul class="menu bg-base-200 text-xl text-base-content min-h-full w-4/5 p-4">
					{#each links as link}
						<li>
							<a  href={link.href}>{link.label}</a>
							{#if link.sublinks}
							
								<ul>
									<input id="my-drawer-5" type="checkbox" class="drawer-toggle" />
									

									
									{#each link.sublinks as sublink}
									
										<li><a href={sublink.href} on:click={closeDrawer} class="text-base ">{sublink.label}</a></li>
									{/each}
								</ul>
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
<div class="container mx-auto">
	<div class=" hidden h-20 md:flex items-center justify-between px-10">
		<a href="/#inicio" class="">
			<img class="w-60" src="logo.svg" alt="logo" />
		</a>

		<ul class="menu md:menu-horizontal rounded-box text-lg flex gap-4 lg:gap-12">
			<li><a href="/#inicio">Inicio</a></li>
			<li>
				<details>
					<summary>Servicios</summary>
					<ul class="z-10 text-base w-52">
						<li class=" whitespace-nowrap">
							<a href="/migracion"> Servicios Migratorios</a>
						</li>
						<li>
							<a href="/taxes"> Creacion de empresas</a>
						</li>
						<li><a href="/notarizaciones"> Notarizaciones</a></li>
						<li>
							<a href="/tramites-en-nicaragua"> Trámites en Nicaragua</a>
						</li>
						<li>
							<a href="/formacion-profesional"> Formacion Profesional</a>
						</li>
						<li><a href="/taxes"> Taxes</a></li>
					</ul>
				</details>
			</li>
			<li><a href="/test">Contactenos</a></li>
		</ul>
	</div>
</div>
