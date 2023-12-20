import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { endpoints } from '../../constants/api'

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
      validateErrors.phone = 'El teléfono debe tener mas de 8 dígitos'
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
      navigate('/login')
    } catch (error) {
      console.error('Error al registrar el usuario:', error)
      setSuccessMessage('')
      setErrors({ general: 'Error al registrar el usuario' })
      setTimeout(() => {
        setErrors({})
      }, 3000)
    }
  }

  return (
    <div className='bg-colorCustom1 w-[100%] px-6 lg:bg-slate-400 h-screen flex flex-col lg:flex-row lg:justify-around min-w-[300px]'>
      <div className='lg:flex-col lg:self-center'>
        <div className='pt-9 text-black text-5xl'>
          <h1>Logo</h1>
        </div>
        <div className='pt-6 lg:flex'>
          <p>Nombre de la app</p>
        </div>
      </div>
      <div className=''>
        <form className='w-full px-[10%] flex flex-col justify-center items-center gap-5' onSubmit={handleSubmit}>
          <label htmlFor='name'>
            nombre
            <input
              name='name'
              placeholder='Escribe tu nombre'
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label htmlFor='lastname'>
            apellido
            <input
              name='lastname'
              placeholder='Escribe tu apellido'
              type='text'
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
            />
          </label>
          <label htmlFor='documentId'>
            DNI
            <input
              name='documentId'
              placeholder='Escribe tu DNI'
              type='text'
              onChange={(e) => setDocumentId(e.target.value)}
              value={documentId}
            />
          </label>
          <label htmlFor='phone'>
            teléfono
            <input
              name='phone'
              placeholder='Escribe tu teléfono'
              type='text'
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </label>
          <label htmlFor='email'>
            email
            <input
              name='email'
              placeholder='Escribe tu email'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label htmlFor='password'>
            contraseña
            <input
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
            <p className='text-white text-xs font-semibold mt-1'>La contraseña debe tener al menos 6 caracteres y menos de 20 caracteres</p>
          </label>

          <button type='submit' className='bg-green-300 text-white px-5 py-2'>enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Register
