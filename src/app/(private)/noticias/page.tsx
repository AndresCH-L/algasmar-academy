import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

const noticias = [
  {
    titulo:
      "Asociación Mar de Marcona impulsa el aprovechamiento sostenible del sargazo",
    fecha: "15 de junio de 2026",
    imagen: "/images/noticias/noticia-01.jpg",
    resumen:
      "Productores de Marcona fortalecen sus capacidades para transformar el sargazo en productos de valor agregado.",
    url: "/noticias/sargazo-marcona",
  },

  {
    titulo:
      "Capacitación especializada en producción de abonos orgánicos con algas marinas",
    fecha: "08 de junio de 2026",
    imagen: "/images/noticias/noticia-02.jpg",
    resumen:
      "Participantes aprendieron técnicas modernas para la elaboración de fertilizantes orgánicos sostenibles.",
    url: "/noticias/capacitacion-abonos",
  },

  {
    titulo:
      "Nuevas oportunidades comerciales para productos derivados de algas",
    fecha: "01 de junio de 2026",
    imagen: "/images/noticias/noticia-03.jpg",
    resumen:
      "La demanda de harinas, biofertilizantes y productos derivados de algas continúa creciendo.",
    url: "/noticias/oportunidades-comerciales",
  },
];

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-green-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-4xl md:text-5xl font-bold">
            Noticias
          </h1>

          <p className="mt-3 text-blue-100 text-lg">
            Actualidad, innovación y oportunidades en el sector de las algas marinas.
          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-3 gap-8">

          {noticias.map((noticia) => (

            <article
              key={noticia.titulo}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >

              <div className="relative h-60">

                <Image
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-6">

                <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">

                  <CalendarDays size={16} />

                  {noticia.fecha}

                </div>

                <h2 className="text-2xl font-bold mb-4">
                  {noticia.titulo}
                </h2>

                <p className="text-slate-600 mb-6">
                  {noticia.resumen}
                </p>

                <Link
                  href={noticia.url}
                  className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl transition"
                >
                  Leer más
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}