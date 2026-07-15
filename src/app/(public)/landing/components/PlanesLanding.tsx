"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  BadgeCheck,
  Building2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const planes = {
  mensual: [
    {
      nombre: "Explorador",
      icono: GraduationCap,
      precio: "Gratis",
      descripcion: "Ideal para conocer AlgasMar Academy y empezar a aprender.",
      color: "border-slate-200",
      boton: "bg-slate-900 hover:bg-slate-800",
      textoBoton: "Comenzar Gratis",
      popular: false,
      beneficios: [
        "1 curso introductorio",
        "Biblioteca básica",
        "Noticias del sector",
        "Marketplace (consulta)",
        "Perfil personal",
        "Certificado del curso gratuito",
      ],
    },
    {
      nombre: "Profesional",
      icono: Sparkles,
      precio: "S/ 99",
      periodo: "/ mes",
      descripcion: "Acceso completo a toda la plataforma y sus herramientas.",
      color: "border-green-500 ring-4 ring-green-100",
      boton: "bg-green-600 hover:bg-green-700",
      textoBoton: "Suscribirme",
      popular: true,
      beneficios: [
        "Todos los cursos",
        "Biblioteca completa",
        "Marketplace",
        "Centro Oceanográfico",
        "Certificados ilimitados",
        "Material descargable",
        "Soporte prioritario",
        "Actualizaciones incluidas",
      ],
    },
    {
      nombre: "Institucional",
      icono: Building2,
      precio: "S/ 349",
      periodo: "/ mes",
      descripcion: "Pensado para asociaciones, empresas y municipalidades.",
      color: "border-orange-300",
      boton: "bg-orange-500 hover:bg-orange-600",
      textoBoton: "Solicitar Cotización",
      popular: false,
      beneficios: [
        "Todo el Plan Profesional",
        "Usuarios ilimitados",
        "Panel administrativo",
        "Reportes",
        "Capacitaciones",
        "Soporte personalizado",
        "Implementación",
      ],
    },
  ],
  anual: [
    {
      nombre: "Explorador",
      icono: GraduationCap,
      precio: "Gratis",
      descripcion: "Ideal para comenzar.",
      color: "border-slate-200",
      boton: "bg-slate-900 hover:bg-slate-800",
      textoBoton: "Comenzar Gratis",
      popular: false,
      beneficios: [
        "1 curso introductorio",
        "Biblioteca básica",
        "Noticias",
        "Marketplace (consulta)",
        "Perfil",
        "Certificado básico",
      ],
    },
    {
      nombre: "Profesional",
      icono: Sparkles,
      precio: "S/ 999",
      periodo: "/ año",
      descripcion: "Ahorra más del 15% pagando anualmente.",
      color: "border-green-500 ring-4 ring-green-100",
      boton: "bg-green-600 hover:bg-green-700",
      textoBoton: "Suscribirme",
      popular: true,
      beneficios: [
        "Todos los cursos",
        "Biblioteca completa",
        "Marketplace",
        "Centro Oceanográfico",
        "Certificados ilimitados",
        "Material descargable",
        "Soporte prioritario",
        "Actualizaciones",
      ],
    },
    {
      nombre: "Institucional",
      icono: Building2,
      precio: "S/ 3,499",
      periodo: "/ año",
      descripcion: "Ideal para organizaciones.",
      color: "border-orange-300",
      boton: "bg-orange-500 hover:bg-orange-600",
      textoBoton: "Solicitar Cotización",
      popular: false,
      beneficios: [
        "Todo el Profesional",
        "Usuarios ilimitados",
        "Administración",
        "Capacitaciones",
        "Reportes",
        "Soporte Premium",
        "Implementación",
      ],
    },
  ],
};

