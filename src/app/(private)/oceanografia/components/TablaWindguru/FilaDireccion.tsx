import { ReactNode } from "react";

import { obtenerFlecha } from "./direcciones";

interface Props {

  titulo: string;

  icono: ReactNode;

  grados: number[];

}

export default function FilaDireccion({
  titulo,
  icono,
  grados,
}: Props) {

  //----------------------------------------
  // Mostrar solamente cada 2 horas
  //----------------------------------------

  const valores = grados.filter(
    (_, index) => index % 2 === 0
  );

  //----------------------------------------

  return (

    <div
      className="grid border-b"
      style={{
        gridTemplateColumns:
          "190px repeat(84,56px)",
      }}
    >

      {/* Columna fija */}

      <div className="sticky left-0 z-20 flex items-center gap-3 bg-white border-r px-4 py-3 font-semibold shadow-sm">

        <div className="text-sky-700">

          {icono}

        </div>

        <span>

          {titulo}

        </span>

      </div>

      {/* Flechas */}

      {valores.map((direccion, index) => (

        <div
          key={index}
          className="
            border-r
            flex
            items-center
            justify-center
            h-12
            bg-sky-50
            hover:bg-sky-100
            transition-colors
          "
        >

          <span className="text-2xl">

            {obtenerFlecha(direccion)}

          </span>

        </div>

      ))}

    </div>

  );

}