import { obtenerDatosOceanograficos } from "./oceanografia";

export async function getOceanografia() {

    const datos =
        await obtenerDatosOceanograficos();

    return datos;

}