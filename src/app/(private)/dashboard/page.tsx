import Link from "next/link";
import Image from "next/image";

import {
  BookOpen,
  ShoppingCart,
  User,
  PlayCircle,
  Newspaper,
  Library,
  ArrowRight,
  BarChart3,
  Wrench,
} from "lucide-react";

export default function DashboardPage() {
  const modules = [
    {
      title: "Cursos",
      description:
        "Capacitación para transformar algas marinas.",
      icon: <BookOpen size={40} />,
      href: "/cursos",
      color: "bg-blue-600",
    },

    {
      title: "Marketplace",
      description:
        "Comercialización de productos derivados.",
      icon: <ShoppingCart size={40} />,
      href: "/marketplace",
      color: "bg-orange-500",
    },

    {
      title: "Herramientas",
      description:
        "Equipos para producir valor agregado.",
      icon: <Wrench size={40} />,
      href: "/herramientas",
      color: "bg-green-600",
    },

    {
      title: "Biblioteca",
      description:
        "Manuales y documentos técnicos.",
      icon: <Library size={40} />,
      href: "/biblioteca",
      color: "bg-indigo-600",
    },

    {
      title: "Videoteca",
      description:
        "Videos educativos y capacitaciones.",
      icon: <PlayCircle size={40} />,
      href: "/videos",
      color: "bg-red-600",
    },

    {
      title: "Noticias",
      description:
        "Actualidad del sector algal.",
      icon: <Newspaper size={40} />,
      href: "/noticias",
      color: "bg-yellow-500",
    },

    {
      title: "Ventas",
      description:
        "Control comercial y estadísticas.",
      icon: <BarChart3 size={40} />,
      href: "/ventas",
      color: "bg-emerald-600",
    },

    {
      title: "Perfil",
      description:
        "Cursos y certificados obtenidos.",
      icon: <User size={40} />,
      href: "/perfil",
      color: "bg-cyan-600",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100">


      {/* HERO */}

      <section className="relative h-[650px] overflow-hidden">

        <Image
          src="/images/dashboard/hero-marcona.jpg"
          alt="Marcona"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />


        <div className="absolute inset-0 flex items-center">

          <div className="max-w-7xl mx-auto px-6 w-full">

            <div className="max-w-3xl">


              <Image
                src="/images/logo/logo-algasmar-transparent.png"
                alt="AlgasMar Academy"
                width={120}
                height={120}
                className="mb-6"
              />


              <h1 className="text-5xl md:text-7xl font-extrabold text-white">
                AlgasMar Academy
              </h1>


              <p className="text-xl text-blue-100 mt-6 leading-8">

                Plataforma digital para capacitar,
                transformar y comercializar productos
                sostenibles derivados de algas marinas.

              </p>


              <div className="flex flex-wrap gap-4 mt-8">

                <Link
                  href="/cursos"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold"
                >
                  Iniciar Capacitación
                </Link>


                <Link
                  href="/marketplace"
                  className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold"
                >
                  Marketplace
                </Link>


              </div>


            </div>

          </div>

        </div>


      </section>



      {/* INDICADORES */}


      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">


        <div className="grid md:grid-cols-4 gap-6">


          <div className="bg-white rounded-3xl shadow-xl p-6 text-center">

            <h2 className="text-4xl font-bold text-blue-700">
              3
            </h2>

            <p className="text-slate-500">
              Cursos Técnicos
            </p>

          </div>


          <div className="bg-white rounded-3xl shadow-xl p-6 text-center">

            <h2 className="text-4xl font-bold text-green-700">
              4
            </h2>

            <p className="text-slate-500">
              Equipos Recomendados
            </p>

          </div>


          <div className="bg-white rounded-3xl shadow-xl p-6 text-center">

            <h2 className="text-4xl font-bold text-orange-600">
              3
            </h2>

            <p className="text-slate-500">
              Productos Comerciales
            </p>

          </div>


          <div className="bg-white rounded-3xl shadow-xl p-6 text-center">

            <h2 className="text-4xl font-bold text-purple-700">
              PDF
            </h2>

            <p className="text-slate-500">
              Manuales Técnicos
            </p>

          </div>


        </div>


      </section>



      {/* MODULOS */}


      <section className="max-w-7xl mx-auto px-6 py-16">


        <h2 className="text-3xl font-bold mb-8">
          Módulos Disponibles
        </h2>



        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">


          {modules.map((item) => (

            <Link
              key={item.title}
              href={item.href}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition p-6"
            >

              <div
                className={`${item.color} w-16 h-16 rounded-2xl text-white flex items-center justify-center`}
              >

                {item.icon}

              </div>


              <h2 className="text-xl font-bold mt-4">

                {item.title}

              </h2>


              <p className="text-gray-500 mt-2">

                {item.description}

              </p>


            </Link>


          ))}


        </div>


      </section>




      {/* CTA */}


      <section className="max-w-7xl mx-auto px-6 pb-16">


        <div className="bg-gradient-to-r from-blue-900 to-green-600 rounded-3xl text-white p-10">


          <h2 className="text-4xl font-bold mb-4">

            Transforma recursos marinos en productos de valor

          </h2>


          <p className="text-lg text-blue-100 mb-8">

            Aprende procesos productivos, utiliza herramientas
            adecuadas y conecta tus productos con nuevos mercados.

          </p>


          <Link
            href="/cursos"
            className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2"
          >

            Comenzar

            <ArrowRight size={18}/>

          </Link>


        </div>


      </section>



    </main>
  );
}