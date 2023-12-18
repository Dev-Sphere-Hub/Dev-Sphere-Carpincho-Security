import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PaqueteriaForm = ({ imagen }) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    nombre: '',
    documento: '',
    estado: '',
    descripcion: '',
    imagen

  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('historial/paquetes', { state: { form } })
    console.log(form)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col pt-8' />
      <input type='text' name='nombre' placeholder='Nombre y Apellido' onChange={handleChange} className='w-full p-2 mb-4 border rounded' />
      <input type='number' name='documento' placeholder='Número de documento' onChange={handleChange} className='w-full p-2 mb-4 border rounded' />
      <label>Estado</label>
      <select className='w-full p-2 mb-4 border rounded'>
        <option>Recibido</option>
        <option>Rechazado</option>
      </select>
      <input type='text' name='decripcion' placeholder='Observaciones' className='w-full p-2 mb-4 border rounded' />
      <button type='submit' className='self-end w-full p-2 bg-gradient-to-r from-green-500 via-green-700 to-blue-400 text-white rounded shadow-custom'>Registrar</button>
    </div>
  )
}

export default PaqueteriaForm
