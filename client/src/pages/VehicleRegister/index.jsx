import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CamCapture from '../../components/CamCapture'

const VehicleRegister = () => {
  const [formularioVisible, setFormularioVisible] = useState(null)

  const toggleFormulario = (formulario) => {
    setFormularioVisible(formularioVisible === formulario ? null : formulario)
  }

  const location = useLocation()
  const navigate = useNavigate()
  const imgSrc = location.state?.imagen

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
    navigate('/CamCapture/registerExito', { state: { form } })
    console.log(form)
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        {
      imgSrc && <img src={imgSrc} alt='preview' className='h-64 w-64 object-cover mb-4' />
      }
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
      </div>

    </>
  )
}

export default VehicleRegister
