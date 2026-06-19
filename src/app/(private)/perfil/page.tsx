import Image from "next/image";
import {
  Award,
  Download,
} from "lucide-react";

const certificados = [
  {
    nombre: "Aprovechamiento del Sargazo",
    archivo: "/certificados/certificado-sargazo.pdf",
  },

  {
    nombre: "Producción de Abono Orgánico",
    archivo:
      "/certificados/certificado-abono-organico.pdf",
  },

  {
    nombre: "Elaboración de Harina de Yuyo",
    archivo:
      "/certificados/certificado-harina-yuyo.pdf",
  },
];

export default function PerfilPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-900 to-green-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <div className="flex items-center gap-4">

            <Image
              src="/images/logo/logo-algasmar-transparent.png"
              alt="AlgasMar Academy"
              width={70}
              height={70}
            />

            <div>

              <h1 className="text-4xl font-bold">
                Mi Perfil
              </h1>

              <p className="text-blue-100">
                Información de la organización
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PERFIL */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="flex flex-col md:flex-row items-center gap-6">

            <div className="w-28 h-28 rounded-full bg-blue-700 text-white flex items-center justify-center text-4xl font-bold">
              A
            </div>

            <div>

              <h2 className="text-3xl font-bold">
                Asociación Mar de Marcona
              </h2>

              <p className="text-gray-500 text-lg">
                Marcona - Ica - Perú
              </p>

              <p className="text-gray-400 mt-2">
                Productores y transformadores de algas marinas
              </p>

            </div>

          </div>

          {/* RESUMEN */}

          <div className="grid md:grid-cols-4 gap-6 mt-10">

            <div className="bg-slate-100 rounded-2xl p-6 text-center">

              <h3 className="text-4xl font-bold text-blue-700">
                3
              </h3>

              <p className="text-gray-600 mt-2">
                Cursos Completados
              </p>

            </div>

            <div className="bg-slate-100 rounded-2xl p-6 text-center">

              <h3 className="text-4xl font-bold text-green-700">
                3
              </h3>

              <p className="text-gray-600 mt-2">
                Certificados
              </p>

            </div>

            <div className="bg-slate-100 rounded-2xl p-6 text-center">

              <h3 className="text-4xl font-bold text-orange-600">
                3
              </h3>

              <p className="text-gray-600 mt-2">
                Productos Publicados
              </p>

            </div>

            <div className="bg-slate-100 rounded-2xl p-6 text-center">

              <h3 className="text-4xl font-bold text-emerald-600">
                82
              </h3>

              <p className="text-gray-600 mt-2">
                Ventas Realizadas
              </p>

            </div>

          </div>

          {/* INFORMACION */}

          <div className="mt-12 border-t pt-8">

            <h3 className="text-2xl font-bold mb-6">
              Información General
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <p className="text-slate-500">
                  Organización
                </p>

                <p className="font-semibold">
                  Asociación Mar de Marcona
                </p>

              </div>

              <div>

                <p className="text-slate-500">
                  Ubicación
                </p>

                <p className="font-semibold">
                  Marcona - Ica - Perú
                </p>

              </div>

              <div>

                <p className="text-slate-500">
                  Estado
                </p>

                <p className="font-semibold text-green-600">
                  Activo
                </p>

              </div>

              <div>

                <p className="text-slate-500">
                  Miembro desde
                </p>

                <p className="font-semibold">
                  2026
                </p>

              </div>

            </div>

          </div>

          {/* CERTIFICADOS */}

          <div className="mt-12 border-t pt-8">

            <h3 className="text-2xl font-bold mb-6">
              Mis Certificados
            </h3>

            <div className="grid md:grid-cols-3 gap-6">

              {certificados.map((certificado) => (

                <div
                  key={certificado.nombre}
                  className="bg-green-50 border border-green-200 rounded-2xl p-6"
                >

                  <Award
                    size={40}
                    className="text-green-600 mb-4"
                  />

                  <h4 className="font-bold mb-4">
                    {certificado.nombre}
                  </h4>

                  <a
                    href={certificado.archivo}
                    download
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition"
                  >

                    <Download size={18} />

                    Descargar PDF

                  </a>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}