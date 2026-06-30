import Link from "next/link";
import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-auto">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3 mb-5">

              <Image
                src="/images/logo/logo-algasmar-transparent.png"
                alt="AlgasMar Academy"
                width={60}
                height={60}
              />

              <div>

                <h3 className="font-bold text-xl">
                  AlgasMar Academy
                </h3>

                <p className="text-sm text-slate-400">
                  Capacitación y Comercialización
                </p>

              </div>

            </div>

            <p className="text-slate-400 leading-7">
              Plataforma digital para capacitación,
              producción y comercialización de
              productos derivados de algas marinas.
            </p>

          </div>

          {/* Enlaces */}

          <div>

            <h3 className="font-bold text-lg mb-5">
              Enlaces Rápidos
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                href="/dashboard"
                className="text-slate-400 hover:text-white transition"
              >
                Inicio
              </Link>

              <Link
                href="/cursos"
                className="text-slate-400 hover:text-white transition"
              >
                Cursos
              </Link>

              

  <Link
    href="/oceanografia"
    className="text-slate-400 hover:text-white transition"
  >
    Centro Oceanográfico
  </Link>



              <Link
                href="/biblioteca"
                className="text-slate-400 hover:text-white transition"
              >
                Biblioteca
              </Link>

              <Link
                href="/videos"
                className="text-slate-400 hover:text-white transition"
              >
                Videoteca
              </Link>

            </div>

          </div>

          {/* Plataforma */}

          <div>

            <h3 className="font-bold text-lg mb-5">
              Plataforma
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                href="/marketplace"
                className="text-slate-400 hover:text-white transition"
              >
                Marketplace
              </Link>
<Link
  href="/herramientas"
  className="text-slate-400 hover:text-white transition"
>
  Herramientas
</Link>

              <Link
                href="/ventas"
                className="text-slate-400 hover:text-white transition"
              >
                Ventas
              </Link>

              <Link
                href="/noticias"
                className="text-slate-400 hover:text-white transition"
              >
                Noticias
              </Link>

              <Link
                href="/nosotros"
                className="text-slate-400 hover:text-white transition"
              >
                Nosotros
              </Link>

              <Link
                href="/perfil"
                className="text-slate-400 hover:text-white transition"
              >
                Mi Perfil
              </Link>

            </div>

          </div>

          {/* Contacto */}

          <div>

            <h3 className="font-bold text-lg mb-5">
              Centro de Atención
            </h3>

            <div className="space-y-4 text-slate-400">

              <div className="flex items-start gap-3">

                <Mail size={18} />

                <span>
                  andresxd.2018@gmail.com
                </span>

              </div>

              <div className="flex items-start gap-3">

                <Phone size={18} />

                <span>
                  +51 930 136 375
                </span>

              </div>

              <div className="flex items-start gap-3">

                <MapPin size={18} />

                <span>
                  Marcona - Ica - Perú
                </span>

              </div>

            </div>

            <div className="flex gap-3 mt-6">

              <a
                href="https://wa.me/51930136375"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-xl"
              >
                WhatsApp
              </a>

              <a
                href="mailto:andresxd.2018@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-xl"
              >
                Correo
              </a>

            </div>

          </div>

        </div>

        <hr className="border-slate-800 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">

          <p>
            © 2026 AlgasMar Academy. Todos los derechos reservados.
          </p>

          <p>
            Plataforma para el fortalecimiento de asociaciones algueras del Perú.
          </p>

        </div>

      </div>

    </footer>
  );
}