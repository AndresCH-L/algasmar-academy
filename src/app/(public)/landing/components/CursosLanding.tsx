import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  Award,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const cursos = [
  {
    titulo: "Transformación de Algas Marinas",
    descripcion:
      "Aprende el proceso completo para convertir algas marinas en productos con valor agregado.",

    imagen: "/images/cursos/curso-sargazo-introduccion.jpg",

    duracion: "20 horas",

    certificado: "Certificado",

    color: "bg-blue-600",
  },

  {
    titulo: "Producción de Abonos Orgánicos",
    descripcion:
      "Elabora biofertilizantes, compost y productos agrícolas derivados de algas marinas.",

    imagen: "/images/cursos/curso-abono-organico.jpg",

    duracion: "40 horas",

    certificado: "Certificado",

    color: "bg-green-600",
  },

  {
    titulo: "Elaboración de Harina de Yuyo",
    descripcion:
      "Aprende el proceso de secado, molienda y comercialización de harina de algas para consumo y uso industrial.",

    imagen: "/images/cursos/curso-harina-yuyo.jpg",

    duracion: "60 horas",

    certificado: "Certificado",

    color: "bg-orange-500",
  },
];

export default function CursosLanding() {
  return (
    <section
      id="cursos"
      className="py-15 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
            Capacitación Especializada
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Aprende con expertos
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            Cursos desarrollados para fortalecer las capacidades
            técnicas de asociaciones algueras, emprendedores,
            estudiantes y profesionales del sector.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {cursos.map((curso) => (

            <div
              key={curso.titulo}
              className="bg-white rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="relative h-64">

                <Image
                  src={curso.imagen}
                  alt={curso.titulo}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                />

              </div>

              <div className="p-8">

                <div
                  className={`${curso.color} inline-flex items-center rounded-full px-4 py-2 text-white text-sm font-semibold`}
                >
                  <BookOpen size={16} className="mr-2" />
                  Curso
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {curso.titulo}
                </h3>

                <p className="mt-5 text-slate-600 leading-8">
                  {curso.descripcion}
                </p>

                <div className="flex justify-between mt-8 text-slate-700">

                  <div className="flex items-center gap-2">
                    <Clock3 size={18} />
                    {curso.duracion}
                  </div>

                  <div className="flex items-center gap-2">
                    <Award size={18} />
                    {curso.certificado}
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="text-center mt-16">

          <Link
            href="/registro"
            className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 transition text-white px-8 py-4 rounded-2xl text-lg font-bold"
          >
            Ver todos los cursos
            <ArrowRight size={22} />
          </Link>

        </div>

      </div>
    </section>
  );
}