"use client";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavbarLanding() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Inicio",
      href: "#inicio",
    },
    {
      name: "Nosotros",
      href: "#nosotros",
    },
    {
      name: "Cursos",
      href: "#cursos",
    },
    {
      name: "Marketplace",
      href: "#marketplace",
    },
    {
      name: "Contacto",
      href: "#footer",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}

          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <Image
              src="/images/logo/logo-algasmar-transparent.png"
              alt="AlgasMar Academy"
              width={58}
              height={58}
              priority
            />

            <div>

              <h2 className="font-bold text-2xl text-slate-900">

                AlgasMar Academy

              </h2>

              <p className="text-sm text-slate-500">

                Capacitación • Tecnología • Comercialización

              </p>

            </div>

          </Link>

          {/* MENU DESKTOP */}

          <nav className="hidden lg:flex items-center gap-8">

            {links.map((item) => (

              <a
                key={item.name}
                href={item.href}
                className="font-medium text-slate-700 hover:text-green-600 transition"
              >
                {item.name}
              </a>

            ))}

          </nav>

          {/* BOTONES */}

          <div className="hidden lg:flex items-center gap-4">

            <Link
              href="/login"
              className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 transition font-semibold"
            >
              Iniciar sesión
            </Link>

            <Link
              href="/registro"
              className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition shadow-lg"
            >
              Regístrate
            </Link>

          </div>

          {/* BOTON MOVIL */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >

            {open ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}

          </button>

        </div>

      </div>

      {/* MENU MOVIL */}

      {open && (

        <div className="lg:hidden bg-white border-t">

          <div className="px-6 py-6 flex flex-col gap-5">

            {links.map((item) => (

              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-medium text-slate-700"
              >
                {item.name}
              </a>

            ))}

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-slate-300 py-3 text-center font-semibold"
            >
              Iniciar sesión
            </Link>

            <Link
              href="/registro"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-green-600 text-white py-3 text-center font-semibold"
            >
              Regístrate
            </Link>

          </div>

        </div>

      )}

    </header>
  );
}