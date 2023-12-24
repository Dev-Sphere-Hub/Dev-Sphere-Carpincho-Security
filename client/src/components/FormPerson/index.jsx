import React, { useState, useEffect } from 'react'
import { useAuthStore } from '../../store/AuthStore/AuthStore'
import useVisitStore from '../../store/VisitStore/VisitStore'
import StylesForm from '../../constants/StylesForm'
import usePhotoCaptureStore from '../../store/PhotoCaptureStore/photoCaptureStore'

const FormPerson = () => {
  const { token } = useAuthStore()
  const { captureImage } = usePhotoCaptureStore()

  const { subirVicita } = useVisitStore()
  const [form, setForm] = useState()

  const { styleForm, styleInput, styleButton } = StylesForm()

  useEffect(() => {
    if (captureImage !== null) {
      // Aquí podrías actualizar formData en lugar de form
      setForm((prevData) => ({
        ...prevData
        // image: dataURItoBlob(capturedImage)
      }))
    }
  }, [captureImage])

  const handleChange = (e) => {
    e.preventDefault()
    let updatedForm = {
      ...form,
      visitType: 'walking',
      [e.target.name]: e.target.value
    }

    if (captureImage) {
      updatedForm = {
        ...updatedForm,
        image: captureImage
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
    <div className='flex flex-col justify-center items-start'>
      <form onSubmit={handleSubmit} className={`${styleForm} text-sm text-slate-800 font-parrafo`}>
        <input
          type='text'
          name='visitorFullName'
          placeholder='Nombre y Apellido'
          onChange={handleChange}
          className={`${styleInput}`}
        />
        <input
          type='text'
          name='visitorIdentityNumber'
          placeholder='Número de documento'
          onChange={handleChange}
          className={`${styleInput}`}
        />
        {/* <input type='text' name='homeOwnerId' placeholder='Nombre de propietario' onChange={handleChange} className='w-full bg-white focus:outline-none p-2 mb-4 border rounded' /> */}
        <input
          type='text'
          name='address'
          placeholder='Torre/Apartamento que se dirige'
          onChange={handleChange}
          className={`${styleInput}`}
        />
        <select
          id='state'
          name='state'
          onChange={handleChange}
          className={`${styleInput}`}
          // className='w-full bg-white border-2 border-gray-200 rounded-md p-2 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
          required
        >
          <option value=''>
            Estado
          </option>
          <option value='authorized'>Autorizado</option>
          <option value='unauthorized'>No Autorizadas</option>
        </select>
        <button type='submit' className={`${styleButton} py-2`}>Guardar</button>
      </form>
    </div>
  )
}

export default FormPerson
