import {
  Brain,
  CheckCircle2,
  AlertTriangle,
  Shield,
  Clock3,
  Waves,
} from "lucide-react";

import { Oceanografia } from "@/types/oceanografia";
import { PronosticoDia } from "@/lib/pronostico7Dias";

interface Props {
  datos: Oceanografia;
  pronostico: PronosticoDia;
}

export default function Consejos({
  datos,
  pronostico,
}: Props) {

  //-----------------------------------------

  const ola =
    datos.hourly.wave_height[0];

  const viento =
    datos.hourly.wind_speed_10m[0];

  const lluvia =
    datos.hourly.precipitation[0];

  //-----------------------------------------

  let color = "text-green-600";

  let riesgo = "Riesgo Bajo";

  if (pronostico.indice < 90)
    color = "text-blue-600";

  if (pronostico.indice < 75) {

    color = "text-yellow-500";

    riesgo = "Riesgo Moderado";

  }

  if (pronostico.indice < 60) {

    color = "text-red-600";

    riesgo = "Riesgo Alto";

  }

  //-----------------------------------------

  let mensaje =
    `El algoritmo clasificó este día como "${pronostico.estado}" con un índice de ${pronostico.indice}/100.`;

  if (lluvia > 0) {

    mensaje +=
      " Existe probabilidad de precipitaciones durante el período analizado.";

  }

  //-----------------------------------------

  return (

    <section>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Recomendaciones */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="flex items-center gap-3 mb-8">

            <Brain
              size={34}
              className="text-blue-700"
            />

            <div>

              <h2 className="text-3xl font-bold">

                Recomendaciones IA

              </h2>

              <p className="text-slate-500">

                Generadas automáticamente.

              </p>

            </div>

          </div>

          <div className="space-y-6">

            <div className="flex gap-4">

              <CheckCircle2 className={color} />

              <div>

                <h3 className="font-bold">

                  Estado General

                </h3>

                <p>

                  {pronostico.estado}

                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <Clock3 className="text-blue-700" />

              <div>

                <h3 className="font-bold">

                  Mejor Hora

                </h3>

                <p>

                  {pronostico.mejorHora}

                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <Waves className="text-cyan-600" />

              <div>

                <h3 className="font-bold">

                  Altura del Oleaje

                </h3>

                <p>

                  {ola.toFixed(1)} m

                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <AlertTriangle className="text-orange-500" />

              <div>

                <h3 className="font-bold">

                  Velocidad del Viento

                </h3>

                <p>

                  {viento.toFixed(1)} km/h

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Diagnóstico */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="flex items-center gap-3 mb-8">

            <Shield
              size={34}
              className="text-green-700"
            />

            <h2 className="text-3xl font-bold">

              Diagnóstico IA

            </h2>

          </div>

          <div className="space-y-6">

            <div className="flex gap-4">

              <AlertTriangle className={color} />

              <div>

                <h3 className="font-bold">

                  {riesgo}

                </h3>

                <p>

                  {mensaje}

                </p>

              </div>

            </div>

            <div>

              <h3 className="font-bold mb-3">

                Recomendación Operativa

              </h3>

              <p className="leading-8">

                Para el día seleccionado, el algoritmo recomienda
                priorizar las actividades alrededor de las

                <strong>

                  {" "}{pronostico.mejorHora}

                </strong>

                , momento en el cual se detectan las condiciones
                más favorables para la recolección de algas
                marinas en San Juan de Marcona.

              </p>

            </div>

            <div>

              <h3 className="font-bold mb-3">

                Variables Analizadas

              </h3>

              <p className="leading-8">

                El índice inteligente considera altura del oleaje,
                velocidad del viento, período del oleaje,
                precipitación, temperatura del aire y otras
                variables oceanográficas para generar la
                recomendación automática.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}