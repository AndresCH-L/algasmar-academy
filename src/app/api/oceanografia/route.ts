import { obtenerDatosOceanograficos } from "@/lib/oceanografia";

export async function GET() {

  try {

    const datos =
      await obtenerDatosOceanograficos();

    return Response.json(datos);

  } catch {

    return Response.json(
      {
        error:
          "No fue posible obtener datos oceanográficos.",
      },
      {
        status: 500,
      }
    );

  }

}