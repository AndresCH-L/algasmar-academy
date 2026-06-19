"use client";

import { useState } from "react";
import Image from "next/image";

import {
  Search,
  MapPin,
  Package,
  MessageCircle,
} from "lucide-react";

const productos = [
  {
    nombre: "Sargazo Seco en Bola",
    categoria: "Algas",
    precio: "S/ 1200",
    unidad: "tonelada",
    ubicacion: "Marcona - Ica",
    estado: "Disponible",
    imagen: "/images/marketplace/sargazo-seco-bola.jpg",
  },

  {
    nombre: "Abono Orgánico de Algas",
    categoria: "Abonos",
    precio: "S/ 65",
    unidad: "saco de 25 kg",
    ubicacion: "Marcona - Ica",
    estado: "Disponible",
    imagen: "/images/marketplace/abono-organico-algas.jpg",
  },

  {
    nombre: "Harina de Yuyo",
    categoria: "Harinas",
    precio: "S/ 4.50",
    unidad: "kg",
    ubicacion: "Marcona - Ica",
    estado: "Disponible",
    imagen: "/images/marketplace/harina-yuyo.jpg",
  },
];

export default function MarketplacePage() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda =
      producto.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todos" ||
      producto.categoria === categoria;

    return coincideBusqueda && coincideCategoria;
  });

  return (
    <main className="min-h-screen bg-slate-100">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-green-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <h1 className="text-4xl md:text-5xl font-bold">
            Marketplace
          </h1>

          <p className="mt-4 text-lg text-blue-100 max-w-4xl">
            Comercialización de productos derivados de algas marinas.
          </p>

        </div>

      </section>

      {/* FILTROS */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="mb-8">

          <h2 className="text-3xl font-bold text-slate-800">
            Productos Disponibles
          </h2>

          <p className="text-slate-500 mt-2">
            Explora productos derivados de algas marinas
            disponibles para comercialización.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 mb-10">

          <div className="grid md:grid-cols-2 gap-4">

            <div className="relative">

              <Search
                size={18}
                className="absolute left-4 top-4 text-slate-400"
              />

              <input
                type="text"
                placeholder="Buscar producto..."
                value={busqueda}
                onChange={(e) =>
                  setBusqueda(e.target.value)
                }
                className="w-full border rounded-xl pl-12 p-3"
              />

            </div>

            <select
              value={categoria}
              onChange={(e) =>
                setCategoria(e.target.value)
              }
              className="border rounded-xl p-3"
            >
              <option>Todos</option>
              <option>Algas</option>
              <option>Abonos</option>
              <option>Harinas</option>
            </select>

          </div>

        </div>

        {/* PRODUCTOS */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {productosFiltrados.map((producto, index) => {

            const mensaje = encodeURIComponent(
              `Hola, estoy interesado en el producto: ${producto.nombre}`
            );

            return (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="relative h-64">

                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {producto.estado}
                  </div>

                </div>

                <div className="p-6">

                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mb-4">
                    {producto.categoria}
                  </span>

                  <h2 className="text-2xl font-bold mb-3">
                    {producto.nombre}
                  </h2>

                  <p className="text-green-700 text-3xl font-bold">
                    {producto.precio}
                  </p>

                  <p className="text-slate-500 mb-5">
                    por {producto.unidad}
                  </p>

                  <div className="space-y-3 mb-6">

                    <div className="flex items-center gap-2 text-slate-600">

                      <MapPin size={16} />

                      <span>
                        {producto.ubicacion}
                      </span>

                    </div>

                    <div className="flex items-center gap-2 text-slate-600">

                      <Package size={16} />

                      <span>
                        Producto disponible
                      </span>

                    </div>

                  </div>

                  <a
                    href={`https://wa.me/51930136375?text=${mensaje}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium transition"
                  >

                    <MessageCircle size={18} />

                    Consultar por WhatsApp

                  </a>

                </div>

              </div>
            );
          })}

        </div>

      </section>

    </main>
  );
}