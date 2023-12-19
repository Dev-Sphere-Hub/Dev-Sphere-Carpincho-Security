import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useImageStore from '../../store/imagenStore/Imagen'
import { useAuthStore } from '../../store/AuthStore/AuthStore'
import useVisitStore from '../../store/VisitStore/VisitStore'

const FormPerson = () => {
  const { token, user } = useAuthStore()
  console.log(token)
  console.log(user)
  const navigate = useNavigate()
  const { capturedImage } = useImageStore()

  const { registerVisit } = useVisitStore()
  const [form, setForm] = useState({
    address: '',
    visitType: 'walking',
    visitorIdentityNumber: '',
    visitorFullName: '',
    state: '',
    photo: capturedImage

  })

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
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // const dataURItoBlob = (dataURI) => {
  //   const byteString = atob(dataURI.split(',')[1])
  //   const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  //   const ab = new ArrayBuffer(byteString.length)
  //   const ia = new Uint8Array(ab)

  //   for (let i = 0; i < byteString.length; i++) {
  //     ia[i] = byteString.charCodeAt(i)
  //   }

  //   return new Blob([ab], { type: mimeString })
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.visitorFullName || !form.visitorIdentityNumber || !form.state || !form.address) {
      console.error('Faltan datos obligatorios')
      return
    }

    try {
      await registerVisit(form, token)
      console.log(form)
      console.log(token)
      navigate('/historial/historia', { state: { form, token } })
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
