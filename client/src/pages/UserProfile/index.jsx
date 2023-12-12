import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { useAuthStore } from '../../store/AuthStore/AuthStore'

const UserProfile = () => {
  const { token, fetchUserData } = useAuthStore()

  console.log('token --> ', token)

  useEffect(() => {
    token && fetchUserData(token)
  }, [token])

  return (
    <div className='w-[100%] h-[100%] z-10 bg-purple-400 grid place-content-center'>
      <section className='w-[100%] h-auto flex flex-col justify-start items-center gap-5'>
        <Link className='w-[287px] h-[63px] bg-[#ccdebc] rounded-[15px] flex flex-row justify-around items-center text-black font-semibold text-lg font-titulo' to='/historial'>
          <span className='text-2xl'><IoIosArrowBack /></span>
          Editar Perfil
        </Link>

        <form className='w-[300px] h-auto bg-teal-50 p-3 flex flex-col justify-start items-center' action=''>
          <div>
            <img className='w-[90px] h-[90px] rounded-full border-2 border-green-300 object-cover' src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381196/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_ujhmyj.jpg' alt='carpincho image ' />
          </div>

          <label htmlFor='name' className='w-[100%] bg-green-100 flex flex-col justify-start items-start'>
            Nombre
            <input className='w-[100%] h-[54px] border-2 rounded-md outline-none px-3 text-xs' type='text' name='name' id='name' placeholder='Ingresa Nombre' />
          </label>
        </form>
      </section>
    </div>
  )
}

export default UserProfile
