import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FormVehicle = ({ imagen }) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    nombre: '',
    documento: '',
    propietario: '',
    estado: '',
    direccion: '',
    patente: '',
    seguro: '',
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
    navigate('/historial/historia', { state: { form } })
    console.log(form)
  }
  return (
    <div>
      {/* <form onSubmit={handleSubmit} className=''>
        <h2 className='text-2xl font-bold mb-4'>Registro</h2>
        <div className=' text-white p-2 rounded-md   flex justify-around mb-5'>
          <button className='rounded-md w-full bg-slate-400'>Ingreso</button>
          <button className='rounded-md w-full  bg-slate-500'>Paqueteria</button>
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
      </form> */}
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <input type='text' name='nombre' placeholder='Nombre y Apellido' onChange={handleChange} className='w-full p-2 mb-4 border rounded' />
        <input type='text' name='documento' placeholder='Número de documento' onChange={handleChange} className='w-full p-2 mb-4 border rounded' />
        <input type='text' name='propietario' placeholder='Nombre de propietario' onChange={handleChange} className='w-full p-2 mb-4 border rounded' />
        <input type='text' name='estado' placeholder='Estado' onChange={handleChange} className='w-full p-2 mb-4 border rounded' />
        <input type='text' name='direccion' placeholder='Torre/Apartamento que se dirige' onChange={handleChange} className='w-full p-2 mb-4 border rounded' />
        <input type='text' name='patente' placeholder='Patente' onChange={handleChange} className='w-full p-2 mb-4 border rounded' />
        <input type='text' name='seguro' placeholder='Seguro' onChange={handleChange} className='w-full p-2 mb-4 border rounded' />
        <button type='submit' className='w-full p-2 bg-gradient-to-r from-green-500 via-green-700 to-blue-400 text-white rounded'>Guardar</button>
      </form>
    </div>
  )
}

export default FormVehicle
