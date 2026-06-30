import { Oceanografia } from "@/types/oceanografia";

export function calcularIndiceRecoleccion(
  ola: number,
  viento: number,
  periodo: number,
  lluvia = 0
) {

  let indice = 100;

  if (ola > 1.5)
    indice -= (ola - 1.5) * 18;

  if (viento > 15)
    indice -= (viento - 15) * 2;

  if (periodo < 10)
    indice -= (10 - periodo) * 4;

  if (lluvia > 0)
    indice -= 10;

  indice = Math.max(
    0,
    Math.min(100, Math.round(indice))
  );

  return indice;

}

export function obtenerEstado(indice: number) {

  if (indice >= 90)
    return "Excelente";

  if (indice >= 75)
    return "Bueno";

  if (indice >= 60)
    return "Regular";

  return "No recomendable";

}

export function obtenerColor(indice: number) {

  if (indice >= 90)
    return "bg-green-600";

  if (indice >= 75)
    return "bg-blue-600";

  if (indice >= 60)
    return "bg-yellow-500";

  return "bg-red-600";

}

export function procesarOceanografia(
  datos: Oceanografia
) {

  const ola =
    datos.hourly.wave_height[0];

  const viento =
    datos.hourly.wind_speed_10m[0];

  const periodo =
    datos.hourly.wave_period[0];

  const lluvia =
    datos.hourly.precipitation[0];

  const indice =
    calcularIndiceRecoleccion(
      ola,
      viento,
      periodo,
      lluvia
    );

  return {

    indice,

    estado:
      obtenerEstado(indice),

    riesgo:

      indice >= 90

        ? "Muy Bajo"

        : indice >= 75

        ? "Bajo"

        : indice >= 60

        ? "Moderado"

        : "Alto",

    recomendacion:

      indice >= 90

        ? "Excelente momento para iniciar la recolección."

        : indice >= 75

        ? "Las condiciones son favorables."

        : indice >= 60

        ? "Trabajar únicamente con personal experimentado."

        : "No se recomienda realizar actividades.",

  };

}