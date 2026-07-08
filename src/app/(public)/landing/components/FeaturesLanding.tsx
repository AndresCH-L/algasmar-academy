import {
  BookOpen,
  Waves,
  Library,
  ShoppingCart,
  PlayCircle,
  Newspaper,
  TrendingUp,
  User,
} from "lucide-react";

const modules = [
  {
    icon: BookOpen,
    color: "bg-blue-100 text-blue-700",
    title: "Cursos Virtuales",
    description:
      "Capacitación especializada mediante videos, evaluaciones y certificaciones digitales.",
  },
  {
    icon: Waves,
    color: "bg-cyan-100 text-cyan-700",
    title: "Centro Oceanográfico",
    description:
      "Consulta condiciones del mar y pronósticos inteligentes para planificar tus jornadas.",
  },
  {
    icon: Library,
    color: "bg-purple-100 text-purple-700",
    title: "Biblioteca Digital",
    description:
      "Accede a manuales, fichas técnicas, investigaciones y documentos especializados.",
  },
  {
    icon: ShoppingCart,
    color: "bg-orange-100 text-orange-700",
    title: "Marketplace",
    description:
      "Publica, promociona y comercializa productos derivados de algas marinas.",
  },
  {
    icon: PlayCircle,
    color: "bg-red-100 text-red-700",
    title: "Videoteca",
    description:
      "Aprende mediante contenido audiovisual desarrollado por especialistas.",
  },
  {
    icon: Newspaper,
    color: "bg-yellow-100 text-yellow-700",
    title: "Noticias",
    description:
      "Mantente informado sobre investigaciones, innovación y actualidad del sector.",
  },
  {
    icon: TrendingUp,
    color: "bg-green-100 text-green-700",
    title: "Ventas y Estadísticas",
    description:
      "Gestiona ventas y realiza seguimiento al crecimiento de tus productos.",
  },
  {
    icon: User,
    color: "bg-slate-100 text-slate-700",
    title: "Perfil Personal",
    description:
      "Consulta certificados, cursos completados y tu progreso de aprendizaje.",
  },
];

export default function FeaturesLanding() {

  return (

    <section
      id="nosotros"
      className="bg-slate-50 py-20"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block rounded-full bg-green-100 text-green-700 px-5 py-2 font-semibold">

            Todo en un solo lugar

          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">

            Mucho más que una plataforma educativa

          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">

            AlgasMar Academy integra capacitación,
            información técnica, inteligencia
            oceanográfica y herramientas comerciales
            para fortalecer el desarrollo de asociaciones,
            emprendedores y profesionales del sector algal.

          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {modules.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >

                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color}`}
                >

                  <Icon size={34} />

                </div>

                <h3 className="mt-7 text-2xl font-bold text-slate-900">

                  {item.title}

                </h3>

                <p className="mt-5 text-slate-600 leading-8">

                  {item.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );

}