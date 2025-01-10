<script lang="ts">
  
    type Subservice = {
  title: string;
  description: string;
};

let subservices: Subservice[] = [
  {
    title: "Reclamación Familiar",
    description: "Asistencia en el proceso de reunificación familiar, ayudando a traer a sus seres queridos a los Estados Unidos de manera legal.",
  },
  {
    title: "Parol Humanitario",
    description: "Apoyo en la solicitud de entrada temporal a los EE.UU. por razones humanitarias urgentes o de beneficio público significativo.",
  },
  {
    title: "Permisos de Trabajo",
    description: "Ayuda en la obtención de autorizaciones de empleo para trabajar legalmente en los Estados Unidos.",
  },
];

  </script>
  
  <div class="flex flex-col min-h-screen">
        
    <main class="flex-1">
      <section class="w-full py-12 md:py-24 lg:py-32 bg-indigo-50">
        <div class="container px-4 md:px-6">
          <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-6">
            Trámites Migratorios
          </h1>
          <p class="max-w-[700px] text-gray-600 md:text-xl mb-12">
            Descubra nuestros servicios especializados en trámites migratorios. Estamos aquí para ayudarle en cada paso del proceso.
          </p>
          <div class="grid gap-6 sm:grid-cols-2">
            {#each subservices as subservice}
              <div class="rounded-lg bg-white border bg-card text-card-foreground shadow-sm flex flex-col justify-between">
                <div class="p-6">
                  <h3 class="text-2xl font-semibold leading-none tracking-tight">{subservice.title}</h3>
                </div>
                <div class="p-6 pt-0">
                  <p>{subservice.description}</p>
                </div>
                <div class="flex items-center p-6">
                  <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                     Llamar para más información
                  </button>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </section>
    </main>
    
  </div>