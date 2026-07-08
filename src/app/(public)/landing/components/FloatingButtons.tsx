"use client";

import { useEffect, useState } from "react";

import {
  Mail,
  ChevronUp,
} from "lucide-react";

export default function FloatingButtons() {

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setShowTop(window.scrollY > 300);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const goTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">

      {/* WhatsApp */}

      <a
        href="https://wa.me/51947070876?text=Hola%20AlgasMar%20Academy,%20deseo%20obtener%20más%20información%20sobre%20la%20plataforma."
        target="_blank"
        rel="noopener noreferrer"
        className="group w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        title="Escríbenos por WhatsApp"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="text-white"
        >
          <path d="M20.52 3.48A11.91 11.91 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.54 4.13 1.56 5.93L0 24l6.38-1.67a11.82 11.82 0 0 0 5.67 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.42-8.42zM12.06 21.7h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.79.99 1.01-3.7-.23-.38a9.8 9.8 0 0 1-1.5-5.17c0-5.42 4.41-9.83 9.84-9.83 2.63 0 5.11 1.02 6.97 2.89a9.78 9.78 0 0 1 2.88 6.95c0 5.42-4.41 9.82-9.82 9.82zm5.39-7.37c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.59-.9-2.18-.24-.57-.49-.49-.66-.5h-.57c-.2 0-.52.08-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.05 2.85 1.2 3.05.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.61.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.08-.12-.27-.2-.57-.35z"/>
        </svg>

      </a>

      {/* Correo */}

      <a
        href="mailto:algasmaracademy@gmail.com?subject=Información%20sobre%20AlgasMar%20Academy"
        className="w-16 h-16 rounded-full bg-cyan-600 hover:bg-cyan-700 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        title="Enviar correo"
      >

        <Mail
          size={30}
          className="text-white"
        />

      </a>

      {/* Volver arriba */}

      {showTop && (

        <button
          onClick={goTop}
          className="w-16 h-16 rounded-full bg-slate-800 hover:bg-slate-900 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          title="Volver arriba"
        >

          <ChevronUp
            size={32}
            className="text-white"
          />

        </button>

      )}

    </div>

  );

}