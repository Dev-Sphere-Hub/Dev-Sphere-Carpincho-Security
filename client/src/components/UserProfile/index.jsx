import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

const UserProfile = () => {
  return (
    <div className='w-[100%] h-[100%] z-10 bg-purple-400 grid place-content-center'>
      <section className='w-[100%] h-auto'>
        <Link className='w-[287px] h-[63px] bg-[#ccdebc] rounded-[15px] flex flex-row justify-around items-center' to='/historial'><BiArrowBack /> Editar Perfil</Link>
      </section>
    </div>
  )
}

export default UserProfile
