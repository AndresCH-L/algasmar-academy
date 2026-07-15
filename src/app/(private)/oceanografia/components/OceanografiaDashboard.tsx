"use client";

import { useMemo, useState } from "react";

import { Oceanografia } from "@/types/oceanografia";
import { generarPronostico7Dias } from "@/lib/pronostico7Dias";

import Hero from "./Hero";
import EstadoMar from "./EstadoMar";
import Indicadores from "./Indicadores";
import SelectorDias from "./SelectorDias";
import GraficoOleaje from "./GraficoOleaje";
import TablaWindguru from "./TablaWindguru/TablaWindguru";
import TablaOceanografica from "./TablaOceanografica";
import Consejos from "./Consejos";

interface Props {
  datos: Oceanografia;
}

export default function OceanografiaDashboard({
  datos,
}: Props) {

  //-----------------------------------------
  // Pronóstico de los 7 días
  //-----------------------------------------

  const dias = useMemo(
    () => generarPronostico7Dias(datos),
    [datos]
  );

  //-----------------------------------------
  // Día seleccionado
  //-----------------------------------------

  const [diaSeleccionado, setDiaSeleccionado] =
    useState(0);

  //-----------------------------------------

  if (!dias.length) {

    return null;

  }

  //-----------------------------------------

  const pronostico =
    dias[diaSeleccionado];

  //-----------------------------------------

  const inicio =
    diaSeleccionado * 24;

  const fin =
    inicio + 24;

  //-----------------------------------------
  // Datos únicamente del día seleccionado
  //-----------------------------------------

  const datosDia: Oceanografia = {

    hourly: {

      time:
        datos.hourly.time.slice(inicio, fin),

      wave_height:
        datos.hourly.wave_height.slice(inicio, fin),

      wave_direction:
        datos.hourly.wave_direction.slice(inicio, fin),

      wave_period:
        datos.hourly.wave_period.slice(inicio, fin),

      sea_surface_temperature:
        datos.hourly.sea_surface_temperature.slice(
          inicio,
          fin
        ),

      wind_speed_10m:
        datos.hourly.wind_speed_10m.slice(
          inicio,
          fin
        ),

      wind_direction_10m:
        datos.hourly.wind_direction_10m.slice(
          inicio,
          fin
        ),

      temperature_2m:
        datos.hourly.temperature_2m.slice(
          inicio,
          fin
        ),

      relative_humidity_2m:
        datos.hourly.relative_humidity_2m.slice(
          inicio,
          fin
        ),

      precipitation:
        datos.hourly.precipitation.slice(
          inicio,
          fin
        ),

      cloud_cover:
        datos.hourly.cloud_cover.slice(
          inicio,
          fin
        ),

    },

  };

  //-----------------------------------------

  return (

  <>

    <Hero
      datos={datosDia}
      pronostico={pronostico}
    />

    <section className="max-w-7xl mx-auto px-6 py-10 space-y-10">

      {/* TABLA PRINCIPAL TIPO WINDGURU */}

      <TablaWindguru
        datos={datos}
      />

      {/* SELECTOR DE DÍA */}

      <SelectorDias
        dias={dias}
        seleccionado={diaSeleccionado}
        onSeleccionar={setDiaSeleccionado}
      />

      {/* ESTADO GENERAL DEL DÍA */}

      <EstadoMar
        datos={datosDia}
        pronostico={pronostico}
      />

      {/* GRÁFICO DEL DÍA */}

      <GraficoOleaje
        datos={datosDia}
      />

      {/* TABLA DETALLADA DEL DÍA */}

      <TablaOceanografica
        datos={datosDia}
      />

      {/* RECOMENDACIONES */}

      <Consejos
        datos={datosDia}
        pronostico={pronostico}
      />

    </section>

  </>

);
}