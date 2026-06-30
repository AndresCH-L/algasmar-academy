import OceanografiaDashboard from "./components/OceanografiaDashboard";

import { getOceanografia } from "@/lib/getOceanografia";

export default async function OceanografiaPage() {

  const datos = await getOceanografia();

  return (

    <main className="min-h-screen bg-slate-100">

      <OceanografiaDashboard
        datos={datos}
      />

    </main>

  );

}