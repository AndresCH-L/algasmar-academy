import Image from "next/image";

import {
  Target,
  Eye,
  HeartHandshake,
} from "lucide-react";

export default function NosotrosLanding() {

  return (

    <section
      id="nosotros"
      className="py-28 bg-slate-50"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* ENCABEZADO */}

        <div className="max-w-5xl mx-auto text-center">

          <span className="inline-flex rounded-full bg-green-100 text-green-700 px-5 py-2 font-semibold">

            Nuestra Historia

          </span>

          <h2 className="mt-6 text-4xl lg:text-4xl font-extrabold text-slate-900 leading-tight">

            Fortalecemos el desarrollo del sector algal
            <span className="block">
              mediante tecnología, capacitación e innovación
            </span>

          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">

            AlgasMar Academy nace con el propósito de fortalecer las
            capacidades de las asociaciones recolectoras de algas
            marinas mediante herramientas digitales, capacitación
            especializada e innovación tecnológica.

          </p>

          <p className="mt-8 text-xl leading-9 text-slate-600">

            Nuestro objetivo es facilitar el acceso al conocimiento,
            promover el aprovechamiento sostenible de los recursos
            marinos y generar nuevas oportunidades de desarrollo
            económico para las comunidades costeras.

          </p>

        </div>

        {/* CONTENIDO */}

        <div className="mt-20 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
                    {/* IMÁGENES */}

<div className="space-y-6">

  <Image
    src="/images/dashboard/marcona-nosotros.jpg"
    alt="Marcona"
    width={900}
    height={600}
    className="w-full h-[450px] object-cover rounded-[36px] shadow-2xl"
  />

  <Image
    src="/images/dashboard/algas-nosotros.jpg"
    alt="Capacitación"
    width={900}
    height={600}
    className="w-full h-[360px] object-cover rounded-[36px] shadow-2xl"
  />

</div>

          {/* TARJETA */}

          <div className="bg-white rounded-[36px] shadow-xl border border-slate-200 overflow-hidden">

            {/* MISIÓN */}

            <div className="flex gap-5 p-8">

              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

                <Target
                  size={30}
                  className="text-blue-700"
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-slate-900">

                  Misión

                </h3>

                <p className="mt-3 text-slate-600 leading-8">

                  Impulsar el desarrollo sostenible del sector algal
                  mediante educación, innovación, capacitación
                  especializada y herramientas digitales que fortalezcan
                  las capacidades de asociaciones recolectoras,
                  emprendedores y productores.

                </p>

              </div>

            </div>

            <div className="border-t border-slate-200" />

            {/* VISIÓN */}

            <div className="flex gap-5 p-8">

              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">

                <Eye
                  size={30}
                  className="text-green-700"
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-slate-900">

                  Visión

                </h3>

                <p className="mt-3 text-slate-600 leading-8">

                  Ser la plataforma digital líder en Latinoamérica
                  para la capacitación, transformación y
                  comercialización de productos derivados de algas
                  marinas, impulsando el desarrollo económico de las
                  comunidades costeras.

                </p>

              </div>

            </div>

            <div className="border-t border-slate-200" />

            {/* COMPROMISO */}

            <div className="flex gap-5 p-8">

              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">

                <HeartHandshake
                  size={30}
                  className="text-orange-700"
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-slate-900">

                  Compromiso

                </h3>

                <p className="mt-3 text-slate-600 leading-8">

                  Trabajamos para acercar el conocimiento, la
                  investigación y la tecnología a las asociaciones
                  recolectoras, promoviendo el aprovechamiento
                  responsable de las algas marinas y la generación de
                  nuevas oportunidades de negocio.

                </p>

              </div>

            </div>

          </div>
                  </div>

      </div>

    </section>

  );

}