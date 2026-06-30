import { Oceanografia } from "@/types/oceanografia";

import {
  calcularIndiceRecoleccion,
  obtenerColor,
  obtenerEstado,
} from "@/lib/oceanografiaIA";

interface Props {
  datos: Oceanografia;
}

export default function TablaOceanografica({
  datos,
}: Props) {

  return (

    <section>

      <div className="bg-white rounded-3xl shadow-xl p-8">

        <h2 className="text-3xl font-bold">

          Centro de Inteligencia Oceanográfica

        </h2>

        <p className="text-slate-500 mt-2 mb-8">

          Evaluación horaria del día seleccionado mediante
          el algoritmo inteligente de recolección.

        </p>

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead>

              <tr className="border-b">

                <th className="py-4 text-left">

                  Hora

                </th>

                <th className="text-center">

                  Oleaje

                </th>

                <th className="text-center">

                  Viento

                </th>

                <th className="text-center">

                  Período

                </th>

                <th className="text-center">

                  Índice IA

                </th>

                <th className="text-center">

                  Estado

                </th>

              </tr>

            </thead>

            <tbody>

              {datos.hourly.time.map((hora, index) => {

                const ola =
                  datos.hourly.wave_height[index];

                const viento =
                  datos.hourly.wind_speed_10m[index];

                const periodo =
                  datos.hourly.wave_period[index];

                const lluvia =
                  datos.hourly.precipitation[index];

                const indice =
                  calcularIndiceRecoleccion(
                    ola,
                    viento,
                    periodo,
                    lluvia
                  );

                return (

                  <tr
                    key={hora}
                    className="border-b hover:bg-slate-50 transition"
                  >

                    <td className="py-4 font-medium">

                      {new Date(hora).toLocaleTimeString(
                        "es-PE",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}

                    </td>

                    <td className="text-center">

                      {ola.toFixed(1)} m

                    </td>

                    <td className="text-center">

                      {viento.toFixed(1)} km/h

                    </td>

                    <td className="text-center">

                      {periodo.toFixed(0)} s

                    </td>

                    <td>

                      <div className="flex items-center gap-3">

                        <div className="w-28 h-3 rounded-full bg-slate-200">

                          <div
                            className={`${obtenerColor(indice)} h-3 rounded-full transition-all`}
                            style={{
                              width: `${indice}%`,
                            }}
                          />

                        </div>

                        <span className="font-semibold">

                          {indice}

                        </span>

                      </div>

                    </td>

                    <td className="text-center">

                      <span
                        className={`${obtenerColor(indice)} px-3 py-1 rounded-full text-white font-medium`}
                      >

                        {obtenerEstado(indice)}

                      </span>

                    </td>

                  </tr>

                );

              })}

            </tbody>

          </table>

        </div>

      </div>

    </section>

  );

}