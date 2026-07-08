import Image from "next/image";
import Link from "next/link";

import {
  Waves,
  Wind,
  Thermometer,
  Clock3,
  ArrowRight,
  ShieldCheck,
  Brain,
} from "lucide-react";

export default function OceanografiaLanding() {

  return (

    <section
      id="oceanografia"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-900 text-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IZQUIERDA */}

          <div>

            <span className="inline-flex items-center gap-3 rounded-full bg-cyan-500/20 border border-cyan-400/30 px-5 py-2 text-cyan-300 font-semibold">

              <Brain size={18} />

              Centro Oceanográfico Inteligente

            </span>

            <h2 className="mt-8 text-5xl lg:text-6xl font-black leading-tight">

              Planifica tus jornadas con

              <span className="text-cyan-300">

                {" "}información oceanográfica inteligente

              </span>

            </h2>

            <p className="mt-8 text-xl leading-9 text-slate-300 max-w-2xl">

              Consulta pronósticos oceanográficos y meteorológicos
              obtenidos automáticamente para tomar mejores decisiones
              antes de iniciar una jornada de recolección.
              Nuestro algoritmo analiza múltiples variables para
              ayudarte a identificar el mejor momento para trabajar
              de forma segura y eficiente.

            </p>

            {/* Indicadores */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="rounded-xl bg-white/10 border border-white/10 backdrop-blur-md p-4 hover:bg-white/15 transition">

                <Waves
                  className="text-cyan-300"
                  size={28}
                />

                <h3 className="mt-3 text-lg font-bold">

                  Oleaje

                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">

                  Altura, dirección y período de las olas.

                </p>

              </div>

              <div className="rounded-xl bg-white/10 border border-white/10 backdrop-blur-md p-4 hover:bg-white/15 transition">

                <Wind
                  className="text-green-300"
                  size={28}
                />

                <h3 className="mt-3 text-lg font-bold">

                  Viento

                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">

                  Velocidad y dirección del viento.

                </p>

              </div>

              <div className="rounded-xl bg-white/10 border border-white/10 backdrop-blur-md p-4 hover:bg-white/15 transition">

                <Thermometer
                  className="text-orange-300"
                  size={28}
                />

                <h3 className="mt-3 text-lg font-bold">

                  Temperatura

                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">

                  Temperatura del mar y del ambiente.

                </p>

              </div>

              <div className="rounded-xl bg-white/10 border border-white/10 backdrop-blur-md p-4 hover:bg-white/15 transition">

                <Clock3
                  className="text-yellow-300"
                  size={28}
                />

                <h3 className="mt-3 text-lg font-bold">

                  Mejor horario

                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">

                  El sistema estima la mejor ventana para recolectar.

                </p>

              </div>

            </div>

            <Link

              href="/registro"

              className="inline-flex items-center gap-3 mt-10 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl text-lg font-bold transition shadow-xl"

            >

              Probar Plataforma

              <ArrowRight size={22} />

            </Link>

          </div>

          {/* DERECHA */}

          <div className="relative">
                        {/* Dashboard principal */}

            <div className="rounded-[36px] overflow-hidden border border-white/20 shadow-2xl">

              <Image

                src="/images/oceanografia/dashboard-oceanografia.png"

                alt="Centro Oceanográfico"

                width={1200}

                height={820}

                className="w-full"

              />

            </div>

            {/* Segunda imagen */}

            <div className="mt-6 rounded-[28px] overflow-hidden border border-white/20 shadow-xl">

              <Image

                src="/images/oceanografia/dashboard-oceanografia2.png"

                alt="Recolectores de algas"

                width={1200}

                height={1000}

                className="w-full "

              />

            </div>

            {/* Tarjeta de estado */}

            <div className="mt-6 bg-white rounded-3xl shadow-2xl p-7">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                  <ShieldCheck
                    size={34}
                    className="text-green-600"
                  />

                </div>

                <div>

                  <p className="text-slate-500 font-medium">

                    Estado del Mar

                  </p>

                  <h3 className="text-3xl font-bold text-green-600">

                    Favorable

                  </h3>

                </div>

              </div>

              <p className="mt-5 text-slate-600 leading-7">

                El algoritmo analiza automáticamente el oleaje,
                velocidad del viento, período de las olas,
                temperatura y demás variables oceanográficas para
                recomendar las mejores condiciones de trabajo.

              </p>

              <div className="grid grid-cols-3 gap-4 mt-7">

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <p className="text-2xl font-black text-cyan-600">

                    IA

                  </p>

                  <span className="text-sm text-slate-500">

                    Análisis Inteligente

                  </span>

                </div>

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <p className="text-2xl font-black text-green-600">

                    24 h

                  </p>

                  <span className="text-sm text-slate-500">

                    Pronóstico

                  </span>

                </div>

                <div className="rounded-2xl bg-slate-100 p-4 text-center">

                  <p className="text-2xl font-black text-blue-600">

                    API

                  </p>

                  <span className="text-sm text-slate-500">

                    Open-Meteo

                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}