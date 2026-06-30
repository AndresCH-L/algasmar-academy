"use client";

import {
  Waves,
  Wind,
  Thermometer,
  CloudRain,
  Cloud,
  Navigation,
  Gauge,
  Star,
} from "lucide-react";

import { Oceanografia } from "@/types/oceanografia";

import CabeceraDias from "./CabeceraDias";
import CabeceraHoras from "./CabeceraHoras";
import FilaWindguru from "./FilaWindguru";
import FilaDireccion from "./FilaDireccion";
import LeyendaWindguru from "./LeyendaWindguru";

import {
  colorOleaje,
  colorViento,
  colorPeriodo,
  colorTemperatura,
  colorNubes,
  colorLluvia,
} from "./colores";

interface Props {
  datos: Oceanografia;
}

export default function TablaWindguru({
  datos,
}: Props) {

  //----------------------------------------
  // Protección
  //----------------------------------------

  if (!datos.hourly.time.length) {

    return null;

  }

  //----------------------------------------
  // Calificación para recolección
  //----------------------------------------

  const recoleccion =
    datos.hourly.wave_height.map((ola, index) => {

      const viento =
        datos.hourly.wind_speed_10m[index];

      const periodo =
        datos.hourly.wave_period[index];

      const lluvia =
        datos.hourly.precipitation[index];

      let valor = 5;

      if (ola > 1.8)
        valor--;

      if (viento > 15)
        valor--;

      if (periodo < 14)
        valor--;

      if (lluvia > 0)
        valor--;

      return Math.max(1, valor);

    });

  //----------------------------------------

  const colorRecoleccion = (
    estrellas: number
  ) => {

    if (estrellas >= 5)
      return "bg-green-600 text-white";

    if (estrellas === 4)
      return "bg-lime-500";

    if (estrellas === 3)
      return "bg-yellow-300";

    if (estrellas === 2)
      return "bg-orange-500 text-white";

    return "bg-red-600 text-white";

  };

  //----------------------------------------

  return (

    <section>

      <div className="rounded-3xl bg-white shadow-2xl overflow-hidden">

        {/* CABECERA */}

        <div className="bg-gradient-to-r from-sky-900 via-blue-800 to-cyan-700 text-white px-8 py-6">

          <h2 className="text-3xl font-bold">

            Pronóstico Oceanográfico Tipo Windguru

          </h2>

          <p className="mt-2 text-blue-100">

            Información resumida cada 2 horas para facilitar la planificación
            de las jornadas de recolección.

          </p>

        </div>

        {/* TABLA */}

        <div className="overflow-auto">

          <div className="min-w-[4900px]">

            <CabeceraDias
              fechas={datos.hourly.time}
            />

            <CabeceraHoras
              horas={datos.hourly.time}
            />

            <FilaWindguru
              titulo="Oleaje (m)"
              icono={<Waves size={18}/>}
              valores={datos.hourly.wave_height}
              formatter={(v)=>v.toFixed(1)}
              getColor={colorOleaje}
            />

            <FilaDireccion
              titulo="Dir. Oleaje"
              icono={<Navigation size={18}/>}
              grados={datos.hourly.wave_direction}
            />

            <FilaWindguru
              titulo="Período (s)"
              icono={<Gauge size={18}/>}
              valores={datos.hourly.wave_period}
              formatter={(v)=>v.toFixed(0)}
              getColor={colorPeriodo}
            />

            <FilaWindguru
              titulo="Viento (km/h)"
              icono={<Wind size={18}/>}
              valores={datos.hourly.wind_speed_10m}
              formatter={(v)=>v.toFixed(0)}
              getColor={colorViento}
            />

            <FilaDireccion
              titulo="Dir. Viento"
              icono={<Navigation size={18}/>}
              grados={datos.hourly.wind_direction_10m}
            />

            <FilaWindguru
              titulo="Temp. Mar (°C)"
              icono={<Thermometer size={18}/>}
              valores={datos.hourly.sea_surface_temperature}
              formatter={(v)=>v.toFixed(1)}
              getColor={colorTemperatura}
            />

            <FilaWindguru
              titulo="Temp. Aire (°C)"
              icono={<Thermometer size={18}/>}
              valores={datos.hourly.temperature_2m}
              formatter={(v)=>v.toFixed(1)}
              getColor={colorTemperatura}
            />

            <FilaWindguru
              titulo="Nubosidad (%)"
              icono={<Cloud size={18}/>}
              valores={datos.hourly.cloud_cover}
              formatter={(v)=>`${v.toFixed(0)}%`}
              getColor={colorNubes}
            />

            <FilaWindguru
              titulo="Lluvia"
              icono={<CloudRain size={18}/>}
              valores={datos.hourly.precipitation}
              formatter={(v)=>v.toFixed(1)}
              getColor={colorLluvia}
            />

            {/* FILA RECOLECCIÓN */}

            <div
              className="grid border-b"
              style={{
                gridTemplateColumns:
                  "190px repeat(84,56px)",
              }}
            >

              <div className="sticky left-0 z-20 flex items-center gap-3 bg-white border-r px-4 py-3 font-semibold shadow-sm">

                <Star
                  size={18}
                  className="text-yellow-500"
                />

                Recolección

              </div>

              {recoleccion
                .filter((_,index)=>index%2===0)
                .map((valor,index)=>(

                <div
                  key={index}
                  className={`
                    ${colorRecoleccion(valor)}
                    border-r
                    h-12
                    flex
                    items-center
                    justify-center
                    text-lg
                  `}
                >

                  {"★".repeat(valor)}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

      <LeyendaWindguru/>

    </section>

  );

}