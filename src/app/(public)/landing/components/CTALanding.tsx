import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  LogIn,
} from "lucide-react";

export default function CTALanding() {

  return (

    <section className="relative overflow-hidden">

      <Image
        src="/images/dashboard/hero-marcona.jpg"
        alt="Marcona"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/75"/>

      <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">

        <span className="inline-flex rounded-full bg-green-600/20 border border-green-400/30 text-green-300 px-6 py-2 font-semibold">

          Comienza hoy

        </span>

        <h2 className="mt-8 text-6xl font-black text-white">

          El futuro del sector algal

          <span className="block text-cyan-300">

            comienza contigo.

          </span>

        </h2>

        <p className="mt-10 text-xl leading-9 text-slate-200 max-w-4xl mx-auto">

          Únete a AlgasMar Academy y accede a cursos,
          herramientas, biblioteca digital, marketplace
          y un Centro Oceanográfico Inteligente diseñado
          para fortalecer el aprovechamiento sostenible
          de las algas marinas.

        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-14">

          <Link
            href="/registro"
            className="inline-flex items-center gap-3 rounded-2xl bg-green-600 hover:bg-green-700 px-10 py-5 text-xl font-bold text-white transition shadow-xl"
          >

            Crear una cuenta

            <ArrowRight size={24}/>

          </Link>

          <Link
            href="/login"
            className="inline-flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 backdrop-blur px-10 py-5 text-xl font-bold text-white hover:bg-white/20 transition"
          >

            <LogIn size={24}/>

            Iniciar sesión

          </Link>

        </div>

      </div>

    </section>

  );

}