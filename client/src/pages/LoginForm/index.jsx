import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { endpoints } from '../../constants/api'
import { jwtDecode } from 'jwt-decode'
import CelCarpinchoImage from '../../assets/images/CelCarpincho.png' // Asegúrate de que la ruta sea correcta

const LoginForm = () => {
  const localStorage = window.localStorage
  const Navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const validateErrors = {}

    if (!email.trim()) {
      validateErrors.email = 'El email es obligatorio'
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      validateErrors.email = 'El email no es válido'
    }

    if (!password.trim()) {
      validateErrors.password = 'La contraseña es obligatoria'
    } else if (password.length < 8) {
      validateErrors.password = 'La contraseña debe tener al menos 8 caracteres'
    }

    return validateErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      const response = await axios.post(endpoints.login, { email, password })
      const responseData = response.data

      if (response.status === 200) {
        const decodedToken = jwtDecode(responseData.token)
        localStorage.setItem('token', responseData.token)
        Navigate('/historial/reportes')
      } else {
        throw new Error(responseData.message)
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
      setErrors({ general: 'Error al iniciar sesión' })
    }
  }

  const handleRegister = () => {
    Navigate('/register')
  }

  return (
    <div className='flex h-screen flex-col sm:flex-row'>
      {/* División  */}
      <div className='w-full sm:w-1/2 flex justify-center items-center bg-cover sm:bg-none'>
        {/* // style={{ backgroundImage: `url(${CelCarpinchoImage})` */}
        <form onSubmit={handleLogin} className='w-full text-start max-w-md p-8  bg-[#EDEDED]  bg-opacity-90 sm:bg-opacity-100 shadow-md rounded-md'>
          <h2 className='text-2xl font-bold mb-8 text-center'>Iniciar Sesión</h2>

          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 text-sm font-semibold mb-2'>
              Correo Electrónico
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            />
            {errors.email && <p className='text-red-500 text-xs font-semibold'>{errors.email}</p>}
          </div>

          <div className='mb-6'>
            <label htmlFor='password' className='block text-gray-700 text-sm font-semibold mb-2'>
              Contraseña
            </label>
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            />
            {errors.password && <p className='text-red-500 text-xs font-semibold'>{errors.password}</p>}
          </div>

          {/* Botón de inicio de sesión */}
          <div className='mb-6'>
            <button
              type='submit'
              className='w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none'
            >
              <b> Iniciar Sesión </b>
            </button>
          </div>

          {/* Enlace para registrarse */}
          <p className='text-sm text-center'>
            ¿No tienes una cuenta?{' '}
            <span
              onClick={handleRegister}
              className='text-blue-500 cursor-pointer hover:underline'
            >
              Regístrate aquí
            </span>
          </p>
        </form>
      </div>
      <div className='w-1/2 bg-cover ' style={{ backgroundImage: `url(${CelCarpinchoImage})` }} />

    </div>
  )
}

export default LoginForm
