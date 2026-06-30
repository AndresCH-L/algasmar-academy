interface Props {
  horas: string[];
}

export default function CabeceraHoras({
  horas,
}: Props) {

  const horasMostrar = horas.filter(
    (_, index) => index % 2 === 0
  );

  return (

    <div
      className="grid border-b"
      style={{
        gridTemplateColumns:
          "190px repeat(84, 56px)",
      }}
    >

      <div className="sticky left-0 z-20 bg-slate-100 border-r px-4 py-3 font-semibold">

        Hora

      </div>

      {horasMostrar.map((hora) => (

        <div
          key={hora}
          className="border-r text-center py-2 text-sm font-semibold bg-white"
        >

          {new Date(hora).toLocaleTimeString(
            "es-PE",
            {
              hour: "2-digit",
              minute: "2-digit",
            }
          )}

        </div>

      ))}

    </div>

  );

}