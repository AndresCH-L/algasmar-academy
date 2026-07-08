import {
  Users,
  BookOpen,
  ShoppingCart,
  Library,
} from "lucide-react";

const stats = [

  {
    icon: Users,
    numero: "100+",
    titulo: "Usuarios Esperados",
    color: "bg-blue-100 text-blue-700",
  },

  {
    icon: BookOpen,
    numero: "3+",
    titulo: "Cursos Especializados",
    color: "bg-green-100 text-green-700",
  },

  {
    icon: ShoppingCart,
    numero: "3+",
    titulo: "Productos",
    color: "bg-orange-100 text-orange-700",
  },

  {
    icon: Library,
    numero: "3+",
    titulo: "Documentos Técnicos",
    color: "bg-purple-100 text-purple-700",
  },

];

export default function StatsLanding() {

  return (

    <section className="py-10 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.titulo}
                className="rounded-3xl bg-slate-50 p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
              >

                <div
                  className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto ${item.color}`}
                >

                  <Icon size={40}/>

                </div>

                <h2 className="mt-7 text-5xl font-black">

                  {item.numero}

                </h2>

                <p className="mt-3 text-slate-600">

                  {item.titulo}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );

}