import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { endpoints } from '../../constants/api'
const Register = () => {
  const Navigate = useNavigate()
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [phone, setphone] = useState('')
  const [documentId, setDocumentId] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRegisterForm = async (event) => {
    event.preventDefault()
    const formData = { name, lastname, email, password, confirmPassword, phone, documentId }
    try {
      const response = await fetch(endpoints.register, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error(`Error al registrar: ${response.status}`)
      }

      const data = await response.json()
      console.log(data)
      const token = data.data.token
      console.log(token)
      Navigate('/login')
    } catch (error) {
      console.error('Error al registrarse:', error.message)
    }
  }

  return (
    <div className='relative bg-colorCustom1 mt-9 w-[100%] px-6 lg:bg-slate-400 h-screen  p-0 flex flex-col lg:flex-row lg:justify-around gap-8 min-w-[300px]'>
      <div className='lg:flex-col lg:self-center'>
        <div className='pt-9 text-black text-5xl'>
          <h1>Logo</h1>
        </div>
        <div className='pt-6 lg:flex'>
          <p>Nombre de la app</p>
        </div>
      </div>
      <div className='pt-9 lg:self-center'>
        <form onSubmit={handleRegisterForm}>
          <div className='flex flex-col gap-8 '>
            <input className='rounded lg:w-80 w-full h-[35px] lg:h-[40px]' type='text' placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)} />
            <input className='rounded lg:w-80 w-full h-[35px] lg:h-[40px]' type='text' placeholder='Apellido' value={lastname} onChange={(e) => setLastname(e.target.value)} />
            <input className='rounded lg:w-80 w-full h-[35px] lg:h-[40px]' type='text' placeholder='Dni' value={documentId} onChange={(e) => setDocumentId(e.target.value)} />
            <input className='rounded lg:w-80 w-full h-[35px] lg:h-[40px]' type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className='rounded lg:w-80 w-full h-[35px] lg:h-[40px]' type='text' placeholder='Phone' value={phone} onChange={(e) => setphone(e.target.value)} />

            <input className='rounded lg:w-80 w-full h-[35px]' type='password' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
            <input className='rounded lg:w-80 w-full h-[35px]' type='password' placeholder='Confirmar Contraseña' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button className='bg-blue border-solid rounded-3xl mt-10 w-full text-xl bg-slate-500 h-[50px]' type='submit'>Registrar</button>
        </form>
      </div>
    </div>
  )
}

export default Register
