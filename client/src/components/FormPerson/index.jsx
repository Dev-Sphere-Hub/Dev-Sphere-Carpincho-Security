import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useImageStore from '../../store/imagenStore/Imagen'
import { useAuthStore } from '../../store/AuthStore/AuthStore'
import useVisitStore from '../../store/VisitStore/VisitStore'

const FormPerson = ({ imagen }) => {
  const { token, user } = useAuthStore()
  const navigate = useNavigate()
  const { capturedImage } = useImageStore()
  const { registerVisit, addVisit } = useVisitStore() // Usa la función createVisit del store de visitas
  const [form, setForm] = useState({
    address: '',
    visitType: 'walking',
    visitorIdentityNumber: '',
    visitorFullName: '',
    state: '',
    photo: imagen,
    checkInBy: user._id,
    checkIn: '',
    __v: 0,
    checkOut: ''
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    // if (!form.visitorFullName || !form.visitorIdentityNumber || !form.homeOwnerId || !form.state || !form.address) {
    //   console.error('Faltan datos obligatorios')
    //   return
    // }

    try {
      // Usa la función createVisit del store de visitas para crear la visita
      await registerVisit(form, token, user._id)
      addVisit(form)
      console.log(form)
      console.log(token)
      navigate('/historial/historia', { state: { form } })
    } catch (error) {
      console.error('Error al realizar la solicitud:', error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className=''>
        <input type='text' name='visitorFullName' placeholder='Nombre y Apellido' onChange={handleChange} className='w-full bg-white  focus:outline-none p-2 mb-4 border rounded' />
        <input type='text' name='visitorIdentityNumber' placeholder='Número de documento' onChange={handleChange} className='w-full bg-white focus:outline-none p-2 mb-4 border rounded' />
        <input type='text' name='homeOwnerId' placeholder='Nombre de propietario' onChange={handleChange} className='w-full bg-white focus:outline-none p-2 mb-4 border rounded' />
        <select
          id='state'
          name='state'
          onChange={handleChange}
          className='w-full bg-white border-2 border-gray-200 rounded-md p-2 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
          required
        >
          <option value='' disabled>
            Estado
          </option>
          <option value='authorized'>Autorizado</option>
          <option value='unauthorized'>No Autorizadas</option>
        </select>
        <input type='text' name='address' placeholder='Torre/Apartamento que se dirige' onChange={handleChange} className=' bg-white w-full p-2 mb-4 border rounded' />
        <button type='submit' className='w-full p-2 bg-gradient-to-r from-green-500 via-green-700 to-blue-400 text-white rounded'>Guardar</button>
      </form>
    </div>
  )
}

export default FormPerson
