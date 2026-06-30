interface Props {
  fechas: string[];
}

export default function CabeceraDias({
  fechas,
}: Props) {

  const dias: string[] = [];

  for (let i = 0; i < fechas.length; i += 24) {

    dias.push(fechas[i]);

  }

  return (

    <div
      className="grid border-b bg-slate-900 text-white"
      style={{
        gridTemplateColumns:
          "190px repeat(84, 56px)",
      }}
    >

      {/* Esquina */}

      <div className="sticky left-0 z-30 flex items-center px-4 font-bold border-r border-slate-700 bg-slate-900">

        Variables

      </div>

      {dias.map((fecha) => (

        <div
          key={fecha}
          className="col-span-12 border-r border-slate-700 py-3 text-center"
        >

          <p className="font-bold uppercase">

            {new Date(fecha).toLocaleDateString(
              "es-PE",
              {
                weekday: "long",
              }
            )}

          </p>

          <p className="text-sm text-slate-300 mt-1">

            {new Date(fecha).toLocaleDateString(
              "es-PE",
              {
                day: "numeric",
                month: "long",
              }
            )}

          </p>

        </div>

      ))}

    </div>

  );

}