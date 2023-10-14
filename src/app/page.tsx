"use client";
import Colors from "./themeApp/page";
import router from "next/router";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-gray-100 p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32">
      <h1 className="mb-3 text-center text-4xl font-bold text-blue-600 md:text-5xl">
        Bienvenido al proyecto RchNorte
      </h1>
      <p className="mb-5 text-base md:text-lg">
        Este proyecto consta de varios módulos:
      </p>

      <div className="mb-5 flex flex-wrap justify-center">
        <div
          className="m-2 w-56 rounded-lg bg-blue-100 p-4 shadow-md md:w-64"
          onClick={() => {
            router.push("/borrar1");
          }}
        >
          <h2 className="mb-1 text-lg font-semibold text-blue-600 md:text-xl">
            Módulo 1: Gestión de inventario
          </h2>
        </div>

        <div className="m-2 w-56 rounded-lg bg-green-100 p-4 shadow-md md:w-64">
          <h2 className="mb-1 text-lg font-semibold text-green-600 md:text-xl">
            Módulo 2: Gestión de ventas
          </h2>
        </div>

        <div className="m-2 w-56 rounded-lg bg-yellow-100 p-4 shadow-md md:w-64">
          <h2 className="mb-1 text-lg font-semibold text-yellow-600 md:text-xl">
            Módulo 3: Gestión de clientes
          </h2>
        </div>

        <div className="m-2 w-56 rounded-lg bg-red-100 p-4 shadow-md md:w-64">
          <h2 className="mb-1 text-lg font-semibold text-red-600 md:text-xl">
            Módulo 4: Gestión de planilla
          </h2>
        </div>

        {/* <div className="m-2 w-56 rounded-lg bg-purple-100 p-4 shadow-md md:w-64">
          <h2 className="mb-1 text-lg font-semibold text-purple-600 md:text-xl">Módulo 5: Login y Seguridad</h2>
        </div> */}
      </div>

      <div className="my-5 text-center md:mt-10">
          <p className="text-blue-600">
            Servicios RchNorte.
          </p>
        </div>

      <div className="h-60 w-80">
        <img src="RchNorte.jpeg" alt="RchNorte" className="" />
      </div>

      <div className="mt-60">
        <div className="mt-5 text-center md:mt-10">
          <p className="text-blue-600">
            Este es un proyecto orgullosamente guatemalteco para potenciar la
            industria local.
          </p>
        </div>
      </div>
    </main>
  );
}
