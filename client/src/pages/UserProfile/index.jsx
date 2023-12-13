import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { useAuthStore } from '../../store/AuthStore/AuthStore'
import { FaRegEdit } from 'react-icons/fa'

const UserProfile = () => {
  const { token, fetchUserData, user } = useAuthStore()

  console.log('token --> ', token)

  // permite editar los campos del perfil
  const [editFullName, setEditFullName] = useState(false)
  const [editEmail, setEditEmail] = useState(false)
  const [editPhone, setEditPhone] = useState(false)
  const [editDni, setEditDni] = useState(false)

  // para las validaciones
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [documentId, setDocumentId] = useState('')
  // para manejar los errores
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    token && fetchUserData(token)
  }, [token])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    console.log('data --> ', data)
  }

  return (
    <div className='w-[100%] h-[100%] z-10  grid place-content-center'>
      <section className='w-[100%] h-auto flex flex-col justify-start items-center gap-5'>
        <Link className='w-[287px] h-[63px] bg-[#ccdebc] rounded-[15px] flex flex-row justify-around items-center text-black font-semibold text-lg font-titulo shadow-custom' to='/historial'>
          <span className='text-2xl'><IoIosArrowBack /></span>
          Editar Perfil
        </Link>

        <form
          onSubmit={handleSubmit}
          className='w-[300px] h-auto  p-3 flex flex-col justify-start items-center gap-3' action=''
        >
          <div>
            <img className='w-[90px] h-[90px] rounded-full object-cover shadow-custom' src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381196/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_ujhmyj.jpg' alt='carpincho image ' />
          </div>

          <label htmlFor='fullName' className='w-[100%]  flex flex-col justify-start items-start relative'>
            Nombre y Apellido
            {editFullName
              ? (
                <input className='w-[100%] h-[54px] border-2 rounded-md outline-none px-3 text-xs shadow-custom' type='text' name='fullName' id='fullName' placeholder='Ingresa Nombre y Apellido' />
                )
              : (
                <div className='w-[100%] h-[54px] border-2 rounded-md outline-none px-3 text-xs shadow-custom bg-white flex font-titulo text-gray-400 font-semibold justify-start items-center capitalize relative'>{user?.fullName}
                  <button className='w-[30px] h-[30px] rounded-md bg-green-400 text-white absolute right-1 top-auto text-xl grid place-content-center ' onClick={(e) => setEditFullName(true)}>
                    <FaRegEdit />
                  </button>
                </div>
                )}
          </label>

          <label htmlFor='email' className='w-[100%] flex flex-col justify-start items-start'>
            Email
            {editEmail
              ? (
                <input className='w-[100%] h-[54px] border-2 rounded-md outline-none px-3 text-xs shadow-custom' type='email' name='email' id='email' placeholder='Ingresa Email' />)
              : (
                <div className='w-[100%] h-[54px] border-2 rounded-md outline-none px-3 text-xs shadow-custom bg-white flex font-titulo text-gray-400 font-semibold justify-start items-center capitalize relative'>{user?.email}
                  <button className='w-[30px] h-[30px] rounded-md bg-green-400 text-white absolute right-1 top-auto text-xl grid place-content-center ' onClick={(e) => setEditEmail(true)}>
                    <FaRegEdit />
                  </button>
                </div>
                )}
          </label>

          <label htmlFor='phone' className='w-[100%] flex flex-col justify-start items-start'>
            Telefono
            {editPhone
              ? (
                <input className='w-[100%] h-[54px] border-2 rounded-md outline-none px-3 text-xs shadow-custom' type='text' name='phone' id='phone' placeholder='Ingresa Telefono' />
                )
              : (
                <div className='w-[100%] h-[54px] border-2 rounded-md outline-none px-3 text-xs shadow-custom bg-white flex font-titulo text-gray-400 font-semibold justify-start items-center capitalize relative'>{user?.phone}
                  <button className='w-[30px] h-[30px] rounded-md bg-green-400 text-white absolute right-1 top-auto text-xl grid place-content-center ' onClick={(e) => setEditPhone(true)}>
                    <FaRegEdit />
                  </button>
                </div>
                )}
          </label>

          <label htmlFor='documentId' className='w-[100%] flex flex-col justify-start items-start'>
            DNI
            {
              editDni
                ? (<input className='w-[100%] h-[54px] border-2 rounded-md outline-none px-3 text-xs shadow-custom' type='text' name='documentId' id='documentId' placeholder='Ingresa DNI' />)
                : (
                  <div className='w-[100%] h-[54px] border-2 rounded-md outline-none px-3 text-xs shadow-custom bg-white flex font-titulo text-gray-400 font-semibold justify-start items-center capitalize relative'>{user?.documentId}
                    <button className='w-[30px] h-[30px] rounded-md bg-green-400 text-white absolute right-1 top-auto text-xl grid place-content-center ' onClick={(e) => setEditDni(true)}>
                      <FaRegEdit />
                    </button>
                  </div>
                  )
            }

          </label>

          <button
            type='submit'
            className='w-[290px] h-[50px] rounded-3xl bg-gradient-to-r from-green-500 via-green-700 to-blue-400  font-titulo font-medium text-white shadow-custom'
          >
            Guardar cambios
          </button>
        </form>
      </section>
    </div>
  )
}

export default UserProfile

/**
        "data": {
        "_id": "657501f3e8811871c73d5bf9",
        "type": "safety_guard",
        "fullName": "guille nec",
        "email": "guillermoneculqueo123@gmail.com",
        "phone": "2944396888",
        "documentId": "33654987",
        "is_authorized": true,
        "__v": 0
    }
*/
