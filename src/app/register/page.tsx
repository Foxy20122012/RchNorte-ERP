'use client'
import React, { FormEvent, useState } from "react";
import axios, {AxiosError} from "axios";
import { useRouter } from "next/navigation";


const RegisterPage = () => {

const [error, setError] = useState(null);
const router = useRouter()


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   const  formData = new FormData(e.currentTarget)

  //  const nombre_usuario = formData.get('nombre_usuario')
  //  const contrasena = formData.get('contrasena')
  //  const nombre_completo = formData.get('nombre_completo')
  //  const correo_electronico = formData.get('correo_electronico')

  //  console.log(nombre_usuario, contrasena,nombre_completo, correo_electronico );
  try {
    const res = await axios.post('/api/auth/signup', {
      nombre_usuario: formData.get('nombre_usuario'),
      contrasena: formData.get('contrasena'),
      nombre_completo: formData.get('nombre_completo'),
      correo_electronico: formData.get('correo_electronico')
    });
  
    if (res.status >= 200 && res.status < 300) {
      router.push("/");
    }
    console.log(res);
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError) {
      setError(error.response?.data.message);
    }
  }
  
  
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Registro de Usuario
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && <div className="bg-red-500 text-white p-2 mb-2">{error} </div>}
            <div>
              <label
                htmlFor="nombre_usuario"
                className="text-sm font-medium text-gray-600 block"
              >
                Nombre de usuario
              </label>
              <input
                type="text"
                id="nombre_usuario"
                name="nombre_usuario"
                placeholder="JohnDoe123"
                required
                className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-400"
              />
            </div>
            <div>
              <label
                htmlFor="contrasena"
                className="text-sm font-medium text-gray-600 block"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="contrasena"
                name="contrasena"
                placeholder="********"
                required
                className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-400"
              />
            </div>
            <div>
              <label
                htmlFor="nombre_completo"
                className="text-sm font-medium text-gray-600 block"
              >
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre_completo"
                name="nombre_completo"
                placeholder="John Doe"
                required
                className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-400"
              />
            </div>
            <div>
              <label
                htmlFor="correo_electronico"
                className="text-sm font-medium text-gray-600 block"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="correo_electronico"
                name="correo_electronico"
                placeholder="correo@example.com"
                required
                className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-400"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md focus:ring focus:ring-blue-400"
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
