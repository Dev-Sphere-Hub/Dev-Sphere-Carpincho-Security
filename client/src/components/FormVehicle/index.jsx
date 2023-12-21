import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useImageStore from '../../store/imagenStore/Imagen'
import { useAuthStore } from '../../store/AuthStore/AuthStore'
import useVehicleStore from '../../store/VehicleStore/VehicleStore'
const FormVehicle = () => {
  const navigate = useNavigate()
  const { capturedImage } = useImageStore()
  const { token } = useAuthStore()
  const { updateVehicles, message, badmessage } = useVehicleStore()

  const [plateCode, setPlateCode] = useState('')
  const [carInsurance, setCarInsurance] = useState('')
  const [details, setDetails] = useState('')

  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const validateForm = () => {
    const validateErrors = {}

    if (!plateCode.trim()) {
      validateErrors.plateCode = 'La patente es obligatoria'
    } else if (plateCode.length !== 6) {
      validateErrors.plateCode = 'La patente debe tener al menos 6 caracteres'
    } else if (!/^[A-Z0-9]+$/.test(plateCode)) {
      validateErrors.plateCode = 'La patente solo puede contener letras may y números'
    }

    if (!carInsurance.trim()) {
      validateErrors.carInsurance = 'El seguro es obligatorio'
    } else if (carInsurance.length > 20) {
      validateErrors.carInsurance = 'El seguro debe tener menos de 20 caracteres'
    } else if (carInsurance.length < 11) {
      validateErrors.carInsurance = 'El seguro debe tener 11 caracteres'
    }

    if (!details.trim()) {
      validateErrors.details = 'El detalle es obligatorio'
    } else if (details.length < 20) {
      validateErrors.details = 'El detalle debe tener al menos 20 caracteres'
    }
    return validateErrors
  }

  const handelSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validateForm()
    console.log('validateError ->', validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSuccessMessage('')
      return
    }

    const formData = new FormData(e.target)
    console.log('imagen capturada', capturedImage)

    if (capturedImage) {
      formData.append('image', capturedImage)
    }

    const data = Object.fromEntries(formData)

    console.log('data enviada al server:', data)
    console.log('token', token)

    setErrors({})
    setSuccessMessage('Registro exitoso')
    setTimeout(() => {
      setSuccessMessage('')
    }, 300)

    try {
      const response = await updateVehicles(data, token)
      console.log('response --> ', response)
      console.log('Vehiculo registrado correctamente')
      setSuccessMessage('Registro exitoso')
      setTimeout(() => {
        setSuccessMessage('')
        navigate('/historial/vehiculos')
      }, 3000)
    } catch (error) {
      console.log(error)
      setErrors({ error: 'Error al registrar el vehiculo' })
      setSuccessMessage('')
    }
  }
  // sryles
  const styleForm = 'mx-auto min-w-[300px] w-[300px] md:w-[400px] lg:w-[500px] h-auto  p-5 flex flex-col justify-start items-center gap-3 backdrop-blur-md backdrop-saturate-180 bg-[#5b7dad50] bg-opacity-80 border-2 rounded-md border-white border-opacity-20 overflow-hidden'
  const styleInput = 'w-full p-2 mb-4 border rounded outline-none '

  console.log('mensaje', message)
  console.log('basmensaje', badmessage)
  return (
    <div className='flex flex-col justify-center items-start'>
      {message && <p className='text-green-500 text-center w-full'>{message}</p>}
      {badmessage && <p className='text-red-500 w-full text-center'>{badmessage}</p>}
      {successMessage && <p className='text-green-500 w-full text-center'>{successMessage}</p>}
      <form onSubmit={handelSubmit} className={`${styleForm} text-sm text-slate-800 font-parrafo`}>
        <input
          type='text'
          name='plateCode'
          placeholder='Patente'
          className={`${styleInput}`}
          value={plateCode}
          onChange={(e) => setPlateCode(e.target.value)}
        />
        {errors.plateCode && <p className='text-red-500 text-left'>{errors.plateCode}</p>}
        <input
          type='text'
          name='carInsurance'
          placeholder='Seguro'
          className={`${styleInput}`}
          value={carInsurance}
          onChange={(e) => setCarInsurance(e.target.value)}
        />
        {errors.carInsurance && <p className='text-red-500 text-left'>{errors.carInsurance}</p>}
        <input
          type='text'
          name='details'
          placeholder='Detalle'
          className={`${styleInput}`}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        {errors.details && <p className='text-red-500 text-left'>{errors.details}</p>}

        <button type='submit' className='w-full p-2 bg-gradient-to-r from-green-500 via-green-700 to-blue-400 text-white rounded'>Guardar</button>
      </form>
    </div>
  )
}

export default FormVehicle
