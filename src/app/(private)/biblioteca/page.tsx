import Image from "next/image";

import {
  FileText,
  Download,
  BookOpen,
  Clock,
} from "lucide-react";


const documentos = [

  {
    titulo: "Manual de Aprovechamiento del Sargazo",

    descripcion:
      "Guía técnica sobre identificación, recolección sostenible, limpieza, secado, almacenamiento y comercialización del sargazo.",

    paginas: 48,

    nivel: "Básico",

    imagen:
      "/images/biblioteca/manual-sargazo.jpg",

    archivo:
      "/biblioteca/manual-sargazo.pdf",
  },


  {
    titulo: "Manual de Producción de Abono Orgánico",

    descripcion:
      "Manual especializado sobre producción de fertilizantes naturales mediante transformación de algas marinas.",
    paginas: 65,
    nivel: "Intermedio",
    imagen:
      "/images/biblioteca/manual-abono.jpg",
    archivo:
      "/biblioteca/manual-abono-organico.pdf",
  },


  {
    titulo: "Manual de Elaboración de Harina de Yuyo",
    descripcion:
      "Procedimientos técnicos de selección, lavado, secado, molienda, tamizado, envasado y almacenamiento.",
    paginas: 52,
    nivel: "Avanzado",
    imagen:
      "/images/biblioteca/manual-harina.jpg",
    archivo:
      "/biblioteca/manual-harina-yuyo.pdf",
  },

];

export default function BibliotecaPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h1 className="text-4xl md:text-5xl font-bold">
            Biblioteca Digital
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-4xl">
            Manuales técnicos profesionales para fortalecer
            capacidades en transformación y comercialización
            de productos derivados de algas marinas.
          </p>
        </div>
      </section>

      {/* MANUALES */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-800">
            Manuales Técnicos Disponibles
          </h2>
          <p className="text-slate-500 mt-2">
            Accede a documentación especializada de AlgasMar Academy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentos.map((doc) => (

            <div
              key={doc.titulo}

              className="
              bg-white 
              rounded-3xl 
              overflow-hidden 
              shadow-lg 
              hover:shadow-2xl 
              hover:-translate-y-1 
              transition-all 
              duration-300
              "
            >

              {/* IMAGEN */}

              <div className="relative h-72">
                <Image
                  src={doc.imagen}
                  alt={doc.titulo}
                  fill
                  className="object-cover"
                />
              </div>

              {/* INFO */}

              <div className="p-6">
                <div className="flex items-center gap-2 text-blue-700 font-medium mb-3">
                  <BookOpen size={18}/>
                  <span>
                    Manual Técnico
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-3">
                  {doc.titulo}
                </h2>
                <p className="text-slate-600 mb-5">
                  {doc.descripcion}
                </p>





                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-slate-500">
                    <FileText size={16}/>
                    <span>
                      {doc.paginas} páginas
                    </span>
                  </div>


                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock size={16}/>
                    <span>
                      Nivel {doc.nivel}
                    </span>
                  </div>
                </div>

                {/* BOTONES */}

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={doc.archivo}
                    target="_blank"
                    className="
                    flex 
                    items-center 
                    justify-center 
                    gap-2 
                    border 
                    border-blue-700 
                    text-blue-700 
                    py-3 
                    rounded-xl 
                    hover:bg-blue-50 
                    transition
                    "
                  >


                    <FileText size={18}/>
                    Ver PDF
                  </a>


                  <a
                    href={doc.archivo}
                    download
                    className="
                    flex 
                    items-center 
                    justify-center 
                    gap-2 
                    bg-blue-700 
                    hover:bg-blue-800 
                    text-white 
                    py-3 
                    rounded-xl 
                    transition
                    "
                  >

                    <Download size={18}/>
                    Descargar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );

}