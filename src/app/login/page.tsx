'use client'
import React, { FormEvent, useState } from "react";
import { useRouter } from 'next/router';
import { signIn } from "next-auth/react";


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
const handleSubmit = async (e) => {
  e.preventDefault();

  const result = await signIn('credentials', {
    email,
    password,
    redirect: false,
  });

  if (result.error) {
    console.error('Error de inicio de sesión:', result.error);
  } else {
    window.location.href = "/"; // Redirige al usuario a la ruta raíz después del inicio de sesión exitoso
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl text-center font-bold">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email:</label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Contraseña:</label>
            <input
              id="password"
              type="password"
              className="w-full border border-gray-300 p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
