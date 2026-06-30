import {
  Waves,
  Wind,
  Thermometer,
  Gauge,
  CloudRain,
  Cloud,
  Droplets,
} from "lucide-react";

import { Oceanografia } from "@/types/oceanografia";

interface Props {
  datos: Oceanografia;
}

function obtenerEstado(
  tipo: string,
  valor: number
) {

  switch (tipo) {

    case "oleaje":

      if (valor <= 1.5)
        return "bg-green-500";

      if (valor <= 2)
        return "bg-yellow-400";

      if (valor <= 2.5)
        return "bg-orange-500";

      return "bg-red-500";

    case "viento":

      if (valor <= 12)
        return "bg-green-500";

      if (valor <= 18)
        return "bg-yellow-400";

      if (valor <= 25)
        return "bg-orange-500";

      return "bg-red-500";

    case "periodo":

      if (valor >= 16)
        return "bg-green-500";

      if (valor >= 14)
        return "bg-yellow-400";

      return "bg-red-500";

    case "lluvia":

      if (valor === 0)
        return "bg-green-500";

      if (valor < 1)
        return "bg-yellow-400";

      return "bg-red-500";

    default:

      return "bg-cyan-400";

  }

}

export default function HeroIndicadores({
  datos,
}: Props) {

  const indicadores = [

    {
      titulo: "Oleaje",
      valor: `${datos.hourly.wave_height[0].toFixed(1)} m`,
      numero: datos.hourly.wave_height[0],
      tipo: "oleaje",
      icono: <Waves size={24} />,
    },

    {
      titulo: "Período",
      valor: `${datos.hourly.wave_period[0].toFixed(0)} s`,
      numero: datos.hourly.wave_period[0],
      tipo: "periodo",
      icono: <Gauge size={24} />,
    },

    {
      titulo: "Viento",
      valor: `${datos.hourly.wind_speed_10m[0].toFixed(1)} km/h`,
      numero: datos.hourly.wind_speed_10m[0],
      tipo: "viento",
      icono: <Wind size={24} />,
    },

    {
      titulo: "Temp. Mar",
      valor: `${datos.hourly.sea_surface_temperature[0].toFixed(1)} °C`,
      numero: datos.hourly.sea_surface_temperature[0],
      tipo: "temperatura",
      icono: <Thermometer size={24} />,
    },

    {
      titulo: "Temp. Aire",
      valor: `${datos.hourly.temperature_2m[0].toFixed(1)} °C`,
      numero: datos.hourly.temperature_2m[0],
      tipo: "temperatura",
      icono: <Thermometer size={24} />,
    },

    {
      titulo: "Humedad",
      valor: `${datos.hourly.relative_humidity_2m[0].toFixed(0)} %`,
      numero: datos.hourly.relative_humidity_2m[0],
      tipo: "humedad",
      icono: <Droplets size={24} />,
    },

    {
      titulo: "Nubosidad",
      valor: `${datos.hourly.cloud_cover[0].toFixed(0)} %`,
      numero: datos.hourly.cloud_cover[0],
      tipo: "nubes",
      icono: <Cloud size={24} />,
    },

    {
      titulo: "Lluvia",
      valor: `${datos.hourly.precipitation[0].toFixed(1)} mm`,
      numero: datos.hourly.precipitation[0],
      tipo: "lluvia",
      icono: <CloudRain size={24} />,
    },

  ];

  return (

    <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl p-8">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold">

            Indicadores Oceanográficos

          </h2>

          <p className="text-blue-200 mt-1">

            Variables principales para la toma de decisiones.

          </p>

        </div>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">

        {indicadores.map((item) => (

          <div
            key={item.titulo}
            className="relative rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition-all duration-300 p-5"
          >

            <div
              className={`
                absolute
                top-3
                right-3
                w-3
                h-3
                rounded-full
                ${obtenerEstado(
                  item.tipo,
                  item.numero
                )}
              `}
            />

            <div className="text-cyan-300">

              {item.icono}

            </div>

            <p className="mt-4 text-sm text-blue-200">

              {item.titulo}

            </p>

            <h3 className="mt-2 text-2xl font-bold">

              {item.valor}

            </h3>

          </div>

        ))}

      </div>

    </div>

  );

}