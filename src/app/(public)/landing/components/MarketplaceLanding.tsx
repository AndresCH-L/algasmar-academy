import Image from "next/image";
import Link from "next/link";

import {
  ShoppingCart,
  ArrowRight,
  Star,
} from "lucide-react";

const productos = [
  {
    nombre: "Harina de Yuyo",

    descripcion:
      "Harina elaborada a partir de algas marinas, ideal para alimentación animal y procesos industriales.",

    precio: "S/. 4.50 / kg",

    imagen: "/images/marketplace/harina-yuyo.jpg",

    destacado: true,
  },

  {
    nombre: "Abono Orgánico de Algas",

    descripcion:
      "Biofertilizante natural rico en nutrientes para mejorar el desarrollo de los cultivos.",

    precio: "S/. 65.00",

    imagen: "/images/marketplace/abono-organico-algas.jpg",

    destacado: false,
  },

  {
    nombre: "Sargazo Seco en Bola",

    descripcion:
      "Materia prima seleccionada para procesos industriales y elaboración de nuevos productos.",

    precio: "S/. 1,200 / tonelada",

    imagen: "/images/marketplace/sargazo-seco-bola2.jpg",

    destacado: false,
  },
];

export default function MarketplaceLanding() {
  return (
    <section
      id="marketplace"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-flex rounded-full bg-orange-100 text-orange-700 px-5 py-2 font-semibold">
            Marketplace
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Comercializa productos derivados de algas marinas
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            Promociona tus productos, encuentra nuevos compradores y genera
            mayores oportunidades comerciales desde una única plataforma.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {productos.map((producto) => (

            <div
              key={producto.nombre}
              className="bg-slate-50 rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="relative h-72">

                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                />

                {producto.destacado && (
                  <div className="absolute top-5 left-5 bg-yellow-400 text-slate-900 rounded-full px-4 py-2 flex items-center gap-2 font-semibold">
                    <Star size={18} />
                    Destacado
                  </div>
                )}

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {producto.nombre}
                </h3>

                <p className="mt-5 text-slate-600 leading-8">
                  {producto.descripcion}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-500">
                      Precio referencial
                    </p>

                    <p className="text-3xl font-bold text-green-700">
                      {producto.precio}
                    </p>

                  </div>

                  <ShoppingCart
                    size={36}
                    className="text-orange-600"
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="text-center mt-16">

          <Link
            href="/registro"
            className="inline-flex items-center gap-3 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-bold transition"
          >
            Explorar Marketplace
            <ArrowRight size={22} />
          </Link>

        </div>

      </div>
    </section>
  );
}