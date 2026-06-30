import {
  Database,
  Globe,
  MapPin,
  RefreshCcw,
  Cpu,
  CheckCircle2,
} from "lucide-react";

export default function HeroFuente() {

  const items = [

    {
      titulo: "Fuente",
      valor: "Open-Meteo Marine",
      icono: <Database size={20} />,
    },

    {
      titulo: "Ubicación",
      valor: "San Juan de Marcona",
      icono: <MapPin size={20} />,
    },

    {
      titulo: "Actualización",
      valor: "Cada 30 minutos",
      icono: <RefreshCcw size={20} />,
    },

    {
      titulo: "Procesamiento",
      valor: "AlgasMar IA v1.0",
      icono: <Cpu size={20} />,
    },

    {
      titulo: "Estado API",
      valor: "Operativa",
      icono: <CheckCircle2 size={20} />,
    },

    {
      titulo: "Proveedor",
      valor: "Open-Meteo",
      icono: <Globe size={20} />,
    },

  ];

  return (

    <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6">

      <div className="grid md:grid-cols-3 xl:grid-cols-6 gap-5">

        {items.map((item) => (

          <div
            key={item.titulo}
            className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 hover:bg-white/10 transition"
          >

            <div className="w-11 h-11 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">

              {item.icono}

            </div>

            <div>

              <p className="text-xs uppercase tracking-wider text-blue-200">

                {item.titulo}

              </p>

              <p className="font-semibold mt-1">

                {item.valor}

              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}