import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100">

      <div className="relative h-[500px]">

        <Image
          src="/images/noticias/noticia-03.jpg"
          alt="Noticia"
          fill
          className="object-cover"
        />

      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">

        <p className="text-slate-500 mb-4">
          01 de junio de 2026
        </p>

        <h1 className="text-5xl font-bold mb-8">
          Nuevas oportunidades comerciales para productos derivados de algas
        </h1>

        <div className="bg-white rounded-3xl shadow-lg p-10">

  <p className="text-lg leading-9 text-slate-700">
    El mercado de productos derivados de algas marinas continúa mostrando importantes
    oportunidades de crecimiento tanto a nivel nacional como internacional. La creciente
    demanda de alternativas sostenibles para los sectores agrícola, alimentario e
    industrial está impulsando el desarrollo de nuevos modelos de negocio vinculados
    al aprovechamiento de recursos marinos.
  </p>

  <br />

  <p className="text-lg leading-9 text-slate-700">
    Entre los productos con mayor potencial destacan las harinas de algas, fertilizantes
    orgánicos, bioestimulantes agrícolas, suplementos nutricionales y materias primas
    utilizadas en diversos procesos industriales. Estos productos presentan ventajas
    competitivas debido a su origen natural y a sus propiedades funcionales.
  </p>

  <br />

  <p className="text-lg leading-9 text-slate-700">
    Diversos estudios señalan que la demanda global de insumos sostenibles continuará
    creciendo durante los próximos años, impulsada por consumidores cada vez más
    interesados en productos respetuosos con el medio ambiente y procesos productivos
    responsables.
  </p>

  <br />

  <p className="text-lg leading-9 text-slate-700">
    Para las asociaciones de productores de Marcona, este escenario representa una
    oportunidad estratégica para incrementar sus ingresos mediante la transformación
    del sargazo y otras algas marinas en productos de mayor valor agregado. La adopción
    de nuevas tecnologías y procesos de producción permite mejorar la calidad y
    competitividad de la oferta local.
  </p>

  <br />

  <p className="text-lg leading-9 text-slate-700">
    Asimismo, la participación en ferias comerciales, ruedas de negocio y plataformas
    digitales facilita el acceso a nuevos compradores y mercados especializados,
    ampliando las posibilidades de comercialización para los productores locales.
  </p>

  <br />

  <p className="text-lg leading-9 text-slate-700">
    Especialistas consideran que el desarrollo de cadenas productivas sostenibles
    basadas en recursos marinos constituye una de las principales oportunidades para
    impulsar el crecimiento económico de las comunidades costeras y fortalecer la
    competitividad del sector algal peruano en los próximos años.
  </p>

</div>

      </div>

    </main>
  );
}