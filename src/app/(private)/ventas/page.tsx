import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
  Package,
} from "lucide-react";

const ventas = [
  {
    fecha: "12/06/2026",
    producto: "Sargazo Seco en Bola",
    cantidad: "5 toneladas",
    monto: "S/ 6,000",
  },
  {
    fecha: "14/06/2026",
    producto: "Abono Orgánico",
    cantidad: "20 sacos",
    monto: "S/ 1,300",
  },
  {
    fecha: "15/06/2026",
    producto: "Harina de Yuyo",
    cantidad: "150 kg",
    monto: "S/ 675",
  },
];

export default function VentasPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-green-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <h1 className="text-4xl md:text-5xl font-bold">
            Panel de Ventas
          </h1>

          <p className="mt-4 text-blue-100 text-lg">
            Seguimiento de comercialización de productos derivados
            de algas marinas.
          </p>

        </div>

      </section>

      {/* INDICADORES */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-500">
                  Ventas Totales
                </p>

                <h2 className="text-4xl font-bold text-green-600 mt-2">
                  S/ 125,400
                </h2>

              </div>

              <DollarSign
                size={40}
                className="text-green-600"
              />

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-500">
                  Productos Vendidos
                </p>

                <h2 className="text-4xl font-bold text-blue-700 mt-2">
                  82
                </h2>

              </div>

              <ShoppingCart
                size={40}
                className="text-blue-700"
              />

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-500">
                  Toneladas Comercializadas
                </p>

                <h2 className="text-4xl font-bold text-orange-600 mt-2">
                  104 t
                </h2>

              </div>

              <Package
                size={40}
                className="text-orange-600"
              />

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-500">
                  Clientes Atendidos
                </p>

                <h2 className="text-4xl font-bold text-purple-700 mt-2">
                  24
                </h2>

              </div>

              <Users
                size={40}
                className="text-purple-700"
              />

            </div>

          </div>

        </div>

      </section>

      {/* RESUMEN */}

      <section className="max-w-7xl mx-auto px-6 pb-10">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex items-center gap-3 mb-6">

            <TrendingUp
              size={28}
              className="text-green-600"
            />

            <h2 className="text-2xl font-bold">
              Resumen Comercial
            </h2>

          </div>

          <div className="space-y-4">

            <div>

              <div className="flex justify-between mb-2">

                <span>Sargazo Seco</span>

                <span>80%</span>

              </div>

              <div className="bg-slate-200 h-3 rounded-full">

                <div className="bg-blue-700 h-3 rounded-full w-[80%]" />

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Abono Orgánico</span>

                <span>15%</span>

              </div>

              <div className="bg-slate-200 h-3 rounded-full">

                <div className="bg-green-600 h-3 rounded-full w-[15%]" />

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Harina de Yuyo</span>

                <span>5%</span>

              </div>

              <div className="bg-slate-200 h-3 rounded-full">

                <div className="bg-orange-500 h-3 rounded-full w-[5%]" />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TABLA */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">
              Últimas Ventas Registradas
            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-50">

                <tr>

                  <th className="text-left p-4">
                    Fecha
                  </th>

                  <th className="text-left p-4">
                    Producto
                  </th>

                  <th className="text-left p-4">
                    Cantidad
                  </th>

                  <th className="text-left p-4">
                    Monto
                  </th>

                </tr>

              </thead>

              <tbody>

                {ventas.map((venta, index) => (

                  <tr
                    key={index}
                    className="border-t"
                  >

                    <td className="p-4">
                      {venta.fecha}
                    </td>

                    <td className="p-4">
                      {venta.producto}
                    </td>

                    <td className="p-4">
                      {venta.cantidad}
                    </td>

                    <td className="p-4 font-semibold text-green-700">
                      {venta.monto}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

    </main>
  );
}