export default function PlanesLanding() {
  const [modo, setModo] = useState<"mensual" | "anual">("mensual");

  return (
    <section id="planes" className="py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-5 py-2 font-semibold">
            <BadgeCheck size={18} />
            Planes y Suscripciones
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Elige el plan perfecto para ti
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            Accede a cursos especializados, biblioteca digital, marketplace,
            certificaciones y herramientas para potenciar el aprovechamiento
            sostenible de las algas marinas.
          </p>

          <div className="mt-12 inline-flex rounded-full bg-slate-200 p-1">
            <button
              onClick={() => setModo("mensual")}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                modo === "mensual"
                  ? "bg-white shadow text-slate-900"
                  : "text-slate-500"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setModo("anual")}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                modo === "anual"
                  ? "bg-green-600 text-white shadow"
                  : "text-slate-500"
              }`}
            >
              Anual
            </button>
          </div>

          <p className="mt-4 text-green-600 font-semibold">
            💚 Ahorra más del 15% con la suscripción anual.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {planes[modo].map((plan) => {
            const Icon = plan.icono;
            return (
              <div
                key={plan.nombre}
                className={`relative rounded-[36px] border bg-white shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ${plan.color}`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <div className="rounded-full bg-green-600 px-6 py-2 text-sm font-bold text-white shadow-lg">
                      ⭐ MÁS POPULAR
                    </div>
                  </div>
                )}

                <div className="p-10">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
                      <Icon size={34} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {plan.nombre}
                      </h3>
                      <p className="text-slate-500">{plan.descripcion}</p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <span className="text-5xl font-black text-slate-900">
                      {plan.precio}
                    </span>
                    {plan.periodo && (
                      <span className="ml-2 text-xl text-slate-500">
                        {plan.periodo}
                      </span>
                    )}
                  </div>

                  {modo === "anual" && plan.nombre === "Profesional" && (
                    <p className="mt-3 rounded-xl bg-green-50 py-2 text-center font-semibold text-green-700">
                      Equivale a solo
                      <span className="font-bold"> S/ 83.25 por mes</span>
                    </p>
                  )}

                  <div className="mt-10 space-y-5">
                    {plan.beneficios.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check size={20} className="mt-1 text-green-600" />
                        <span className="leading-7 text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/registro"
                    className={`mt-10 flex justify-center rounded-2xl py-4 text-lg font-bold text-white transition ${plan.boton}`}
                  >
                    {plan.textoBoton}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* BENEFICIOS */}
        <div className="mt-24 rounded-[36px] bg-slate-900 px-10 py-16 text-white">
          <div className="text-center">
            <h3 className="text-4xl font-bold">Todos los planes incluyen</h3>
            <p className="mt-5 text-xl text-slate-300">
              Una plataforma diseñada especialmente para el sector algal con
              herramientas que evolucionan constantemente.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="rounded-2xl bg-white/5 p-8">
              <BadgeCheck size={40} className="text-green-400" />
              <h4 className="mt-5 text-xl font-bold">Certificados</h4>
              <p className="mt-3 leading-7 text-slate-300">
                Certificados digitales emitidos al completar los cursos
                disponibles.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-8">
              <Sparkles size={40} className="text-cyan-400" />
              <h4 className="mt-5 text-xl font-bold">Actualizaciones</h4>
              <p className="mt-3 leading-7 text-slate-300">
                Nuevos cursos, documentos y herramientas agregados
                continuamente.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-8">
              <Building2 size={40} className="text-orange-400" />
              <h4 className="mt-5 text-xl font-bold">Plataforma</h4>
              <p className="mt-3 leading-7 text-slate-300">
                Acceso desde computadora, tablet o teléfono móvil las 24 horas.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-8">
              <GraduationCap size={40} className="text-green-400" />
              <h4 className="mt-5 text-xl font-bold">Aprendizaje</h4>
              <p className="mt-3 leading-7 text-slate-300">
                Aprende a tu ritmo con contenido especializado para el
                aprovechamiento sostenible de algas marinas.
              </p>
            </div>
          </div>
        </div>

        {/* GARANTÍAS */}
        <div className="mt-20 grid lg:grid-cols-4 gap-8">
          <div className="rounded-3xl border border-slate-200 p-8 text-center">
            <h4 className="text-xl font-bold">✅ Sin permanencia</h4>
            <p className="mt-3 text-slate-600">
              Cancela tu suscripción cuando desees.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 text-center">
            <h4 className="text-xl font-bold">📜 Certificados</h4>
            <p className="mt-3 text-slate-600">
              Obtén certificados digitales al finalizar los cursos.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 text-center">
            <h4 className="text-xl font-bold">🌊 Plataforma especializada</h4>
            <p className="mt-3 text-slate-600">
              Contenido desarrollado específicamente para el sector algal.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 text-center">
            <h4 className="text-xl font-bold">💬 Soporte</h4>
            <p className="mt-3 text-slate-600">
              Atención para resolver dudas y acompañarte durante tu aprendizaje.
            </p>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="mt-24 text-center">
          <h3 className="text-4xl font-extrabold text-slate-900">
            ¿Listo para impulsar tu crecimiento?
          </h3>
          <p className="mt-6 max-w-3xl mx-auto text-xl leading-9 text-slate-600">
            Únete a cientos de estudiantes, asociaciones y organizaciones que ya
            fortalecen sus conocimientos con AlgasMar Academy. Empieza hoy mismo
            y transforma el aprovechamiento de las algas marinas mediante
            educación, innovación y tecnología.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link
              href="/registro"
              className="rounded-2xl bg-green-600 hover:bg-green-700 px-10 py-5 text-lg font-bold text-white shadow-xl transition duration-300 hover:scale-105"
            >
              Comenzar Ahora
            </Link>
            <Link
              href="/contacto"
              className="rounded-2xl border-2 border-slate-300 bg-white px-10 py-5 text-lg font-bold text-slate-800 transition duration-300 hover:border-green-600 hover:text-green-700"
            >
              Hablar con un asesor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}