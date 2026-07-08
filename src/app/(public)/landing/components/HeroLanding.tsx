import Image from "next/image";
import Link from "next/link";

export default function HeroLanding() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Imagen de fondo */}

      <Image
        src="/images/dashboard/hero-marcona.jpg"
        alt="Marcona"
        fill
        priority
        className="object-cover"
      />

      {/* Oscurecer */}

      <div className="absolute inset-0 bg-slate-950/65" />

      {/* Degradado */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/70 to-transparent" />

      {/* Contenido */}

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16">

        <div className="grid lg:grid-cols-2 gap-14 items-center min-h-[82vh]">

          {/* TEXTO */}

          <div>

            <div className="inline-flex items-center rounded-full bg-green-600/20 border border-green-400/50 px-5 py-2 text-green-300 font-semibold">

              Plataforma Digital para Asociaciones Algueras

            </div>

            <h1 className="mt-6 text-6xl lg:text-7xl font-black leading-tight text-white">

              Aprende.

              <span className="block text-cyan-300">
                Transforma.
              </span>

              <span className="block text-green-400">
                Comercializa.
              </span>

            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-200 max-w-2xl">

              AlgasMar Academy integra capacitación,
              biblioteca digital, marketplace,
              centro oceanográfico inteligente
              y herramientas especializadas para impulsar
              el aprovechamiento sostenible de las
              algas marinas.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="/registro"
                className="rounded-2xl bg-green-600 hover:bg-green-700 transition px-8 py-4 font-bold text-lg shadow-2xl"
              >
                Comenzar
              </Link>

              <a
                href="#nosotros"
                className="rounded-2xl bg-white/15 border border-white/60 px-8 py-4 font-bold text-lg text-white hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg backdrop-blur-md"
              >
                Conocer más
              </a>

            </div>

          </div>

          {/* DASHBOARD */}

          <div className="relative">

            <div className="rounded-[40px] bg-slate-900/95 shadow-2xl p-4">

              <Image
                src="/images/dashboard/dashboard-home.png"
                alt="Dashboard AlgasMar Academy"
                width={900}
                height={560}
                priority
                className="rounded-3xl"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}