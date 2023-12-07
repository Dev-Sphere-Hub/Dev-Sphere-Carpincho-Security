import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const formVehicle = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    nombre: '',
    seguro: '',
    patente: '',
    modelo: ''
    propietario: '',

  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/CamCapture/registerExito', { state: { form } })
    console.log(form)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className=''>
        <h2 className='text-2xl font-bold mb-4'>Registro</h2>
        <div className=' text-white p-2 rounded-md   flex justify-around mb-5'>
          <button className='rounded-md w-full bg-slate-400'>Ingreso</button>
          <button className='rounded-md w-full  bg-slate-500'>Egreso</button>
        </div>
        <div className=' text-white p-2 rounded-md   flex justify-around mb-5'>
          <button className='rounded-md w-full bg-slate-400'>Caminar</button>
          <button className='rounded-md w-full  bg-slate-500'>Vehiculo</button>
        </div>
        <input
          type='text'
          name='nombre'
          placeholder='Nombre y Apellido'
          onChange={handleChange}
          className='w-full p-2 mb-4 border rounded'
        />
        <input
          type='text'
          name='seguro'
          placeholder='Seguro'
          onChange={handleChange}
          className='w-full p-2 mb-4 border rounded'
        />
        <input
          type='text'
          name='patente'
          placeholder='Patente'
          onChange={handleChange}
          className='w-full p-2 mb-4 border rounded'
        />
        <input
          type='text'
          name='modelo'
          placeholder='Modelo'
          onChange={handleChange}
          className='w-full p-2 mb-4 border rounded'
        />
        <input
          type='text'
          name='propietario'
          placeholder='Propietario receptor'
          onChange={handleChange}
          className='w-full p-2 mb-4 border rounded'
        />
        <button type='submit' className='w-full p-2 bg-blue-500 text-white rounded'>
          Guardar
        </button>
      </form>
    </div>
  )
}

export default formVehicle
