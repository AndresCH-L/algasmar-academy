import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">

        <Image
          src="/images/logo/logo-algasmar-transparent.png"
          alt="AlgasMar Academy"
          width={120}
          height={120}
          className="mx-auto mb-4"
        />

        <h1 className="text-3xl font-bold text-center mb-6">
          Iniciar Sesión
        </h1>

        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full border rounded-lg p-3 mb-6"
        />

        <Link
          href="/dashboard"
          className="block text-center bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Ingresar
        </Link>

        <p className="text-center mt-4">

          ¿No tienes cuenta?

          <Link
            href="/registro"
            className="text-blue-700 ml-2"
          >
            Registrarse
          </Link>

        </p>

      </div>

    </main>
  );
}