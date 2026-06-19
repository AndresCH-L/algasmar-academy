import Image from "next/image";
import {
  Clock,
  Award,
  BookOpen,
  FileText,
  CheckCircle,
  Download,
} from "lucide-react";

export default function CursoHarinaYuyoPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* HERO */}

      <section className="relative h-[500px]">

        <Image
          src="/images/cursos/curso-harina-yuyo.jpg"
          alt="Curso Harina de Yuyo"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">

          <div className="max-w-7xl mx-auto px-6 text-white">

            <span className="bg-orange-600 px-4 py-2 rounded-full font-semibold">
              Curso Premium
            </span>

            <h1 className="text-5xl font-bold mt-6 max-w-4xl">
              Elaboración de Harina de Yuyo
            </h1>

            <p className="mt-6 text-xl text-slate-200 max-w-3xl">
              Aprende todo el proceso para transformar algas
              marinas en harina de yuyo de alta calidad,
              destinada al consumo humano y a nuevos mercados
              con valor agregado.
            </p>

          </div>

        </div>

      </section>

      {/* CONTENIDO */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* CONTENIDO PRINCIPAL */}

          <div className="lg:col-span-2 space-y-8">

            {/* DESCRIPCIÓN */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-3xl font-bold mb-6">
                Descripción del Curso
              </h2>

              <p className="text-slate-600 leading-8">
                Este curso está orientado a productores,
                asociaciones y emprendedores interesados en la
                elaboración de harina de yuyo utilizando
                procesos adecuados de selección, lavado,
                secado, molienda, tamizado y empaque.

                Los participantes conocerán las buenas
                prácticas para obtener un producto de calidad,
                apto para comercialización y generación de
                nuevos ingresos sostenibles.
              </p>

            </div>

            {/* APRENDERÁS */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-3xl font-bold mb-6">
                Lo que aprenderás
              </h2>

              <div className="space-y-4">

                <div className="flex gap-3">
                  <CheckCircle className="text-green-600" />
                  <span>
                    Identificación de especies aptas para harina.
                  </span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="text-green-600" />
                  <span>
                    Técnicas de limpieza y lavado.
                  </span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="text-green-600" />
                  <span>
                    Métodos de secado y conservación.
                  </span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="text-green-600" />
                  <span>
                    Uso de molinos y tamizado.
                  </span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="text-green-600" />
                  <span>
                    Empaque y comercialización.
                  </span>
                </div>

              </div>

            </div>

            {/* MÓDULOS */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-3xl font-bold mb-6">
                Contenido del Curso
              </h2>

              <div className="space-y-4">

                <div className="border rounded-2xl p-4">
                  <h3 className="font-bold">
                    Módulo 1: Introducción a la Harina de Yuyo
                  </h3>
                </div>

                <div className="border rounded-2xl p-4">
                  <h3 className="font-bold">
                    Módulo 2: Selección y Lavado
                  </h3>
                </div>

                <div className="border rounded-2xl p-4">
                  <h3 className="font-bold">
                    Módulo 3: Secado Industrial
                  </h3>
                </div>

                <div className="border rounded-2xl p-4">
                  <h3 className="font-bold">
                    Módulo 4: Molienda y Tamizado
                  </h3>
                </div>

                <div className="border rounded-2xl p-4">
                  <h3 className="font-bold">
                    Módulo 5: Empaque y Comercialización
                  </h3>
                </div>

              </div>

            </div>

            {/* VIDEO */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-6">
                Video de Capacitación
            </h2>

            <div className="aspect-video rounded-2xl overflow-hidden">

                <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/zD06W4TRqJk"
                title="Curso Elaboración de Harina de Yuyo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />

            </div>

            </div>

            {/* MATERIAL */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-3xl font-bold mb-6">
                Material Complementario
              </h2>

              <a
                href="/biblioteca/manual-harina-yuyo.pdf"
                download
                className="flex items-center gap-3 p-5 border rounded-2xl hover:bg-slate-50 transition"
              >
                <FileText className="text-blue-700" />

                <div>

                  <p className="font-semibold">
                    Manual de Elaboración de Harina de Yuyo
                  </p>

                  <p className="text-sm text-slate-500">
                    Descargar PDF
                  </p>

                </div>

              </a>

            </div>

          </div>

          {/* SIDEBAR */}

          <div>

            <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-28">

              <h2 className="text-2xl font-bold mb-6">
                Información del Curso
              </h2>

              <div className="space-y-5">

                <div className="flex items-center gap-3">

                  <Clock className="text-blue-700" />

                  <span>60 horas</span>

                </div>

                <div className="flex items-center gap-3">

                  <BookOpen className="text-green-700" />

                  <span>5 módulos</span>

                </div>

                <div className="flex items-center gap-3">

                  <Award className="text-orange-600" />

                  <span>Certificado Digital</span>

                </div>

              </div>

              <div className="mt-8">

                <div className="flex justify-between mb-2">

                  <span>Progreso</span>

                  <span>25%</span>

                </div>

                <div className="h-4 bg-slate-200 rounded-full">

                  <div className="h-4 bg-green-600 rounded-full w-[25%]" />

                </div>

              </div>

              <div className="mt-8 space-y-4">

                <a
                  href="/certificados/certificado-harina-yuyo.pdf"
                  download
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition"
                >
                  <Award size={20} />
                  Descargar Certificado
                </a>

                <a
                  href="/biblioteca/manual-harina-yuyo.pdf"
                  download
                  className="flex items-center justify-center gap-2 border-2 border-blue-700 text-blue-700 hover:bg-blue-50 py-4 rounded-2xl font-semibold transition"
                >
                  <Download size={20} />
                  Descargar Manual
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}