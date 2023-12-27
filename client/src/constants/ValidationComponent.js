import { useState } from 'react'

const ValidationComponet = ({ event }) => {
// para las validaciones
  const [fullName, setFullName] = useState('')
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [documentId, setDocumentId] = useState('')
  const [imagen, setImage] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [persona, setPersona] = useState('')
  const [descripcion, setDescripcion] = useState('')

  // para manejar los errores
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const validateForm = () => {
    const validateErrors = {}

    if (!fullName.trim()) {
      validateErrors.fullName = 'El nombre es obligatorio'
    } else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      validateErrors.fullName = 'El nombre solo puede contener letras'
    }

    if (!name.trim()) {
      validateErrors.name = 'El nombre es obligatorio'
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      validateErrors.name = 'El nombre solo puede contener letras'
    }

    if (!lastname.trim()) {
      validateErrors.lastname = 'El apellido es obligatorio'
    } else if (!/^[a-zA-Z\s]+$/.test(lastname)) {
      validateErrors.lastname = 'El apellido solo puede contener letras'
    }

    if (!email.trim()) {
      validateErrors.email = 'El email es obligatorio'
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      validateErrors.email = 'El email no es valido'
    }

    if (!phone.trim()) {
      validateErrors.phone = 'El teléfono es obligatorio'
    } else if (!/^\d+$/.test(phone)) {
      validateErrors.phone = 'El teléfono solo puede contener números'
    } else if (phone.length > 9) {
      validateErrors.phone = 'El teléfono debe tener mas de 8 dígitos'
    }

    if (!documentId.trim()) {
      validateErrors.documentId = 'El DNI es obligatorio'
    } else if (!/^\d+$/.test(documentId)) {
      validateErrors.documentId = 'El DNI solo puede contener números'
    } else if (documentId.length < 8) {
      validateErrors.documentId = 'El DNI no puede tener menos de 8 dígitos'
    }

    if (!imagen) {
      validateErrors.captureImage = 'La foto es obligatoria'
    } else if (imagen.size > 3000000) {
      validateErrors.captureImage = 'La foto debe tener menos de 3MB'
    }

    if (!password.trim()) {
      validateErrors.password = 'La contraseña es obligatoria'
    } else if (password.length < 6) {
      validateErrors.password = 'La contraseña debe tener al menos 6 caracteres'
    } else if (password.length > 20) {
      validateErrors.password = 'La contraseña debe tener menos de 20 caracteres'
    }

    if (!persona.trim()) {
      validateErrors.persona = 'La persona es obligatoria'
    } else if (persona.length > 20) {
      validateErrors.persona = 'La persona debe tener menos de 20 caracteres'
    } else if (persona.length < 3) {
      validateErrors.persona = 'La persona debe tener al menos 3 caracteres'
    }

    if (!descripcion.trim()) {
      validateErrors.descripcion = 'La descripcion es obligatoria'
    } else if (descripcion.length > 20) {
      validateErrors.descripcion = 'La descripcion debe tener menos de 20 caracteres'
    }

    return validateErrors
  }

  return {
    fullName,
    name,
    lastname,
    email,
    phone,
    documentId,
    imagen,
    persona,
    descripcion,
    errors,
    successMessage,
    setFullName,
    setEmail,
    setPhone,
    setDocumentId,
    setImage,
    setErrors,
    setSuccessMessage,
    setName,
    setLastname,
    password,
    setPassword,
    setPersona,
    setDescripcion,
    validateForm

  }
}

export default ValidationComponet
