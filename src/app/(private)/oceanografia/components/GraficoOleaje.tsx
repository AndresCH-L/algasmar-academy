"use client";

import { Oceanografia } from "@/types/oceanografia";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  ReferenceArea,
} from "recharts";

interface Props {
  datos: Oceanografia;
}

export default function GraficoOleaje({
  datos,
}: Props) {

  //----------------------------------------

  const grafico = datos.hourly.time.map((hora, index) => ({

    hora: new Date(hora).toLocaleTimeString(
      "es-PE",
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    ),

    ola:
      datos.hourly.wave_height[index],

    periodo:
      datos.hourly.wave_period[index],

    viento:
      datos.hourly.wind_speed_10m[index],

    temperatura:
      datos.hourly.temperature_2m[index],

  }));

  //----------------------------------------

  return (

    <section>

      <div className="bg-white rounded-3xl shadow-xl p-8">

        <h2 className="text-3xl font-bold">

          Evolución Oceanográfica

        </h2>

        <p className="text-slate-500 mt-2 mb-8">

          Comportamiento horario del día seleccionado.

        </p>

        <div className="h-[520px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <LineChart
              data={grafico}
              margin={{
                top: 20,
                right: 25,
                left: 10,
                bottom: 10,
              }}
            >

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="hora"
              />

              <YAxis />

              <Tooltip
                contentStyle={{
                  borderRadius: 14,
                  border: "none",
                  boxShadow:
                    "0 8px 24px rgba(0,0,0,.12)",
                }}
              />

              <Legend />

              <ReferenceArea
                y1={2.5}
                y2={10}
                fill="#ef4444"
                fillOpacity={0.08}
              />

              {/* OLEAJE */}

              <Line
                type="monotone"
                dataKey="ola"
                name="Oleaje (m)"
                stroke="#2563eb"
                strokeWidth={5}
                dot={false}
                activeDot={{
                  r: 6,
                }}
              />

              {/* PERIODO */}

              <Line
                type="monotone"
                dataKey="periodo"
                name="Período (s)"
                stroke="#7c3aed"
                strokeWidth={3}
                dot={false}
              />

              {/* VIENTO */}

              <Line
                type="monotone"
                dataKey="viento"
                name="Viento (km/h)"
                stroke="#059669"
                strokeWidth={2}
                dot={false}
              />

              {/* TEMPERATURA */}

              <Line
                type="monotone"
                dataKey="temperatura"
                name="Temperatura (°C)"
                stroke="#ea580c"
                strokeWidth={2}
                dot={false}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </section>

  );

}