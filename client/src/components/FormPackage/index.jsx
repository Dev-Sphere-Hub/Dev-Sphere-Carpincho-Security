import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import StylesForm from '../../constants/StylesForm'
// import usePhotoCaptureStore from '../../store/PhotoCaptureStore/photoCaptureStore'
import { useAuthStore } from '../../store/AuthStore/AuthStore'
import usePackageStore from '../../store/PackageStore/PackageStore'

const FormPackage = () => {
  const listOfDestanatarios = [
    {
      id: '658375c9d04ff39fb8c25440',
      fullname: 'luis alberto messi'
    },
    {
      id: '65811de01ad27716de0fad94',
      fullname: 'guillermo neculqueo'
    }
  ]

  const listOfPackageTypes = [
    'Documentos',
    'Paquete pequeño',
    'Paquete mediano',
    'Paquete grande',
    'Electrónicos',
    'Alimentos',
    'Ropa',
    'Otros'
  ]
  const { subirPaquetes, errorPaquete } = usePackageStore()
  const { token } = useAuthStore()
  // const { captureImage } = usePhotoCaptureStore()
  const { styleForm, styleInput, styleButton } = StylesForm()

  // const navigate = useNavigate()
  const [type, setType] = useState('')
  const [recipient, setRecipient] = useState('')
  const [deliverer, setDeliverer] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')

  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('') // id del receptor

  const validateForm = () => {
    const validateErrors = {}

    if (!type) {
      validateErrors.type = 'El tipo de paquete es obligatorio'
    } else if (type === 'Selecciona un status') {
      validateErrors.type = 'El tipo de paquete es obligatorio'
    }

    if (!recipient) {
      validateErrors.recipient = 'El destinatario es obligatorio'
    } else if (recipient === 'Selecciona un destinatario') {
      validateErrors.recipient = 'El destinatario es obligatorio'
    }

    if (!deliverer) {
      validateErrors.deliverer = 'El nombre del repartidor es obligatorio'
    } else if (!/^[a-zA-Z\s]+$/.test(deliverer)) {
      validateErrors.deliverer = 'El nombre del repartidor solo puede contener letras'
    } else if (deliverer.length < 3) {
      validateErrors.deliverer = 'El nombre del repartidor debe tener al menos 3 caracteres'
    }

    if (!description) {
      validateErrors.description = 'La descripción es obligatoria'
    } else if (description.length < 10) {
      validateErrors.description = 'La descripción debe tener al menos 10 caracteres'
    } else if (description.length > 150) {
      validateErrors.description = 'La descripción debe tener menos de 150 caracteres'
    }

    if (!status) {
      validateErrors.status = 'El status es obligatorio'
    } else if (status === 'Selecciona un status') {
      validateErrors.status = 'El status es obligatorio'
    }

    return validateErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationErrors = validateForm()
    console.log('validateError ->', validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSuccessMessage('')
      return
    }

    const formData = new FormData(event.target)
    // console.log('imagen capturada', captureImage)
    const image = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xataka.com.mx%2Fbasics%2Fcomo-seguir-envio-mercado-libre-web-celular&psig=AOvVaw3XQ-VjK4GhxHKdmrqG037m&ust=1703666426187000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODv3JParIMDFQAAAAAdAAAAABAD'

    formData.append('photoURL', image)

    // if (captureImage) {
    //   formData.append('photoURL', captureImage)
    // }

    const data = Object.fromEntries(formData)
    console.log('Data a enviar al servidor:', data)
    setErrors({})
    setSuccessMessage('Validacion exitosa')
    setTimeout(() => {
      setSuccessMessage('')
    }, 3000)

    try {
      const response = await subirPaquetes(token, data)
      console.log('response --> ', response)
    } catch (error) {
      console.log(error)
      setErrors({ error: 'Error al actualizar el perfil' })
      setSuccessMessage('')
    }

    // navigate('/historial/paquetes')
  }

  return (
    <div className='flex flex-col justify-center items-start'>
      {successMessage && <p className='text-green-500 text-center w-full'>{successMessage}</p>}
      {errorPaquete && <p className='text-red-500 text-center w-full'>{errorPaquete?.response?.data?.message}</p>}
      <form onSubmit={handleSubmit} className={`${styleForm} text-sm text-slate-800 font-parrafo`}>
        <select
          name='type'
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={`${styleInput}`}
        >
          <option value=''>Selecciona un tipo de paquete</option>
          {listOfPackageTypes.map((packageType, index) => (
            <option key={index} value={packageType}>
              {packageType}
            </option>
          ))}
        </select>
        {errors.type && <p className='text-red-500 text-left'>{errors.type}</p>}
        <select
          name='recipient'
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className={`${styleInput}`}
        >
          <option value=''>Selecciona un destinatario</option>
          {
          listOfDestanatarios.map((destinatario) => (
            <option key={destinatario.id} value={destinatario.id}>
              {destinatario.fullname}
            </option>
          ))
}
        </select>
        {errors.recipient && <p className='text-red-500 text-left'>{errors.recipient}</p>}
        <input
          type='text'
          name='deliverer'
          placeholder='nombre repartidor'
          className={`${styleInput}`}
          onChange={(e) => setDeliverer(e.target.value)}
          value={deliverer}
        />
        {errors.deliverer && <p className='text-red-500 text-left'>{errors.deliverer}</p>}
        <select
          name='status'
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className={`${styleInput}`}
        >
          <option value=''>Selecciona un status</option>
          <option value='received'>Recibido</option>
          <option value='delivered'>Entregado</option>
          <option value='refused'>rechasado</option>
          {/* Agrega más opciones según tus necesidades */}
        </select>
        {errors.status && <p className='text-red-500 text-left'>{errors.status}</p>}
        <textarea
          type='text'
          name='description'
          placeholder='descripcion'
          className={`${styleInput} resize-none`}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        {errors.description && <p className='text-red-500 text-left'>{errors.description}</p>}

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
