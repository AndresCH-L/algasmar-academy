import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-green-600 flex flex-col items-center justify-center text-white">

      <div className="text-center px-6">

        <Image
          src="/images/logo/logo-algasmar-transparent.png"
          alt="AlgasMar Academy"
          width={220}
          height={220}
          className="mx-auto mb-8"
          priority
        />

        <h1 className="text-6xl font-extrabold mb-6">
          AlgasMar Academy
        </h1>

        <p className="text-xl mb-10 max-w-xl mx-auto">
          Transformando algas marinas en oportunidades sostenibles
        </p>

        <Link
          href="/login"
          className="bg-white text-blue-800 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
        >
          Ingresar
        </Link>

      </div>

    </main>
  );
}