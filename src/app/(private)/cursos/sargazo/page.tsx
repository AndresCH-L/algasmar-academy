import Image from "next/image";
import {
  Clock,
  Award,
  BookOpen,
  FileText,
  CheckCircle,
  Download,
} from "lucide-react";

export default function CursoSargazoPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* HERO */}

      <section className="relative h-[500px]">

        <Image
          src="/images/cursos/curso-sargazo-introduccion.jpg"
          alt="Curso Sargazo"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">

          <div className="max-w-7xl mx-auto px-6 text-white">

            <span className="bg-green-600 px-4 py-2 rounded-full font-semibold">
              Curso Gratuito
            </span>

            <h1 className="text-5xl font-bold mt-6 max-w-4xl">
              Introducción al Aprovechamiento del Sargazo
            </h1>

            <p className="mt-6 text-xl text-slate-200 max-w-3xl">
              Aprende el potencial económico, ambiental y comercial
              del sargazo como recurso estratégico para asociaciones,
              recolectores y productores costeros.
            </p>

          </div>

        </div>

      </section>

      {/* CONTENIDO */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* IZQUIERDA */}

          <div className="lg:col-span-2 space-y-8">

            {/* DESCRIPCIÓN */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-3xl font-bold mb-6">
                Descripción del Curso
              </h2>

              <p className="text-slate-600 leading-8">
                Este curso brinda una visión integral sobre el
                aprovechamiento sostenible del sargazo y otras
                algas marinas presentes en la costa peruana.

                Los participantes conocerán las oportunidades
                económicas, ambientales y productivas asociadas
                a la transformación de recursos marinos en
                productos con valor agregado para mercados
                locales, nacionales e internacionales.
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
                    Identificación y clasificación del sargazo.
                  </span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="text-green-600" />
                  <span>
                    Técnicas básicas de recolección sostenible.
                  </span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="text-green-600" />
                  <span>
                    Métodos de secado y almacenamiento.
                  </span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="text-green-600" />
                  <span>
                    Oportunidades de comercialización.
                  </span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="text-green-600" />
                  <span>
                    Productos derivados con valor agregado.
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
                    Módulo 1: Introducción al Sargazo
                  </h3>
                </div>

                <div className="border rounded-2xl p-4">
                  <h3 className="font-bold">
                    Módulo 2: Recolección Responsable
                  </h3>
                </div>

                <div className="border rounded-2xl p-4">
                  <h3 className="font-bold">
                    Módulo 3: Secado y Conservación
                  </h3>
                </div>

                <div className="border rounded-2xl p-4">
                  <h3 className="font-bold">
                    Módulo 4: Comercialización
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
                src="https://www.youtube.com/embed/ppiygyVapII"
                title="Curso Sargazo"
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
                href="/biblioteca/manual-sargazo.pdf"
                download
                className="flex items-center gap-3 p-5 border rounded-2xl hover:bg-slate-50 transition"
              >
                <FileText className="text-blue-700" />

                <div>
                  <p className="font-semibold">
                    Manual de Aprovechamiento del Sargazo
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

                  <span>20 horas</span>

                </div>

                <div className="flex items-center gap-3">

                  <BookOpen className="text-green-700" />

                  <span>4 módulos</span>

                </div>

                <div className="flex items-center gap-3">

                  <Award className="text-orange-600" />

                  <span>Certificado Digital</span>

                </div>

              </div>

              <div className="mt-8">

                <div className="flex justify-between mb-2">

                  <span>Progreso</span>

                  <span>100%</span>

                </div>

                <div className="h-4 bg-slate-200 rounded-full">

                  <div className="h-4 bg-green-600 rounded-full w-full" />

                </div>

              </div>

              <div className="mt-8 space-y-4">

                <a
                  href="/certificados/certificado-sargazo.pdf"
                  download
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition"
                >
                  <Award size={20} />
                  Descargar Certificado
                </a>

                <a
                  href="/biblioteca/manual-sargazo.pdf"
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