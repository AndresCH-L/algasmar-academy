import {
  Waves,
  MapPin,
  CalendarDays,
  Clock3,
} from "lucide-react";

import { Oceanografia } from "@/types/oceanografia";

interface Props {
  datos: Oceanografia;
}

export default function HeroHeader({
  datos,
}: Props) {

  const fecha = new Date(
    datos.hourly.time[0]
  ).toLocaleDateString(
    "es-PE",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const hora = new Date(
    datos.hourly.time[0]
  ).toLocaleTimeString(
    "es-PE",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  return (

    <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-8 shadow-2xl">

      <div className="flex items-center gap-4">

        <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center">

          <Waves
            size={34}
            className="text-cyan-300"
          />

        </div>

        <div>

          <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm font-semibold">

            AlgasMar Academy

          </p>

          <h1 className="text-4xl lg:text-5xl font-extrabold mt-2">

            Centro Oceanográfico Inteligente

          </h1>

        </div>

      </div>

      <p className="mt-8 text-lg leading-8 text-blue-100 max-w-4xl">

        Plataforma de monitoreo oceanográfico diseñada para
        apoyar la toma de decisiones durante la recolección
        de algas marinas mediante el análisis automático
        del oleaje, viento, temperatura, precipitación y
        demás variables meteorológicas de San Juan de Marcona.

      </p>

      <div className="grid md:grid-cols-3 gap-5 mt-8">

        <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5">

          <MapPin
            className="text-cyan-300"
            size={26}
          />

          <div>

            <p className="text-sm text-blue-200">

              Ubicación

            </p>

            <p className="font-bold">

              San Juan de Marcona

            </p>

            <p className="text-sm text-blue-100">

              Ica · Perú

            </p>

          </div>

        </div>

        <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5">

          <CalendarDays
            className="text-green-300"
            size={26}
          />

          <div>

            <p className="text-sm text-blue-200">

              Fecha

            </p>

            <p className="font-bold capitalize">

              {fecha}

            </p>

          </div>

        </div>

        <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5">

          <Clock3
            className="text-yellow-300"
            size={26}
          />

          <div>

            <p className="text-sm text-blue-200">

              Última actualización

            </p>

            <p className="font-bold">

              {hora}

            </p>

            <p className="text-sm text-blue-100">

              Open-Meteo API

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}