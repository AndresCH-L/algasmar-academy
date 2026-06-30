"use client";

import { PronosticoDia } from "@/lib/pronostico7Dias";

interface Props {

  dias: PronosticoDia[];

  seleccionado: number;

  onSeleccionar: (dia: number) => void;

}

export default function SelectorDias({

  dias,

  seleccionado,

  onSeleccionar,

}: Props) {

  return (

    <section>

      <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-5">

        {dias.map((dia, index) => (

          <button

            key={index}

            onClick={() => onSeleccionar(index)}

            className={`rounded-3xl shadow-lg p-6 transition-all duration-300 border-2

            ${

              seleccionado === index

                ? "border-blue-700 bg-blue-700 text-white scale-105"

                : "border-transparent bg-white hover:scale-105"

            }

            `}

          >

            <h3 className="font-bold text-lg capitalize">

              {dia.fecha}

            </h3>

            <p className="mt-5 text-5xl font-bold">

              {dia.indice}

            </p>

            <p className="mt-2">

              {dia.estado}

            </p>

            <div className="mt-6">

              <p className="text-sm opacity-80">

                Mejor hora

              </p>

              <p className="font-semibold">

                {dia.mejorHora}

              </p>

            </div>

          </button>

        ))}

      </div>

    </section>

  );

}