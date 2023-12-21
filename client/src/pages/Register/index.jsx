import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { endpoints } from '../../constants/api'
import mainBg from '../../assets/images/carpinchosVarios.jpeg'

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [documentId, setDocumentId] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')
  const [successMessageCorrect, setSuccessMessageCorrect] = useState({})

  const validateForm = () => {
    const validateErrors = {}

    if (!name.trim()) {
      validateErrors.name = 'El nombre es obligatorio'
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      validateErrors.name = 'El nombre solo puede contener letras'
    }

    if (!lastname.trim()) {
      validateErrors.lastname = 'El apellido es obligatorio'
    } else if (!/^[a-zA-Z\s]+$/.test(lastname)) {
      validateErrors.lastname = 'El apellido solo puede contener letras'
    }

    if (!email.trim()) {
      validateErrors.email = 'El email es obligatorio'
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      validateErrors.email = 'El email no es valido'
    }

    if (!phone.trim()) {
      validateErrors.phone = 'El teléfono es obligatorio'
    } else if (!/^\d+$/.test(phone)) {
      validateErrors.phone = 'El teléfono solo puede contener números'
    } else if (phone.length > 9) {
      validateErrors.phone = 'El teléfono debe tener mas de 9 dígitos'
    }

    if (!documentId.trim()) {
      validateErrors.documentId = 'El DNI es obligatorio'
    } else if (!/^\d+$/.test(documentId)) {
      validateErrors.documentId = 'El DNI solo puede contener números'
    } else if (documentId.length < 8) {
      validateErrors.documentId = 'El DNI no puede tener menos de 8 dígitos'
    }

    if (!password.trim()) {
      validateErrors.password = 'La contraseña es obligatoria'
    } else if (password.length < 6) {
      validateErrors.password = 'La contraseña debe tener al menos 6 caracteres'
    } else if (password.length > 20) {
      validateErrors.password = 'La contraseña debe tener menos de 20 caracteres'
    }

    return validateErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSuccessMessage('')
      return
    }

    const formData = new FormData(event.target)

    const data = Object.fromEntries(formData)
    console.log('Data a enviar al servidor:', data)

    setErrors({})
    setSuccessMessage('Usuario registrado correctamente')
    setTimeout(() => {
      setSuccessMessage('')
    }, 300)

    try {
      const response = await axios.post(endpoints.register, data)
      console.log('response --> ', response)
      if (response.status === 201) {
        console.log('Usuario registrado correctamente')
        setSuccessMessageCorrect({ succes: response.data.message })
        setTimeout(() => {
          setSuccessMessageCorrect('')
          navigate('/login')
        }, 3000)
      }
    } catch (error) {
      if (error.response) {
        setSuccessMessageCorrect({ error: error.response.data.message })
        setTimeout(() => {
          setErrors({})
        }, 3000)
      }
      console.error('Error al registrar el usuario:', error.response)
      // setErrors({ error: 'Error al registrar el usuario' })
      setTimeout(() => {
        setSuccessMessageCorrect('')
      }, 3000)
    }
  }

  return (
    <div
      className='grid min-h-screen h-screen w-full bg-cover'
      style={{
        backgroundImage: `url(${mainBg})`
      }}
    >
      <div
        className='grid justify-items-center items-center h-full p-4'
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
      >
        <div className='grid bg-[#EDEDED] justify-items-center w-full max-w-md px-[3%] py-[2%] rounded-lg shadow-lg border border-gray-200'>
          <h1 className='text-2xl font-bold mb-4'>Registro</h1>

          {successMessageCorrect?.succes && (
            <section className='absolute top-5 mx-auto w-[300px] h-auto grid place-content-center rounded-md bg-slate-600'>
              <h2 className='text-md text-parrafo bg-green-400 font-semibold'>{successMessageCorrect?.succes}</h2>
            </section>
          )}

          {successMessageCorrect?.error && (
            <section className='absolute top-5 mx-auto w-[300px] h-auto grid place-content-center rounded-md bg-slate-600'>
              <h2 className='text-md text-parrafo bg-red-500 font-semibold'>{successMessageCorrect?.error}</h2>
            </section>
          )}

          <div className='' />
          <form className='w-full px-[10%] flex flex-col justify-center gap-1 text-start' onSubmit={handleSubmit}>
            <label htmlFor='name' className='text-gray-700'>
              Nombre
              <input
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent'
                name='name'
                placeholder='Escribe tu nombre'
                type='text'
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </label>

            <label htmlFor='lastname' className='text-gray-700'>
              Apellido
              <input
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent'
                name='lastname'
                placeholder='Escribe tu apellido'
                type='text'
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
              />
            </label>

            <label htmlFor='documentId' className='text-gray-700'>
              DNI
              <input
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent'
                name='documentId'
                placeholder='Escribe tu DNI'
                type='text'
                onChange={(e) => setDocumentId(e.target.value)}
                value={documentId}
              />
            </label>

            <label htmlFor='phone' className='text-gray-700'>
              Teléfono
              <input
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent'
                name='phone'
                placeholder='Escribe tu teléfono'
                type='text'
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </label>

            <label htmlFor='email' className='text-gray-700'>
              Email
              <input
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent'
                name='email'
                placeholder='Escribe tu email'
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>

            <label htmlFor='password' className='text-gray-700'>
              Contraseña
              <input
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent'
                name='password'
                placeholder='Escribe tu contraseña'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {successMessage && <p className='text-green-500 text-xs font-semibold mt-1'>{successMessage}</p>}
              {Object.keys(errors).length > 0 && <p className='text-red-500 text-xs font-semibold mt-1'>{errors.general}</p>}
              {Object.keys(errors).map((errorKey) => (
                <p key={errorKey} className='text-red-500 text-xs font-semibold mt-1'>{errors[errorKey]}</p>
              ))}
              <p className='text-gray-600 text-xs font-semibold mt-1'>La contraseña debe tener al menos 6 caracteres y menos de 20 caracteres</p>
            </label>

            <button type='submit' className='bg-gradient-to-r from-green-500 via-green-700 to-blue-400  backdrop-blur-[6px] opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
              Enviar
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Register
