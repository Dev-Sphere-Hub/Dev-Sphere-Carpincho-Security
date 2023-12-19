import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useImageStore from '../../store/imagenStore/Imagen'
const FormVehicle = () => {
  const navigate = useNavigate()
  const { capturedImage } = useImageStore()
  const [form, setForm] = useState({
    nombre: '',
    documento: '',
    propietario: '',
    estado: '',
    direccion: '',
    patente: '',
    seguro: '',
    photo: capturedImage

  })

  useEffect(() => {
    setForm((prevForm) => ({ ...prevForm, photo: capturedImage }))
  }, [capturedImage])

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
