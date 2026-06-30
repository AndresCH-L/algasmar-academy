interface Item {

  color: string;

  titulo: string;

}

interface Props {

  titulo: string;

  items: Item[];

}

function TarjetaLeyenda({
  titulo,
  items,
}: Props) {

  return (

    <div className="rounded-2xl bg-white shadow border p-5">

      <h3 className="font-bold text-lg mb-4">

        {titulo}

      </h3>

      <div className="space-y-3">

        {items.map((item) => (

          <div
            key={item.titulo}
            className="flex items-center gap-3"
          >

            <div
              className={`w-5 h-5 rounded ${item.color}`}
            />

            <span className="text-sm">

              {item.titulo}

            </span>

          </div>

        ))}

      </div>

    </div>

  );

}

export default function LeyendaWindguru() {

  return (

    <section className="mt-8">

      <h2 className="text-2xl font-bold mb-6">

        Interpretación de Variables

      </h2>

      <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">

        <TarjetaLeyenda
          titulo="🌊 Oleaje"
          items={[
            {
              color: "bg-blue-900",
              titulo: "< 0.8 m Excelente",
            },
            {
              color: "bg-blue-700",
              titulo: "0.8 - 1.2 m",
            },
            {
              color: "bg-cyan-500",
              titulo: "1.2 - 1.6 m",
            },
            {
              color: "bg-green-500",
              titulo: "1.6 - 2.0 m",
            },
            {
              color: "bg-yellow-300",
              titulo: "2.0 - 2.5 m",
            },
            {
              color: "bg-orange-500",
              titulo: "2.5 - 3.0 m",
            },
            {
              color: "bg-red-600",
              titulo: "> 3.0 m",
            },
          ]}
        />

        <TarjetaLeyenda
          titulo="🌬 Viento"
          items={[
            {
              color: "bg-green-600",
              titulo: "< 8 km/h",
            },
            {
              color: "bg-lime-500",
              titulo: "8 - 12 km/h",
            },
            {
              color: "bg-yellow-300",
              titulo: "12 - 18 km/h",
            },
            {
              color: "bg-orange-500",
              titulo: "18 - 24 km/h",
            },
            {
              color: "bg-red-600",
              titulo: "> 24 km/h",
            },
          ]}
        />

        <TarjetaLeyenda
          titulo="🌊 Período"
          items={[
            {
              color: "bg-green-700",
              titulo: "18 s o más",
            },
            {
              color: "bg-green-500",
              titulo: "16 - 18 s",
            },
            {
              color: "bg-lime-500",
              titulo: "14 - 16 s",
            },
            {
              color: "bg-yellow-300",
              titulo: "12 - 14 s",
            },
            {
              color: "bg-red-600",
              titulo: "< 12 s",
            },
          ]}
        />

        <TarjetaLeyenda
          titulo="⭐ Recolección"
          items={[
            {
              color: "bg-green-600",
              titulo: "Excelente",
            },
            {
              color: "bg-lime-500",
              titulo: "Muy Buena",
            },
            {
              color: "bg-yellow-300",
              titulo: "Buena",
            },
            {
              color: "bg-orange-500",
              titulo: "Regular",
            },
            {
              color: "bg-red-600",
              titulo: "No recomendable",
            },
          ]}
        />

      </div>

      <div className="mt-8 rounded-2xl border bg-blue-50 border-blue-200 p-6">

        <h3 className="font-bold text-blue-900 text-lg">

          Recomendación

        </h3>

        <p className="mt-3 text-slate-700 leading-8">

          La decisión de iniciar la recolección debe
          basarse principalmente en la altura del
          oleaje. Como variables complementarias se
          consideran la velocidad del viento, el
          período del oleaje y la presencia de
          precipitaciones. Se recomienda revisar la
          evolución de las condiciones durante varios
          días antes de planificar una jornada de
          trabajo.

        </p>

      </div>

    </section>

  );

}