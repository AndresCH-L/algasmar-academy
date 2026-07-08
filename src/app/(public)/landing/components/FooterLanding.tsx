import Link from "next/link";
import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function FooterLanding() {

  return (

    <footer
      id="footer"
      className="bg-slate-950 text-white"
    >

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* PARTE SUPERIOR */}

        <div className="grid lg:grid-cols-4 gap-14">

          {/* LOGO */}

          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/images/logo/logo-algasmar-transparent.png"
                alt="AlgasMar Academy"
                width={72}
                height={72}
              />

              <div>

                <h2 className="text-2xl font-bold">

                  AlgasMar Academy

                </h2>

                <p className="text-slate-400">

                  Capacitación • Innovación • Comercialización

                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-slate-400">

              Plataforma digital especializada en capacitación,
              información oceanográfica, biblioteca técnica,
              marketplace y herramientas para impulsar el
              aprovechamiento sostenible de las algas marinas
              mediante innovación, tecnología y educación.

            </p>

          </div>

          {/* NAVEGACIÓN */}

          <div>

            <h3 className="text-xl font-bold mb-6">

              Plataforma

            </h3>

            <div className="space-y-4">

              <Link
                href="#inicio"
                className="block hover:text-cyan-400 transition"
              >
                Inicio
              </Link>

              <Link
                href="#nosotros"
                className="block hover:text-cyan-400 transition"
              >
                Nosotros
              </Link>

              <Link
                href="#cursos"
                className="block hover:text-cyan-400 transition"
              >
                Cursos
              </Link>

              <Link
                href="#marketplace"
                className="block hover:text-cyan-400 transition"
              >
                Marketplace
              </Link>

              <Link
                href="#oceanografia"
                className="block hover:text-cyan-400 transition"
              >
                Centro Oceanográfico
              </Link>

            </div>

          </div>

          {/* CONTACTO */}

          <div>

            <h3 className="text-xl font-bold mb-6">

              Contáctanos

            </h3>

            <div className="space-y-6">

              <a
                href="mailto:algasmaracademy@gmail.com"
                className="flex gap-3 hover:text-cyan-400 transition"
              >

                <Mail
                  size={20}
                  className="text-cyan-400 mt-1"
                />

                <span>

                  algasmaracademy@gmail.com

                </span>

              </a>

              <a
                href="tel:+51947070876"
                className="flex gap-3 hover:text-green-400 transition"
              >

                <Phone
                  size={20}
                  className="text-green-400 mt-1"
                />

                <span>

                  +51 947 070 876

                </span>

              </a>

              <div className="flex gap-3">

                <MapPin
                  size={20}
                  className="text-orange-400 mt-1"
                />

                <span className="text-slate-300">

                  San Juan de Marcona,
                  Ica - Perú

                </span>

              </div>

            </div>

          </div>

          {/* CTA */}

          <div>

            <h3 className="text-xl font-bold mb-6">

              Empieza Hoy

            </h3>

            <p className="leading-8 text-slate-400">

              Regístrate gratuitamente y accede a cursos,
              biblioteca técnica, marketplace,
              centro oceanográfico y herramientas
              para impulsar el aprovechamiento sostenible
              de las algas marinas.

            </p>

            <Link
              href="/registro"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-green-500 px-7 py-4 font-semibold hover:scale-105 transition duration-300"
            >

              Crear Cuenta

              <ArrowUpRight size={20} />

            </Link>

          </div>

        </div>
                {/* REDES SOCIALES */}

        <div className="mt-20 border-t border-slate-800 pt-10">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>

              <p className="text-slate-500 text-center lg:text-left">

                © 2026
                  AlgasMar Academy
                . Todos los derechos reservados.

              </p>

              <p className="text-slate-600 text-sm mt-2 text-center lg:text-left">

                Plataforma desarrollada para fortalecer el aprovechamiento
                sostenible de las algas marinas mediante tecnología,
                capacitación e innovación.

              </p>

            </div>

            {/* ICONOS */}

            <div className="flex items-center gap-4">

              {/* Facebook */}

              <a
                href="https://www.facebook.com/share/1Cq6whUdsu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 transition duration-300 flex items-center justify-center hover:scale-110"
              >

                <FaFacebookF size={18} />

              </a>

              {/* Instagram */}

              <a
                href="https://www.instagram.com/algasmar_academy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-pink-600 transition duration-300 flex items-center justify-center hover:scale-110"
              >

                <FaInstagram size={20} />

              </a>

              {/* YouTube */}

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-red-600 transition duration-300 flex items-center justify-center hover:scale-110"
              >

                <FaYoutube size={20} />

              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-700 transition duration-300 flex items-center justify-center hover:scale-110"
              >

                <FaLinkedinIn size={18} />

              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>

  );

}