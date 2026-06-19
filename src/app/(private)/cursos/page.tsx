import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Award,
} from "lucide-react";

const cursos = [
  {
    titulo: "Introducción al Aprovechamiento del Sargazo",
    descripcion:
      "Conoce el potencial económico y ambiental de las algas marinas.",
    duracion: "20 horas",
    nivel: "Gratis",
    progreso: 100,
    imagen: "/images/cursos/curso-sargazo-introduccion.jpg",
    href: "/cursos/sargazo",
  },

  {
    titulo: "Producción de Abono Orgánico con Algas",
    descripcion:
      "Aprende el proceso para transformar sargazo en fertilizante natural.",
    duracion: "40 horas",
    nivel: "Premium",
    progreso: 75,
    imagen: "/images/cursos/curso-abono-organico.jpg",
    href: "/cursos/abono-organico",
  },

  {
    titulo: "Elaboración de Harina de Yuyo",
    descripcion:
      "Descubre técnicas para producir harina de algas para uso alimenticio.",
    duracion: "60 horas",
    nivel: "Premium",
    progreso: 25,
    imagen: "/images/cursos/curso-harina-yuyo.jpg",
    href: "/cursos/harina-yuyo",
  },
];

export default function CursosPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-900 to-green-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <h1 className="text-4xl md:text-5xl font-bold">
            Cursos Disponibles
          </h1>

          <p className="mt-4 text-blue-100 text-lg">
            Capacítate para generar productos de mayor valor agregado.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">

            <Award size={18} />

            Certificado digital al finalizar cada curso

          </div>

        </div>

      </section>

      {/* CURSOS */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {cursos.map((curso, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >

              <div className="relative h-60">

                <Image
                  src={curso.imagen}
                  alt={curso.titulo}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-6">

                <div className="flex justify-between items-center mb-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      curso.nivel === "Gratis"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {curso.nivel}
                  </span>

                  <div className="flex items-center gap-1 text-green-700">

                    <Award size={16} />

                    <span className="text-sm">
                      Certificado
                    </span>

                  </div>

                </div>

                <h2 className="text-2xl font-bold mb-3">
                  {curso.titulo}
                </h2>

                <p className="text-gray-600 mb-5">
                  {curso.descripcion}
                </p>

                <div className="flex items-center gap-2 text-gray-500 mb-5">

                  <Clock size={18} />

                  {curso.duracion}

                </div>

                {/* PROGRESO */}

                <div className="mb-6">

                  <div className="flex justify-between text-sm mb-2">

                    <span>Progreso</span>

                    <span>{curso.progreso}%</span>

                  </div>

                  <div className="h-3 bg-slate-200 rounded-full">

                    <div
                      className="h-3 bg-green-600 rounded-full"
                      style={{
                        width: `${curso.progreso}%`,
                      }}
                    />

                  </div>

                </div>

                <Link
                  href={curso.href}
                  className="block text-center bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition"
                >
                  Ver Curso
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}