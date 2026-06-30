import {
  Waves,
  Wind,
  Thermometer,
  Gauge,
  Activity,
  TrendingUp,
} from "lucide-react";

import { Oceanografia } from "@/types/oceanografia";
import { calcularIndiceRecoleccion } from "@/lib/oceanografiaIA";

interface Props {
  datos: Oceanografia;
}

export default function Indicadores({
  datos,
}: Props) {

  //------------------------------------------

  const ola =
    datos.hourly.wave_height[0];

  const periodo =
    datos.hourly.wave_period[0];

  const direccion =
    datos.hourly.wave_direction[0];

  const viento =
    datos.hourly.wind_speed_10m[0];

  const temperatura =
    datos.hourly.temperature_2m[0];

  const temperaturaMar =
    datos.hourly.sea_surface_temperature[0];

  const humedad =
    datos.hourly.relative_humidity_2m[0];

  const lluvia =
    datos.hourly.precipitation[0];

  const nubes =
    datos.hourly.cloud_cover[0];

  //------------------------------------------

  const indice = calcularIndiceRecoleccion(
    ola,
    viento,
    periodo,
    lluvia
  );

  //------------------------------------------

  const indicadores = [

    {
      titulo: "Altura de Ola",
      valor: `${ola.toFixed(1)} m`,
      descripcion: "Altura significativa del oleaje.",
      color: "bg-blue-600",
      icono: <Waves size={34} />,
    },

    {
      titulo: "Dirección del Oleaje",
      valor: `${direccion.toFixed(0)}°`,
      descripcion: "Dirección predominante del oleaje.",
      color: "bg-cyan-600",
      icono: <Wind size={34} />,
    },

    {
      titulo: "Período del Oleaje",
      valor: `${periodo.toFixed(0)} s`,
      descripcion: "Tiempo promedio entre olas.",
      color: "bg-emerald-600",
      icono: <Gauge size={34} />,
    },

    {
      titulo: "Velocidad del Viento",
      valor: `${viento.toFixed(1)} km/h`,
      descripcion: "Velocidad del viento a 10 metros.",
      color: "bg-indigo-600",
      icono: <Wind size={34} />,
    },

    {
      titulo: "Temperatura del Mar",
      valor: `${temperaturaMar.toFixed(1)} °C`,
      descripcion: "Temperatura superficial del océano.",
      color: "bg-orange-600",
      icono: <Thermometer size={34} />,
    },

    {
      titulo: "Temperatura Ambiente",
      valor: `${temperatura.toFixed(1)} °C`,
      descripcion: "Temperatura del aire.",
      color: "bg-red-500",
      icono: <Thermometer size={34} />,
    },

    {
      titulo: "Humedad Relativa",
      valor: `${humedad.toFixed(0)}%`,
      descripcion: "Humedad relativa del ambiente.",
      color: "bg-sky-600",
      icono: <Activity size={34} />,
    },

    {
      titulo: "Precipitación",
      valor: `${lluvia.toFixed(1)} mm`,
      descripcion: "Lluvia esperada.",
      color: "bg-blue-500",
      icono: <Activity size={34} />,
    },

    {
      titulo: "Índice IA de Recolección",
      valor: `${indice}/100`,
      descripcion: "Calculado automáticamente mediante IA.",
      color: "bg-green-600",
      icono: <TrendingUp size={34} />,
    },

    {
      titulo: "Cobertura Nubosa",
      valor: `${nubes.toFixed(0)}%`,
      descripcion: "Porcentaje estimado de nubosidad.",
      color: "bg-slate-600",
      icono: <Activity size={34} />,
    },

  ];

  //------------------------------------------

  return (

    <section>

      <div className="mb-8">

        <h2 className="text-3xl font-bold">

          Indicadores Oceanográficos

        </h2>

        <p className="mt-2 text-slate-500">

          Información obtenida automáticamente desde Open-Meteo Marine y Open-Meteo Weather.

        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {indicadores.map((item) => (

          <div
            key={item.titulo}
            className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:shadow-2xl"
          >

            <div className={`${item.color} h-2`} />

            <div className="p-8">

              <div className="flex justify-between">

                <div>

                  <p className="text-slate-500">

                    {item.titulo}

                  </p>

                  <h3 className="mt-3 text-4xl font-bold">

                    {item.valor}

                  </h3>

                </div>

                <div
                  className={`${item.color} flex h-16 w-16 items-center justify-center rounded-2xl text-white`}
                >

                  {item.icono}

                </div>

              </div>

              <div className="mt-8">

                <div className="h-2 rounded-full bg-slate-200">

                  <div
                    className={`${item.color} h-2 rounded-full`}
                    style={{
                      width: "90%",
                    }}
                  />

                </div>

              </div>

              <p className="mt-6 leading-7 text-slate-600">

                {item.descripcion}

              </p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}