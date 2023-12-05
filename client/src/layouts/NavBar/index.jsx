import { useNavigate } from 'react-router-dom'
import React from 'react'

const NavBar = () => {
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate('/')
  }

  const imagePerfil = 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381196/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_ujhmyj.jpg'
  const user = null
  return (
    <div className='w-[90%] flex flex-row justify-between items-center bg-white text-colorCustom4 '>
      <h1 className='text-left pl-1 capitalize font-titulo text-xl font-bold'>Hola {user || 'user!'}</h1>
      <div
        onClick={handleNavigation}
        className='w-[50px] h-[50px] rounded-full border-2 border-colorCustom1 grid place-content-center overflow-hidden'
      >
        <img
          className='w-full h-full object-cover'
          src={imagePerfil || 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381197/carpincho/2cf02024-3b12-478d-9fdf-998858aeaaee_zdvbm9.webp'}
          alt='carpincho con lentes de sol, chaleco y cadena de oro, realista generado con lexicaart'
        />
      </div>
    </div>
  )
}

export default NavBar
