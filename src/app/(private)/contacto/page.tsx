import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-green-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <h1 className="text-4xl md:text-5xl font-bold">
            Centro de Atención
          </h1>

          <p className="mt-4 text-blue-100 text-lg">
            Comunícate con nuestro equipo para consultas técnicas,
            oportunidades comerciales y soporte institucional.
          </p>

        </div>

      </section>

      {/* INFORMACIÓN */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* WHATSAPP */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <Phone
              size={40}
              className="text-green-600 mb-4"
            />

            <h2 className="text-xl font-bold mb-3">
              WhatsApp
            </h2>

            <p className="text-slate-600 mb-4">
              Atención directa.
            </p>

            <a
              href="https://wa.me/51930136375"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition"
            >
              <MessageCircle size={18} />
              Escribir
            </a>

          </div>

          {/* CORREO */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <Mail
              size={40}
              className="text-blue-600 mb-4"
            />

            <h2 className="text-xl font-bold mb-3">
              Correo
            </h2>

            <p className="text-slate-600 mb-4">
              Atención por correo electrónico.
            </p>

            <a
              href="mailto:andresxd.2018@gmail.com"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              <Mail size={18} />
              Escribir
            </a>

          </div>

          {/* UBICACIÓN */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <MapPin
              size={40}
              className="text-red-600 mb-4"
            />

            <h2 className="text-xl font-bold mb-3">
              Ubicación
            </h2>

            <p className="text-slate-600 mb-4">
              Marcona - Ica - Perú
            </p>

            <a
              href="https://maps.google.com/?q=Marcona,Ica,Peru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-xl hover:bg-red-700 transition"
            >
              <MapPin size={18} />
              Ver mapa
            </a>

          </div>

        </div>

      </section>

      {/* FORMULARIO */}

      <section className="max-w-4xl mx-auto px-6 pb-12">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-6">
            Formulario de Atención
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full border rounded-xl p-4"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full border rounded-xl p-4"
            />

            <input
              type="text"
              placeholder="Asunto"
              className="w-full border rounded-xl p-4"
            />

            <textarea
              rows={6}
              placeholder="Escribe tu mensaje..."
              className="w-full border rounded-xl p-4"
            />

            <button
              className="flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition"
            >
              <Send size={18} />
              Enviar Mensaje
            </button>

          </div>

        </div>

      </section>

      {/* MAPA */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <iframe
            src="https://maps.google.com/maps?q=Marcona%20Ica&t=&z=11&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[450px]"
            loading="lazy"
          />

        </div>

      </section>

    </main>
  );
}