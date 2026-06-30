import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Clock3,
  Waves,
  Wind,
  Thermometer,
  Gauge,
  Cloud,
  CloudRain,
} from "lucide-react";

import { Oceanografia } from "@/types/oceanografia";
import { PronosticoDia } from "@/lib/pronostico7Dias";

interface Props {
  datos: Oceanografia;
  pronostico: PronosticoDia;
}

export default function EstadoMar({
  datos,
  pronostico,
}: Props) {

  let color = "";
  let Icono = CheckCircle2;


  
  if (pronostico.indice >= 90) {

    color = "bg-green-600";
    Icono = CheckCircle2;

  } else if (pronostico.indice >= 75) {

    color = "bg-blue-600";
    Icono = CheckCircle2;

  } else if (pronostico.indice >= 60) {

    color = "bg-yellow-500";
    Icono = AlertTriangle;

  } else {

    color = "bg-red-600";
    Icono = XCircle;

  }

  const metricas = [

  {
    titulo: "Altura del Oleaje",
    valor: `${datos.hourly.wave_height[0].toFixed(1)} m`,
    descripcion: "Altura significativa del oleaje.",
    icono: <Waves />,
  },

  {
    titulo: "Período del Oleaje",
    valor: `${datos.hourly.wave_period[0].toFixed(0)} s`,
    descripcion: "Tiempo promedio entre olas.",
    icono: <Gauge />,
  },

  {
    titulo: "Velocidad del Viento",
    valor: `${datos.hourly.wind_speed_10m[0].toFixed(1)} km/h`,
    descripcion: "Velocidad del viento a 10 metros.",
    icono: <Wind />,
  },

  {
    titulo: "Temperatura Ambiente",
    valor: `${datos.hourly.temperature_2m[0].toFixed(1)} °C`,
    descripcion: "Temperatura del aire.",
    icono: <Thermometer />,
  },

  {
    titulo: "Temperatura del Mar",
    valor: `${datos.hourly.sea_surface_temperature[0].toFixed(1)} °C`,
    descripcion: "Temperatura superficial del océano.",
    icono: <Thermometer />,
  },

  {
    titulo: "Humedad Relativa",
    valor: `${datos.hourly.relative_humidity_2m[0].toFixed(0)} %`,
    descripcion: "Cantidad de humedad presente en el aire.",
    icono: <CloudRain />,
  },

  {
    titulo: "Cobertura Nubosa",
    valor: `${datos.hourly.cloud_cover[0].toFixed(0)} %`,
    descripcion: "Porcentaje del cielo cubierto por nubes.",
    icono: <Cloud />,
  },

  {
    titulo: "Precipitación",
    valor: `${datos.hourly.precipitation[0].toFixed(1)} mm`,
    descripcion: "Lluvia prevista durante la hora analizada.",
    icono: <CloudRain />,
  },

];

  return (

    <section>

      <div className={`${color} rounded-3xl shadow-xl text-white p-10`}>

        <div className="flex items-center gap-6">

          <Icono size={72} />

          <div>

            <h2 className="text-4xl font-bold">

              Estado General del Día

            </h2>

            <h3 className="mt-2 text-3xl font-semibold">

              {pronostico.estado}

            </h3>

            <p className="mt-5 text-lg leading-8 max-w-5xl">

              Este resumen ha sido generado automáticamente
              utilizando el algoritmo de AlgasMar Academy,
              considerando el comportamiento del oleaje,
              velocidad del viento, período del oleaje,
              precipitación y temperatura para determinar
              la conveniencia de realizar actividades de
              recolección de algas marinas.

            </p>

          </div>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10">

          <div className="bg-white/15 rounded-2xl p-5">

            <div className="flex items-center gap-3">

              <Gauge />

              <p className="font-semibold">

                Índice IA

              </p>

            </div>

            <p className="mt-3 text-4xl font-bold">

              {pronostico.indice}/100

            </p>

          </div>

          <div className="bg-white/15 rounded-2xl p-5">

            <div className="flex items-center gap-3">

              <Clock3 />

              <p className="font-semibold">

                Mejor Hora

              </p>

            </div>

            <p className="mt-3 text-4xl font-bold">

              {pronostico.mejorHora}

            </p>

          </div>

          <div className="bg-white/15 rounded-2xl p-5">

            <div className="flex items-center gap-3">

              <AlertTriangle />

              <p className="font-semibold">

                Nivel

              </p>

            </div>

            <p className="mt-3 text-4xl font-bold">

              {pronostico.estado}

            </p>

          </div>

        </div>
<div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6 mt-10">

  {metricas.map((item) => (

    <div
      key={item.titulo}
      className="
        bg-white/10
        rounded-2xl
        p-5
        border
        border-white/10
        hover:bg-white/15
        transition-all
        duration-300
      "
    >

      <div className="flex items-center justify-between">

        <p className="font-semibold">

          {item.titulo}

        </p>

        {item.icono}

      </div>

      <p className="mt-4 text-3xl font-bold">

        {item.valor}

      </p>

      <p className="mt-5 text-sm leading-6 text-white/80">

        {item.descripcion}

      </p>

    </div>

  ))}

</div>

        <div className="mt-10 rounded-2xl bg-white/10 p-6">

          <h3 className="text-2xl font-bold">

            Recomendación del Sistema

          </h3>

          <p className="mt-5 text-lg leading-8">

            Para el día seleccionado se obtuvo un índice de

            <strong>

              {" "}{pronostico.indice}/100

            </strong>

            , clasificando las condiciones del mar como

            <strong>

              {" "}{pronostico.estado}

            </strong>

            .

          </p>

          <p className="mt-5 text-lg leading-8">

            El mejor momento estimado para iniciar labores
            de recolección se presenta alrededor de las

            <strong>

              {" "}{pronostico.mejorHora}

            </strong>

            , donde el algoritmo detectó la combinación más
            favorable entre oleaje y condiciones
            meteorológicas.

          </p>

        </div>

      </div>

    </section>

  );

}