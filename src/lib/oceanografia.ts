import { API, MARCONA } from "./config";

export async function obtenerDatosOceanograficos() {

  const marineURL =
    `${API.MARINE}` +
    `?latitude=${MARCONA.latitude}` +
    `&longitude=${MARCONA.longitude}` +
    `&hourly=` +
    [
      "wave_height",
      "wave_direction",
      "wave_period",
      "sea_surface_temperature",
    ].join(",");

  const weatherURL =
    `${API.WEATHER}` +
    `?latitude=${MARCONA.latitude}` +
    `&longitude=${MARCONA.longitude}` +
    `&hourly=` +
    [
      "wind_speed_10m",
      "wind_direction_10m",
      "temperature_2m",
      "relative_humidity_2m",
      "precipitation",
      "cloud_cover",
    ].join(",");

  const [marineRes, weatherRes] = await Promise.all([

    fetch(marineURL, {
      next: {
        revalidate: 1800,
      },
    }),

    fetch(weatherURL, {
      next: {
        revalidate: 1800,
      },
    }),

  ]);

  if (!marineRes.ok || !weatherRes.ok) {

    throw new Error(
      "No fue posible obtener los datos oceanográficos."
    );

  }

  const marine = await marineRes.json();

  const weather = await weatherRes.json();

  return {

    hourly: {

      time: marine.hourly.time,

      wave_height:
        marine.hourly.wave_height,

      wave_direction:
        marine.hourly.wave_direction,

      wave_period:
        marine.hourly.wave_period,

      sea_surface_temperature:
        marine.hourly.sea_surface_temperature,

      wind_speed_10m:
        weather.hourly.wind_speed_10m,

      wind_direction_10m:
        weather.hourly.wind_direction_10m,

      temperature_2m:
        weather.hourly.temperature_2m,

      relative_humidity_2m:
        weather.hourly.relative_humidity_2m,

      precipitation:
        weather.hourly.precipitation,

      cloud_cover:
        weather.hourly.cloud_cover,

    },

  };

}