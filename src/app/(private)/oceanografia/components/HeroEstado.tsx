import {
  ShieldCheck,
  Clock3,
  Activity,
  AlertTriangle,
} from "lucide-react";

import { PronosticoDia } from "@/lib/pronostico7Dias";

interface Props {
  pronostico: PronosticoDia;
}

export default function HeroEstado({
  pronostico,
}: Props) {

  const colorEstado =
    pronostico.indice >= 90
      ? "text-green-300"
      : pronostico.indice >= 75
      ? "text-blue-300"
      : pronostico.indice >= 60
      ? "text-yellow-300"
      : "text-red-300";

  const colorBarra =
    pronostico.indice >= 90
      ? "bg-green-400"
      : pronostico.indice >= 75
      ? "bg-blue-400"
      : pronostico.indice >= 60
      ? "bg-yellow-400"
      : "bg-red-500";

  const nivelOperativo =
    pronostico.indice >= 90
      ? "Óptimo"
      : pronostico.indice >= 75
      ? "Bueno"
      : pronostico.indice >= 60
      ? "Precaución"
      : "Alto Riesgo";

  return (

    <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-xl">

      {/* Encabezado */}

      <div className="flex items-center justify-between">

        <div>

          <p className="uppercase tracking-[0.25em] text-cyan-300 text-sm">

            Estado General del Mar

          </p>

          <h2 className="mt-2 text-4xl font-extrabold">

            Panel Ejecutivo

          </h2>

        </div>

        <ShieldCheck
          size={70}
          className={colorEstado}
        />

      </div>

      {/* Tarjetas */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-8">

        <div className="rounded-2xl bg-white/10 p-5 border border-white/10">

          <p className="text-sm text-blue-200">

            Estado

          </p>

          <h3
            className={`mt-3 text-3xl font-bold ${colorEstado}`}
          >

            {pronostico.estado}

          </h3>

        </div>

        <div className="rounded-2xl bg-white/10 p-5 border border-white/10">

          <div className="flex items-center gap-2">

            <Activity size={18} />

            <p className="text-sm text-blue-200">

              Índice IA

            </p>

          </div>

          <h3 className="mt-3 text-3xl font-bold">

            {pronostico.indice}/100

          </h3>

        </div>

        <div className="rounded-2xl bg-white/10 p-5 border border-white/10">

          <div className="flex items-center gap-2">

            <Clock3 size={18} />

            <p className="text-sm text-blue-200">

              Mejor Hora

            </p>

          </div>

          <h3 className="mt-3 text-3xl font-bold">

            {pronostico.mejorHora}

          </h3>

        </div>

        <div className="rounded-2xl bg-white/10 p-5 border border-white/10">

          <div className="flex items-center gap-2">

            <AlertTriangle size={18} />

            <p className="text-sm text-blue-200">

              Nivel Operativo

            </p>

          </div>

          <h3
            className={`mt-3 text-3xl font-bold ${colorEstado}`}
          >

            {nivelOperativo}

          </h3>

        </div>

      </div>

      {/* Barra IA */}

      <div className="mt-10">

        <div className="flex justify-between mb-3">

          <span className="text-blue-100">

            Índice Inteligente de Recolección

          </span>

          <span className={`font-bold ${colorEstado}`}>

            {pronostico.indice}/100

          </span>

        </div>

        <div className="h-4 rounded-full bg-white/20 overflow-hidden">

          <div
            className={`h-full rounded-full transition-all duration-700 ${colorBarra}`}
            style={{
              width: `${pronostico.indice}%`,
            }}
          />

        </div>

      </div>

      {/* Diagnóstico */}

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">

        <h3 className="text-2xl font-bold">

          Diagnóstico Inteligente

        </h3>

        <p className="mt-5 leading-8 text-blue-100">

          El algoritmo de AlgasMar Academy evaluó automáticamente
          el comportamiento del oleaje, velocidad del viento,
          período de las olas y precipitaciones para estimar
          las condiciones de trabajo durante la jornada.

        </p>

        <p className="mt-5 leading-8 text-blue-100">

          Para el día analizado se obtuvo un estado

          <strong className="text-white">

            {" "}{pronostico.estado}

          </strong>

          , alcanzando un índice de

          <strong className="text-white">

            {" "}{pronostico.indice}/100

          </strong>

          .

        </p>

        <p className="mt-5 leading-8 text-blue-100">

          La mejor ventana de operación inicia aproximadamente
          a las

          <strong className="text-cyan-300">

            {" "}{pronostico.mejorHora}

          </strong>

          , momento en el que las condiciones del mar presentan
          el menor nivel de riesgo para la recolección.

        </p>

      </div>

    </div>

  );

}