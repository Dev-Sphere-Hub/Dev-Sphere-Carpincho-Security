import React from 'react'

const LoginForm = () => {
  return (
    <div className="w-70% min-h-screen flex items-center justify-center ">
    <div className="max-w-md w-full p-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Iniciar Sesión</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className=" pt-9 block text-gray-700 text-sm font-bold mb-2">
            Nombre de usuario
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full p-2 border rounded-md"
            placeholder="Ingrese su nombre de usuario"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border rounded-md"
            placeholder="Ingrese su contraseña"
          />
        </div>
        <p>Recuperar contraseña</p>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  </div>
  )
}

export default LoginForm