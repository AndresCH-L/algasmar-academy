import Image from "next/image";
import {
  Clock,
  Award,
  BookOpen,
  FileText,
  CheckCircle,
  Download,
} from "lucide-react";

export default function CursoAbonoPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <section className="relative h-[500px]">

        <Image
          src="/images/cursos/curso-abono-organico.jpg"
          alt="Curso Abono Orgánico"
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
              Producción de Abono Orgánico con Algas
            </h1>

            <p className="mt-6 text-xl text-slate-200 max-w-3xl">
              Aprende a transformar algas marinas en fertilizantes
              orgánicos sostenibles para uso agrícola y comercial.
            </p>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-3xl font-bold mb-6">
                Descripción del Curso
              </h2>

              <p className="text-slate-600 leading-8">
                Este curso desarrolla las técnicas necesarias para la
                elaboración de biofertilizantes y abonos orgánicos a
                partir de algas marinas, permitiendo generar productos
                sostenibles con alta demanda en el sector agrícola.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-3xl font-bold mb-6">
                Lo que aprenderás
              </h2>

              <div className="space-y-4">

                <div className="flex gap-3">
                  <CheckCircle className="text-green-600" />
                  <span>Selección y preparación del sargazo.</span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="text-green-600" />
                  <span>Procesos de compostaje.</span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="text-green-600" />
                  <span>Control de humedad y fermentación.</span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="text-green-600" />
                  <span>Empaque y almacenamiento.</span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="text-green-600" />
                  <span>Comercialización agrícola.</span>
                </div>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-3xl font-bold mb-6">
                Contenido del Curso
              </h2>

              <div className="space-y-4">

                <div className="border rounded-2xl p-4">
                  Módulo 1: Introducción a Biofertilizantes
                </div>

                <div className="border rounded-2xl p-4">
                  Módulo 2: Preparación del Sargazo
                </div>

                <div className="border rounded-2xl p-4">
                  Módulo 3: Compostaje y Fermentación
                </div>

                <div className="border rounded-2xl p-4">
                  Módulo 4: Control de Calidad
                </div>

                <div className="border rounded-2xl p-4">
                  Módulo 5: Comercialización
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
      src="https://www.youtube.com/embed/Nd1Cj5WW_Gw"
      title="Curso Producción de Abono Orgánico con Algas"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />

  </div>

</div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-3xl font-bold mb-6">
                Material Complementario
              </h2>

              <a
            href="/biblioteca/manual-abono-organico.pdf"
            download
            className="flex items-center justify-center gap-2 border-2 border-blue-700 text-blue-700 hover:bg-blue-50 py-4 rounded-2xl font-semibold transition"
            >
                <FileText className="text-blue-700" />

                <div>
                  <p className="font-semibold">
                    Manual de Producción de Abono Orgánico
                  </p>

                  <p className="text-sm text-slate-500">
                    Descargar PDF
                  </p>
                </div>

              </a>

            </div>

          </div>

          <div>

            <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-28">

              <h2 className="text-2xl font-bold mb-6">
                Información del Curso
              </h2>

              <div className="space-y-5">

                <div className="flex gap-3">
                  <Clock className="text-blue-700" />
                  <span>40 horas</span>
                </div>

                <div className="flex gap-3">
                  <BookOpen className="text-green-700" />
                  <span>5 módulos</span>
                </div>

                <div className="flex gap-3">
                  <Award className="text-orange-600" />
                  <span>Certificado Digital</span>
                </div>

              </div>

              <div className="mt-8">

                <div className="flex justify-between mb-2">
                  <span>Progreso</span>
                  <span>75%</span>
                </div>

                <div className="h-4 bg-slate-200 rounded-full">
                  <div className="h-4 bg-green-600 rounded-full w-[75%]" />
                </div>

              </div>

              <div className="mt-8 space-y-4">

                <a
                href="/certificados/certificado-abono-organico.pdf"
                download
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition"
                >
                  <Award size={20} />
                  Descargar Certificado
                </a>

                <a
                  href="/biblioteca/manual-abono-organico.pdf"
                  download
                  className="flex items-center justify-center gap-2 border-2 border-blue-700 text-blue-700 py-4 rounded-2xl"
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