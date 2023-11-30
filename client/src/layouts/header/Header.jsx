import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

const Header = () => {
  return (
    <header className='headerContainer text-colorCustom1 bg-white fixed top-0 left-0 lg:left-0  w-[100%] h-[130px] lg:h-auto  flex justify-center items-center font-bold text-xl uppercase text-center pt-[0] z-50'>
      <NavBar />
    </header>
  )
}

export default Header
