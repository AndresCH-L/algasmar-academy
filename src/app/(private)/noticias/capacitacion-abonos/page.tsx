import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100">

      <div className="relative h-[500px]">

        <Image
          src="/images/noticias/noticia-02.jpg"
          alt="Noticia"
          fill
          className="object-cover"
        />

      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">

        <p className="text-slate-500 mb-4">
          08 de junio de 2026
        </p>

        <h1 className="text-5xl font-bold mb-8">
          Capacitación especializada en producción de abonos orgánicos con algas marinas
        </h1>

        <div className="bg-white rounded-3xl shadow-lg p-10">

  <p className="text-lg leading-9 text-slate-700">
    Productores, emprendedores y representantes de asociaciones participaron en una
    jornada de capacitación especializada orientada a la producción de abonos orgánicos
    elaborados a partir de algas marinas. La actividad tuvo como objetivo fortalecer
    las capacidades técnicas de los participantes para generar productos con mayor
    valor agregado y potencial comercial.
  </p>

  <br />

  <p className="text-lg leading-9 text-slate-700">
    Durante las sesiones se abordaron temas relacionados con la recolección adecuada
    de materia prima, procesos de secado, almacenamiento, molienda y formulación de
    fertilizantes orgánicos. Los participantes también recibieron información sobre
    control de calidad, conservación del producto y requisitos básicos para la
    comercialización.
  </p>

  <br />

  <p className="text-lg leading-9 text-slate-700">
    Especialistas explicaron que las algas marinas contienen nutrientes esenciales,
    minerales y compuestos bioactivos que pueden contribuir significativamente al
    mejoramiento de los suelos agrícolas. Esto convierte a los fertilizantes derivados
    de algas en una alternativa sostenible frente al uso intensivo de productos químicos.
  </p>

  <br />

  <p className="text-lg leading-9 text-slate-700">
    La capacitación incluyó demostraciones prácticas donde los asistentes pudieron
    observar el funcionamiento de equipos utilizados en los procesos productivos,
    incluyendo hornos de secado, molinos industriales, sistemas de envasado y equipos
    de control de calidad.
  </p>

  <br />

  <p className="text-lg leading-9 text-slate-700">
    Los participantes destacaron la importancia de contar con espacios de formación
    que permitan incorporar conocimientos técnicos actualizados y mejorar la
    competitividad de sus organizaciones. Asimismo, manifestaron interés en continuar
    desarrollando nuevos productos derivados de algas para atender mercados especializados.
  </p>

  <br />

  <p className="text-lg leading-9 text-slate-700">
    Este tipo de iniciativas contribuye al fortalecimiento del sector productivo local,
    promueve la innovación y genera oportunidades para la diversificación económica de
    las comunidades costeras vinculadas al aprovechamiento sostenible de recursos marinos.
  </p>

</div>

      </div>

    </main>
  );
}