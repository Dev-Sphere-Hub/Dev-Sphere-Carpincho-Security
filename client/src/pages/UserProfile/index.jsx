import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { useAuthStore } from '../../store/AuthStore/AuthStore'

const UserProfile = () => {
  const { token, fetchUserData, user } = useAuthStore()

  console.log('token --> ', token)

  useEffect(() => {
    token && fetchUserData(token)
  }, [token])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    console.log('data --> ', data)
  }

  const [editFullName, setEditFullName] = useState(false)

  return (
    <div className='w-[100%] h-[100%] z-10 bg-purple-400 grid place-content-center'>
      <section className='w-[100%] h-auto flex flex-col justify-start items-center gap-5'>
        <Link className='w-[287px] h-[63px] bg-[#ccdebc] rounded-[15px] flex flex-row justify-around items-center text-black font-semibold text-lg font-titulo' to='/historial'>
          <span className='text-2xl'><IoIosArrowBack /></span>
          Editar Perfil
        </Link>

        <form
          onSubmit={handleSubmit}
          className='w-[300px] h-auto bg-teal-50 p-3 flex flex-col justify-start items-center gap-3' action=''
        >
          <div>
            <img className='w-[90px] h-[90px] rounded-full border-2 border-green-300 object-cover shadow-custom' src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381196/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_ujhmyj.jpg' alt='carpincho image ' />
          </div>

          <label htmlFor='fullName' className='w-[100%] bg-green-100 flex flex-col justify-start items-start'>
            Nombre y Apellido
            {editFullName
              ? (
                <input className='w-[100%] h-[54px] border-2 rounded-md outline-none px-3 text-xs shadow-custom' type='text' name='fullName' id='fullName' placeholder='Ingresa Nombre y Apellido' />

                )
              : (
                <p className='w-[100%] h-[54px] border-2 rounded-md outline-none px-3 text-xs shadow-custom bg-white flex font-titulo text-gray-400 font-semibold justify-start items-center capitalize'>{user?.fullName}</p>

                )}
          </label>

          <label htmlFor='email' className='w-[100%] bg-green-100 flex flex-col justify-start items-start'>
            Email
            <input className='w-[100%] h-[54px] border-2 rounded-md outline-none px-3 text-xs shadow-custom' type='email' name='email' id='email' placeholder='Ingresa Email' />
          </label>

          <label htmlFor='phone' className='w-[100%] bg-green-100 flex flex-col justify-start items-start'>
            Telefono
            <input className='w-[100%] h-[54px] border-2 rounded-md outline-none px-3 text-xs shadow-custom' type='text' name='phone' id='phone' placeholder='Ingresa Telefono' />
          </label>

          <label htmlFor='documentId' className='w-[100%] bg-green-100 flex flex-col justify-start items-start'>
            DNI
            <input className='w-[100%] h-[54px] border-2 rounded-md outline-none px-3 text-xs shadow-custom' type='text' name='documentId' id='documentId' placeholder='Ingresa DNI' />
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
