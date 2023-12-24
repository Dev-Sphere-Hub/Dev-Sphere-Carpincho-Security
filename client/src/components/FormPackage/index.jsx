import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import StylesForm from '../../constants/StylesForm'
import usePhotoCaptureStore from '../../store/PhotoCaptureStore/photoCaptureStore'

const FormPackage = () => {
  const { styleForm, styleInput, styleButton } = StylesForm()
  const navigate = useNavigate()
  const { captureImage } = usePhotoCaptureStore()
  const [form, setForm] = useState({
  })

  useEffect(() => {
    setForm((prevForm) => ({ ...prevForm, photoUrl: captureImage }))
  }, [captureImage])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate('/historial/paquetes')
    console.log(form)
  }
  return (
    <div className='flex flex-col justify-center items-start'>
      <form onSubmit={handleSubmit} className={`${styleForm} text-sm text-slate-800 font-parrafo`}>
        <input
          type='text'
          name='empresa'
          placeholder='Tipo'
          onChange={handleChange}
          className={`${styleInput}`}
        />
        <input
          type='text'
          name='procedencia'
          placeholder='Procedencia'
          onChange={handleChange}
          className={`${styleInput}`}
        />
        <input
          type='text'
          name='propietario'
          placeholder='Propietario receptor'
          onChange={handleChange}
          className={`${styleInput}`}
        />
        <textarea
          type='text'
          name='descripcion'
          placeholder='Descripcion'
          onChange={handleChange}
          className={`${styleInput} resize-none`}
        />

        <button
          type='submit'
          className={`${styleButton} py-2`}
        >Guardar
        </button>
      </form>
    </div>
  )
}

export default FormPackage
