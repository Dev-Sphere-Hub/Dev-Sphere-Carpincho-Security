import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/AuthStore/AuthStore'

const LoginForm = () => {
  const setToken = useAuthStore((state) => state.setToken)
  const [email, setUserEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)
  const Navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await fetch('https://carpincho-security.onrender.com/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      const data = await res.json()
      console.log(data)
      if (data.status !== 'success') {
        throw new Error(data.message)
      }
      const token = data.data.token
      console.log(token)
      setToken(token)
      setMessage(data.message) // Establecer el mensaje de éxito
      setIsError(false) // No es un mensaje de error
      Navigate('/historial')
    } catch (error) {
      setMessage(error.message) // Establecer el mensaje de error
      setIsError(true) // Es un mensaje de error
    }
  }

  const handleRegister = () => {
    Navigate('/register')
  }

  return (
    <div className='relative bg-colorCustom1 w-[100%] px-6 lg:bg-slate-400 h-screen  p-0 flex flex-col lg:flex-row lg:justify-around gap-8 min-w-[300px]'>
      <div className='lg:flex-col lg:self-center'>
        <div className='pt-9 text-black text-5xl'>
          <h1>Logo</h1>
        </div>
        <div className='pt-6 lg:flex'>
          <p>Nombre de la app</p>
        </div>
      </div>
      <div className='pt-9 lg:self-center'>
        <form action=''>
          <div className='py-5'>
            <input className='rounded lg:w-80 w-full h-[35px] lg:h-[40px]' type='email' name='' placeholder='Email' onChange={(e) => setUserEmail(e.target.value)} /> <br />
          </div>
          <input className='rounded lg:w-80 w-full h-[35px]' type='password' name='' placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)} />
          <p className='m-[15px] pl-[155px]'>Recuperar contraseña</p>
        </form>
        {/* Mostrar el mensaje */}
        {message && <p style={{ color: isError ? 'red' : 'green' }}>{message}</p>}
        <button className='bg-blue border-solid rounded-3xl mt-20 w-full text-xl bg-slate-500 h-[50px]' onClick={handleLogin}>Ingresar</button>
        <button className='bg-blue border-solid rounded-3xl mt-10 w-full text-xl bg-slate-500 h-[50px]' onClick={handleRegister}>Registrar</button>
      </div>
    </div>
  )
}

export default LoginForm
