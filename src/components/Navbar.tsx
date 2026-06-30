"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Menu,
  X,
  Home,
  BookOpen,
  Library,
  PlayCircle,
  ShoppingCart,
  Newspaper,
  Users,
  Mail,
  User,
  Wrench,
  BarChart3,
} from "lucide-react";

import { useState } from "react";


export default function Navbar() {

  const [open, setOpen] = useState(false);


  const links = [

    {
      name: "Inicio",
      href: "/dashboard",
      icon: <Home size={18} />,
    },

    {
      name: "Cursos",
      href: "/cursos",
      icon: <BookOpen size={18} />,
    },
{
      name: "Oceanografia",
      href: "/oceanografia",
      icon: <BookOpen size={18} />,
    },

    {
      name: "Biblioteca",
      href: "/biblioteca",
      icon: <Library size={18} />,
    },

    {
      name: "Videoteca",
      href: "/videos",
      icon: <PlayCircle size={18} />,
    },

    {
      name: "Marketplace",
      href: "/marketplace",
      icon: <ShoppingCart size={18} />,
    },


    {
      name: "Herramientas",
      href: "/herramientas",
      icon: <Wrench size={18} />,
    },


    {
      name: "Ventas",
      href: "/ventas",
      icon: <BarChart3 size={18} />,
    },


    {
      name: "Noticias",
      href: "/noticias",
      icon: <Newspaper size={18} />,
    },


    {
      name: "Nosotros",
      href: "/nosotros",
      icon: <Users size={18} />,
    },


    {
      name: "Contacto",
      href: "/contacto",
      icon: <Mail size={18} />,
    },


    {
      name: "Perfil",
      href: "/perfil",
      icon: <User size={18} />,
    },

  ];



  return (

    <header className="sticky top-0 z-50 bg-white shadow-md">


      <div className="max-w-7xl mx-auto px-4">


        <div className="flex items-center justify-between h-20">


          {/* LOGO */}


          <Link
            href="/dashboard"
            className="flex items-center gap-3"
          >


            <Image
              src="/images/logo/logo-algasmar-transparent.png"
              alt="AlgasMar Academy"
              width={55}
              height={55}
              priority
            />


            <div>

              <h2 className="font-bold text-blue-900 text-lg">

                AlgasMar Academy

              </h2>


              <p className="text-xs text-slate-500">

                Capacitación y Comercialización

              </p>


            </div>


          </Link>




          {/* MENU DESKTOP */}


          <nav className="hidden lg:flex items-center gap-5">


            {links.map((link) => (


              <Link

                key={link.name}

                href={link.href}

                className="text-slate-700 hover:text-green-600 transition font-medium"

              >

                {link.name}


              </Link>


            ))}


          </nav>




          {/* BOTON MOVIL */}


          <button

            onClick={() => setOpen(!open)}

            className="lg:hidden"

          >


            {open ? (

              <X size={28} />

            ) : (

              <Menu size={28} />

            )}


          </button>



        </div>


      </div>




      {/* MENU MOVIL */}


      {open && (


        <div className="lg:hidden bg-white border-t">


          <div className="flex flex-col p-4 gap-4">


            {links.map((link) => (


              <Link

                key={link.name}

                href={link.href}

                onClick={() => setOpen(false)}

                className="flex items-center gap-3 text-slate-700 hover:text-green-600 transition"

              >

                {link.icon}

                {link.name}


              </Link>


            ))}



          </div>


        </div>


      )}



    </header>

  );

}