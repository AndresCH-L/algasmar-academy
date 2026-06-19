import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100">

      <div className="relative h-[500px]">

        <Image
          src="/images/noticias/noticia-01.jpg"
          alt="Noticia"
          fill
          className="object-cover"
        />

      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">

        <p className="text-slate-500 mb-4">
          15 de junio de 2026
        </p>

        <h1 className="text-5xl font-bold mb-8">
          Asociación Mar de Marcona impulsa el aprovechamiento sostenible del sargazo
        </h1>

        <div className="bg-white rounded-3xl shadow-lg p-10">

  <p className="text-lg leading-9 text-slate-700">
    La Asociación Mar de Marcona continúa consolidándose como una de las organizaciones
    más activas en la promoción del aprovechamiento sostenible de algas marinas en la
    costa peruana. Durante los últimos meses, sus integrantes han venido fortaleciendo
    sus capacidades técnicas para transformar el sargazo en productos de valor agregado,
    generando nuevas oportunidades económicas para las familias vinculadas a la actividad.
  </p>

  <br />

  <p className="text-lg leading-9 text-slate-700">
    Tradicionalmente, gran parte del sargazo recolectado era comercializado únicamente
    como materia prima. Sin embargo, gracias a procesos de capacitación y asistencia
    técnica, los productores vienen incorporando nuevas prácticas que permiten aprovechar
    mejor este recurso marino mediante la elaboración de fertilizantes orgánicos,
    bioestimulantes agrícolas y harinas de algas.
  </p>

  <br />

  <p className="text-lg leading-9 text-slate-700">
    Estas iniciativas buscan incrementar el valor comercial del producto final,
    permitiendo que las asociaciones obtengan mayores ingresos sin depender
    exclusivamente de la venta de algas en estado natural. La estrategia también
    promueve una economía circular donde los recursos marinos son utilizados de
    manera eficiente y responsable.
  </p>

  <br />

  <p className="text-lg leading-9 text-slate-700">
    Según representantes de la asociación, la incorporación de nuevas tecnologías
    de secado, molienda y almacenamiento está contribuyendo significativamente a la
    mejora de la calidad de los productos obtenidos. Esto facilita el acceso a nuevos
    mercados y fortalece la competitividad de los productores locales.
  </p>

  <br />

  <p className="text-lg leading-9 text-slate-700">
    Además del impacto económico, el proyecto genera beneficios ambientales al promover
    prácticas sostenibles que reducen el desperdicio y fomentan el aprovechamiento
    integral de los recursos marinos. La experiencia desarrollada en Marcona se viene
    posicionando como un modelo replicable para otras comunidades costeras interesadas
    en impulsar actividades productivas sostenibles.
  </p>

  <br />

  <p className="text-lg leading-9 text-slate-700">
    Para los próximos años, la asociación proyecta ampliar su capacidad de producción,
    fortalecer sus canales de comercialización y consolidar alianzas estratégicas con
    instituciones públicas, privadas y académicas que contribuyan al desarrollo del
    sector algal en el país.
  </p>

</div>

      </div>

    </main>
  );
}