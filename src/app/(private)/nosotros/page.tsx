import Image from "next/image";

import {
  Target,
  Eye,
  GraduationCap,
  Library,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* HERO */}

      <section className="relative h-[650px]">

    <Image
        src="/images/nosotros/nosotros-hero.jpg"
        alt="Nosotros AlgasMar Academy"
        fill
        priority
        className="object-cover"
    />

    </section>

      {/* HISTORIA */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-lg p-10">

          <h2 className="text-4xl font-bold mb-6">
            Nuestra Historia
          </h2>

          <p className="text-slate-600 leading-8 text-lg">
            AlgasMar Academy nace con el propósito de fortalecer
            las capacidades técnicas y comerciales de asociaciones,
            recolectores, pescadores y emprendedores vinculados al
            aprovechamiento sostenible de algas marinas.

            Nuestra plataforma integra capacitación,
            biblioteca digital, videoteca, certificación,
            marketplace y seguimiento comercial para generar
            nuevas oportunidades económicas en las comunidades
            costeras del Perú.
          </p>

        </div>

      </section>

      {/* INDICADORES */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <h3 className="text-5xl font-bold text-blue-700">
              3
            </h3>

            <p className="mt-2 text-slate-600">
              Cursos
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <h3 className="text-5xl font-bold text-green-700">
              3
            </h3>

            <p className="mt-2 text-slate-600">
              Manuales
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <h3 className="text-5xl font-bold text-orange-600">
              3
            </h3>

            <p className="mt-2 text-slate-600">
              Certificados
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <h3 className="text-5xl font-bold text-purple-700">
              24/7
            </h3>

            <p className="mt-2 text-slate-600">
              Atención
            </p>

          </div>

        </div>

      </section>

      {/* MISIÓN Y VISIÓN */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mb-6">

              <Target
                size={40}
                className="text-blue-700"
              />

            </div>

            <h2 className="text-3xl font-bold mb-4">
              Misión
            </h2>

            <p className="text-slate-600 leading-8">
              Fortalecer las capacidades técnicas,
              productivas y comerciales de los actores
              vinculados al aprovechamiento sostenible
              de algas marinas mediante herramientas
              digitales, capacitación y asistencia.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mb-6">

              <Eye
                size={40}
                className="text-green-700"
              />

            </div>

            <h2 className="text-3xl font-bold mb-4">
              Visión
            </h2>

            <p className="text-slate-600 leading-8">
              Ser la plataforma líder en Latinoamérica
              para la formación, innovación y
              comercialización de productos derivados
              de algas marinas.
            </p>

          </div>

        </div>

      </section>

      {/* QUÉ HACEMOS */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          ¿Qué hacemos?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <GraduationCap
              size={50}
              className="mx-auto text-blue-700 mb-5"
            />

            <h3 className="text-xl font-bold mb-3">
              Capacitación
            </h3>

            <p className="text-slate-600">
              Formación especializada sobre algas marinas.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <Library
              size={50}
              className="mx-auto text-green-700 mb-5"
            />

            <h3 className="text-xl font-bold mb-3">
              Biblioteca
            </h3>

            <p className="text-slate-600">
              Manuales y documentos técnicos.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <ShoppingCart
              size={50}
              className="mx-auto text-orange-600 mb-5"
            />

            <h3 className="text-xl font-bold mb-3">
              Marketplace
            </h3>

            <p className="text-slate-600">
              Comercialización de productos.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <TrendingUp
              size={50}
              className="mx-auto text-purple-700 mb-5"
            />

            <h3 className="text-xl font-bold mb-3">
              Seguimiento
            </h3>

            <p className="text-slate-600">
              Control de ventas e indicadores.
            </p>

          </div>

        </div>

      </section>

      {/* PROCESO */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="bg-white rounded-3xl shadow-lg p-10">

          <h2 className="text-4xl font-bold text-center mb-10">
            Nuestra Cadena de Valor
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            <div>
              <h3 className="text-xl font-bold text-blue-700">
                Capacitación
              </h3>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-700">
                Transformación
              </h3>
            </div>

            <div>
              <h3 className="text-xl font-bold text-orange-600">
                Comercialización
              </h3>
            </div>

            <div>
              <h3 className="text-xl font-bold text-purple-700">
                Desarrollo
              </h3>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-gradient-to-r from-blue-900 to-green-600 text-white rounded-3xl p-12 text-center">

          <h2 className="text-4xl font-bold mb-4">
            ¿Listo para transformar las algas marinas en oportunidades?
          </h2>

          <p className="text-xl text-blue-100">
            Explora nuestros cursos, manuales,
            marketplace y herramientas digitales.
          </p>

        </div>

      </section>

    </main>
  );
}