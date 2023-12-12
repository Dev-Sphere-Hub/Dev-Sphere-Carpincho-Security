import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FormPackage = ({ imagen }) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    empresa: '',
    documento: '',
    procedencia: '',
    propietario: '',
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
    navigate('/historial/paquetes', { state: { form } })
    console.log(form)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col '>
        <input type='text' name='empresa' placeholder='Tipo' onChange={handleChange} className='w-full p-2 mb-4 border rounded' />
        <input type='text' name='procedencia' placeholder='Procedencia' onChange={handleChange} className='w-full p-2 mb-4 border rounded' />
        <input type='text' name='propietario' placeholder='Propietario receptor' onChange={handleChange} className='w-full p-2 mb-4 border rounded' />
        <textarea type='text' name='descripcion' placeholder='Descripcion' onChange={handleChange} className='w-full p-2 mb-4 border rounded' />
        <button type='submit' className='self-end w-full p-2 bg-gradient-to-r from-green-500 via-green-700 to-blue-400 text-white rounded shadow-custom'>Guardar</button>
      </form>
    </div>
  )
}

export default FormPackage
