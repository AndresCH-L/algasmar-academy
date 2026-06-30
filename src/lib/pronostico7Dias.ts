import { Oceanografia } from "@/types/oceanografia";
import {
  calcularIndiceRecoleccion,
  obtenerEstado,
  obtenerColor,
} from "./oceanografiaIA";

export interface HoraPronosticada {

  hora: string;

  ola: number;

  viento: number;

  periodo: number;

  temperatura: number;

  indice: number;

}

export interface PronosticoDia {

  fecha: string;

  indice: number;

  estado: string;

  color: string;

  riesgo: string;

  recomendacion: string;

  mejorHora: string;

  mejorVentana: string;

  mejorIndice: number;

  olaPromedio: number;

  vientoPromedio: number;

  temperaturaPromedio: number;

  horas: HoraPronosticada[];

}

export function generarPronostico7Dias(
  datos: Oceanografia
): PronosticoDia[] {

  const dias: PronosticoDia[] = [];

  for (let d = 0; d < 7; d++) {

    const inicio = d * 24;
    const fin = inicio + 24;

    const horas: HoraPronosticada[] = [];

    let sumaIndice = 0;
    let sumaOla = 0;
    let sumaViento = 0;
    let sumaTemperatura = 0;

    let mejorIndice = -1;
    let mejorHora = "";

    for (let i = inicio; i < fin; i++) {

      const ola = datos.hourly.wave_height[i];
      const viento = datos.hourly.wind_speed_10m[i];
      const periodo = datos.hourly.wave_period[i];
      const temperatura = datos.hourly.temperature_2m[i];
      const lluvia = datos.hourly.precipitation[i];

      const indice =
        calcularIndiceRecoleccion(
          ola,
          viento,
          periodo,
          lluvia
        );

      sumaIndice += indice;
      sumaOla += ola;
      sumaViento += viento;
      sumaTemperatura += temperatura;

      if (indice > mejorIndice) {

        mejorIndice = indice;

        mejorHora = new Date(
          datos.hourly.time[i]
        ).toLocaleTimeString("es-PE", {
          hour: "2-digit",
          minute: "2-digit",
        });

      }

      horas.push({

        hora: new Date(
          datos.hourly.time[i]
        ).toLocaleTimeString("es-PE", {
          hour: "2-digit",
          minute: "2-digit",
        }),

        ola,

        viento,

        periodo,

        temperatura,

        indice,

      });

    }

    const indice =
      Math.round(sumaIndice / 24);

    const estado =
      obtenerEstado(indice);

    const color =
      obtenerColor(indice);

    let riesgo = "";

    if (indice >= 90)
      riesgo = "Muy Bajo";

    else if (indice >= 75)
      riesgo = "Bajo";

    else if (indice >= 60)
      riesgo = "Moderado";

    else
      riesgo = "Alto";

    let recomendacion = "";

    if (indice >= 90)

      recomendacion =
        "Excelente jornada para realizar actividades de recolección.";

    else if (indice >= 75)

      recomendacion =
        "Las condiciones son favorables. Mantener vigilancia del oleaje.";

    else if (indice >= 60)

      recomendacion =
        "Solo se recomienda trabajar con personal experimentado.";

    else

      recomendacion =
        "No se recomienda realizar labores de recolección durante este día.";

    dias.push({

      fecha: new Date(
        datos.hourly.time[inicio]
      ).toLocaleDateString("es-PE", {

        weekday: "long",

        day: "numeric",

        month: "long",

      }),

      indice,

      estado,

      color,

      riesgo,

      recomendacion,

      mejorHora,

      mejorVentana:
        `${mejorHora} - ${(
          Number(mejorHora.split(":")[0]) + 3
        )
          .toString()
          .padStart(2, "0")}:00`,

      mejorIndice,

      olaPromedio:
        Number((sumaOla / 24).toFixed(2)),

      vientoPromedio:
        Number((sumaViento / 24).toFixed(1)),

      temperaturaPromedio:
        Number((sumaTemperatura / 24).toFixed(1)),

      horas,

    });

  }

  return dias;

}