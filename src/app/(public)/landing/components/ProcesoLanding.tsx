import {
  Fish,
  BookOpen,
  Library,
  Factory,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    numero: "01",
    icon: Fish,
    color: "bg-cyan-100 text-cyan-700",
    title: "Recolecta",
    description:
      "Recolecta algas marinas aprovechando responsablemente los recursos del litoral.",
  },
  {
    numero: "02",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-700",
    title: "Aprende",
    description:
      "Accede a cursos virtuales impartidos por especialistas y obtén certificaciones digitales.",
  },
  {
    numero: "03",
    icon: Library,
    color: "bg-purple-100 text-purple-700",
    title: "Investiga",
    description:
      "Consulta manuales, fichas técnicas y videos para mejorar continuamente tus procesos.",
  },
  {
    numero: "04",
    icon: Factory,
    color: "bg-green-100 text-green-700",
    title: "Transforma",
    description:
      "Produce abonos, harinas, bioestimulantes y otros productos con mayor valor agregado.",
  },
  {
    numero: "05",
    icon: ShoppingCart,
    color: "bg-orange-100 text-orange-700",
    title: "Comercializa",
    description:
      "Publica tus productos y encuentra compradores mediante el Marketplace.",
  },
  {
    numero: "06",
    icon: TrendingUp,
    color: "bg-white text-white",
    title: "Crece",
    description:
      "Incrementa tus ingresos, fortalece tu asociación y genera un impacto sostenible en tu comunidad.",
    destacado: true,
  },
];

export default function ProcesoLanding() {
  return (
    <section
      id="proceso"
      className="py-15 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">

            Un proceso simple

          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">

            Así transforma AlgasMar Academy tu trabajo

          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">

            Más que una plataforma educativa.
            Integramos capacitación, biblioteca digital,
            marketplace y herramientas tecnológicas para
            ayudarte a generar productos con mayor valor
            agregado y acceder a nuevos mercados.

          </p>

        </div>

        {/* Tarjetas */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {steps.map((step) => {

            const Icon = step.icon;

            const destacado = step.destacado;

            return (

              <div
                key={step.numero}
                className={`rounded-[32px] p-9 transition-all duration-300 border
                ${
                  destacado
                    ? "bg-gradient-to-br from-green-600 via-emerald-600 to-cyan-600 text-white border-green-600 shadow-2xl hover:-translate-y-2"
                    : "bg-white border-slate-200 shadow-lg hover:shadow-2xl hover:border-green-500 hover:-translate-y-2"
                }`}
              >

                <p
                  className={`text-sm font-bold tracking-[0.25em] uppercase ${
                    destacado
                      ? "text-green-100"
                      : "text-green-600"
                  }`}
                >

                  Paso {step.numero}

                </p>

                <div
                  className={`mt-6 w-16 h-16 rounded-2xl flex items-center justify-center ${
                    destacado
                      ? "bg-white/20"
                      : step.color
                  }`}
                >

                  <Icon size={34} />

                </div>

                <h3
                  className={`mt-8 text-3xl font-bold ${
                    destacado
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >

                  {step.title}

                </h3>

                <p
                  className={`mt-6 leading-8 text-lg ${
                    destacado
                      ? "text-green-50"
                      : "text-slate-600"
                  }`}
                >

                  {step.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}