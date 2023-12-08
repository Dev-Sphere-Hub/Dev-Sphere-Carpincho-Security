import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const QuickRegistration = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const imagenSrc = location.state?.imagen

  const [form, setForm] = useState({
    nombre: '',
    documento: '',
    estado: '',
    direccion: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/historial', { state: { form } })
    console.log(form)
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>

      {
      imagenSrc && <img src={imagenSrc} alt='Preview' className='h-64 w-64 object-cover mb-4' />
      }
      <form onSubmit={handleSubmit} className='p-6 bg-white rounded shadow-md'>
        <h2 className='text-2xl font-bold mb-4'>Registro rápido 2</h2>
        <input
          type='text'
          name='nombre'
          placeholder='Nombre y Apellido'
          onChange={handleChange}
          className='w-full p-2 mb-4 border rounded'
        />
        <input
          type='text'
          name='documento'
          placeholder='Número de documento'
          onChange={handleChange}
          className='w-full p-2 mb-4 border rounded'
        />
        <input
          type='text'
          name='estado'
          placeholder='Estado'
          onChange={handleChange}
          className='w-full p-2 mb-4 border rounded'
        />
        <input
          type='text'
          name='direccion'
          placeholder='Torre/Apartamento que se dirige'
          onChange={handleChange}
          className='w-full p-2 mb-4 border rounded'
        />
        <button type='submit' className='w-full p-2 bg-blue-500 text-white rounded'>
          Guardar
        </button>
      </form>

      <Link to='/photoCapture' className='w-auto p-2 bg-blue-500 text-white rounded'>
        Atras
      </Link>
    </div>
  )
}

export default QuickRegistration
