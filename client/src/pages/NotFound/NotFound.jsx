import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='w-full max-h-full h-[calc(100vh-100px)] mt-0 flex flex-col justify-center items-center bg-greenCustom gap-3'>
      <h1 className='font-titulo text-[100px] font-bold text-whiteCustom1'>404 </h1>
      <h2 className='font-parrafo text-[22px] font-semibold text-whiteCustom1'>Opps! That page can't be found</h2>
      <p className='font-parrafo text-[18px] font-normal text-whiteCustom1'>The page you are looking for it maybe deleted</p>
      <Link
        to='/'
        className='mt-[1rem] font-parrafo text-[1rem] font-semibold border-2 border-whiteCustom1 text-whiteCustom1 px-[1.5rem] py-[.8rem] rounded-[7px] hover:text-oranjeCustom hover:bg-whiteCustom1 hover:border-oranjeCustom transition-all duration-200 ease-in'
      >
        Go To Home
      </Link>
    </section>
  )
}

export default NotFound
