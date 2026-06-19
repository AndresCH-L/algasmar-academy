import Image from "next/image";
import { PlayCircle, Clock, Video } from "lucide-react";

const videos = [
  {
    titulo: "Introducción al Aprovechamiento del Sargazo",
    duracion: "12 min",
    categoria: "Curso Básico",
    miniatura: "/images/videos/video-sargazo.jpg",
    url: "https://www.youtube.com/watch?v=ppiygyVapII",
  },

  {
    titulo: "Producción de Abono Orgánico con Algas",
    duracion: "18 min",
    categoria: "Producción",
    miniatura: "/images/videos/video-abono.jpg",
    url: "https://www.youtube.com/watch?v=Nd1Cj5WW_Gw",
  },

  {
    titulo: "Elaboración de Harina de Yuyo",
    duracion: "15 min",
    categoria: "Transformación",
    miniatura: "/images/videos/video-harina.jpg",
    url: "https://www.youtube.com/watch?v=zD06W4TRqJk",
  },
];

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-green-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-4xl md:text-5xl font-bold">
            Videoteca
          </h1>

          <p className="mt-3 text-blue-100 text-lg">
            Accede a capacitaciones, tutoriales y material audiovisual especializado.
          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {videos.map((video) => (

            <div
              key={video.titulo}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >

              <div className="relative h-60">

                <Image
                  src={video.miniatura}
                  alt={video.titulo}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">

                  <PlayCircle
                    size={70}
                    className="text-white"
                  />

                </div>

              </div>

              <div className="p-6">

                <div className="flex items-center gap-2 text-blue-700 text-sm font-medium mb-3">

                  <Video size={16} />

                  {video.categoria}

                </div>

                <h2 className="text-xl font-bold mb-4">
                  {video.titulo}
                </h2>

                <div className="flex items-center gap-2 text-slate-500 mb-6">

                  <Clock size={16} />

                  {video.duracion}

                </div>

                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl transition"
                >
                  <PlayCircle size={18} />
                  Ver Video
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}