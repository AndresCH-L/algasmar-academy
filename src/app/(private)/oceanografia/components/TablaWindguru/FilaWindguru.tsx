import { FilaWindguruProps } from "./types";

export default function FilaWindguru({
  titulo,
  icono,
  valores,
  formatter,
  getColor,
}: FilaWindguruProps) {

  return (

    <div
      className="grid border-b"
      style={{
        gridTemplateColumns:
          "190px repeat(auto-fit, minmax(56px, 1fr))",
      }}
    >

      {/* Primera columna fija */}

      <div className="sticky left-0 z-20 flex items-center gap-3 bg-white border-r px-4 py-3 font-semibold shadow-sm">

        <div className="text-sky-700">

          {icono}

        </div>

        <span>

          {titulo}

        </span>

      </div>

      {/* Valores */}

      {valores
  .filter((_, index) => index % 2 === 0)
  .map((valor, index) => (

        <div
          key={index}
          className={`
            ${getColor(valor)}
            border-r
            flex
            items-center
            justify-center
            h-12
            text-sm
            font-bold
            transition-all
            duration-200
            hover:scale-105
          `}
        >

          {formatter
            ? formatter(valor)
            : valor}

        </div>

      ))}

    </div>

  );

}