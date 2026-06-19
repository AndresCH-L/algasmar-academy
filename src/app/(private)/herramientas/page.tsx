import Image from "next/image";

import {
  Wrench,
  Package,
  CheckCircle,
} from "lucide-react";


const herramientas = [

  {
    nombre: "Horno de Secado de Algas",
    categoria: "Procesamiento",
    descripcion:
      "Equipo utilizado para reducir la humedad del sargazo y conservar la materia prima para su transformación.",
    imagen:
      "/images/herramientas/horno-secado.jpg",
  },


  {
    nombre: "Molino Pulverizador",
    categoria: "Producción",
    descripcion:
      "Permite transformar algas secas en harina fina para aplicaciones agrícolas, alimentarias o industriales.",
    imagen:
      "/images/herramientas/molino-algas.jpg",
  },


  {
    nombre: "Selladora de Empaques",
    categoria: "Envasado",
    descripcion:
      "Herramienta para cerrar bolsas y empaques comerciales conservando la calidad del producto.",
    imagen:
      "/images/herramientas/selladora.jpg",
  },


  {
    nombre: "Balanza Digital Industrial",
    categoria: "Control",
    descripcion:
      "Equipo necesario para controlar pesos durante producción, almacenamiento y venta.",
    imagen:
      "/images/herramientas/balanza.jpg",
  },


  {
    nombre: "Envases Comerciales",
    categoria: "Presentación",
    descripcion:
      "Bolsas, frascos y empaques para comercializar productos derivados de algas marinas.",
    imagen:
      "/images/herramientas/envases.jpg",
  },


  {
    nombre: "Mesa de Procesamiento",
    categoria: "Producción",
    descripcion:
      "Superficie sanitaria para clasificación, limpieza y preparación de materia prima.",
    imagen:
      "/images/herramientas/mesa-proceso.jpg",
  },

];



export default function HerramientasPage() {


  return (

    <main className="min-h-screen bg-slate-100">


      {/* HERO */}


      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-green-600 text-white">


        <div className="max-w-7xl mx-auto px-6 py-14">


          <h1 className="text-4xl md:text-5xl font-bold">

            Herramientas Productivas

          </h1>


          <p className="mt-4 text-blue-100 text-lg max-w-3xl">

            Equipamiento recomendado para transformar algas marinas
            en productos con mayor valor agregado.

          </p>


        </div>


      </section>




      {/* INTRO */}


      <section className="max-w-7xl mx-auto px-6 py-10">


        <div className="bg-white rounded-3xl shadow-lg p-8">


          <div className="flex items-center gap-4 mb-5">


            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center">


              <Wrench
                size={35}
                className="text-green-700"
              />


            </div>


            <div>


              <h2 className="text-3xl font-bold">

                Producción con Valor Agregado

              </h2>


              <p className="text-slate-500">

                Del recurso natural al producto comercial.

              </p>


            </div>



          </div>



          <p className="text-slate-600 leading-8">

            Para incrementar la rentabilidad del aprovechamiento
            de algas marinas es importante contar con herramientas
            adecuadas que permitan mejorar procesos de secado,
            molienda, control de calidad, envasado y presentación
            final del producto.

          </p>


        </div>


      </section>





      {/* LISTADO */}



      <section className="max-w-7xl mx-auto px-6 pb-16">



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">



          {herramientas.map((item) => (


            <div

              key={item.nombre}

              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition"

            >



              <div className="relative h-64">


                <Image

                  src={item.imagen}

                  alt={item.nombre}

                  fill

                  className="object-cover"

                />


              </div>



              <div className="p-6">


                <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">


                  <Package size={15}/>


                  {item.categoria}


                </span>



                <h2 className="text-2xl font-bold mt-4 mb-3">

                  {item.nombre}

                </h2>



                <p className="text-slate-600 leading-7 mb-5">

                  {item.descripcion}

                </p>




                <div className="flex items-center gap-2 text-green-700 font-semibold">


                  <CheckCircle size={18}/>


                  Recomendado


                </div>



              </div>




            </div>



          ))}



        </div>




      </section>




    </main>

  );

}