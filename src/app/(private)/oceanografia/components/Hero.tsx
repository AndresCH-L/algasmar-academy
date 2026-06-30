import { Oceanografia } from "@/types/oceanografia";
import { PronosticoDia } from "@/lib/pronostico7Dias";

import HeroHeader from "./HeroHeader";
import HeroEstado from "./HeroEstado";
import HeroIndicadores from "./HeroIndicadores";
import HeroFuente from "./HeroFuente";

interface Props {
  datos: Oceanografia;
  pronostico: PronosticoDia;
}

export default function Hero({
  datos,
  pronostico,
}: Props) {

  return (

    <section className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-blue-900 to-cyan-800 text-white">

      {/* Fondo */}

      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-14 space-y-8">

        {/* Header */}

        <HeroHeader
          datos={datos}
        />

        {/* Estado */}

        <HeroEstado
          pronostico={pronostico}
        />

        {/* Métricas */}

        <HeroIndicadores
          datos={datos}
        />

        {/* Fuente */}

        <HeroFuente />

      </div>

    </section>

  );

}