import React, { useState, useEffect } from 'react'
import useImageStore from '../../store/imagenStore/Imagen'
import { useAuthStore } from '../../store/AuthStore/AuthStore'
import useVisitStore from '../../store/VisitStore/VisitStore'

const FormPerson = () => {
  const { token } = useAuthStore()
  const { capturedImage } = useImageStore()

  const { subirVicita } = useVisitStore()
  const [form, setForm] = useState()

  useEffect(() => {
    if (capturedImage !== null) {
      // Aquí podrías actualizar formData en lugar de form
      setForm((prevData) => ({
        ...prevData
        // image: dataURItoBlob(capturedImage)
      }))
    }
  }, [capturedImage])

  const handleChange = (e) => {
    e.preventDefault()
    let updatedForm = {
      ...form,
      visitType: 'walking',
      [e.target.name]: e.target.value
    }

    if (capturedImage) {
      updatedForm = {
        ...updatedForm,
        image: capturedImage
      }
    }
    console.log('data Form ->', updatedForm)
    setForm(updatedForm)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await subirVicita(form, token)
      console.log('Respuetsasasas ->', response)
    } catch (error) {
      console.error('Error al realizar la solicitud:', error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className=''>
        <input type='text' name='visitorFullName' placeholder='Nombre y Apellido' onChange={handleChange} className='w-full bg-white  focus:outline-none p-2 mb-4 border rounded' />
        <input type='text' name='visitorIdentityNumber' placeholder='Número de documento' onChange={handleChange} className='w-full bg-white focus:outline-none p-2 mb-4 border rounded' />
        {/* <input type='text' name='homeOwnerId' placeholder='Nombre de propietario' onChange={handleChange} className='w-full bg-white focus:outline-none p-2 mb-4 border rounded' /> */}
        <select
          id='state'
          name='state'
          onChange={handleChange}
          className='w-full bg-white border-2 border-gray-200 rounded-md p-2 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
          required
        >
          <option value=''>
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
