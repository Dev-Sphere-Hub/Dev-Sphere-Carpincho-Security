import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const ToggleNav = ({ activeNavVerticas, handleClickNavVerticas }) => {
  return (
    <button
      className='activeNavVerical w-[50px] h-[50px] bg-slate-300 rounded-[3px] text-md z-30 flex flex-col justify-center items-center gap-1'
      onClick={handleClickNavVerticas}
    >
      {/* móvil */}
      <span className={`w-[30px] h-[4px] bg-gray-600 rounded-sm transition-all duration-300 ease-linear ${activeNavVerticas ? 'transform rotate-45 translate-x-0 translate-y-[8px]' : ''} lg:hidden`} />
      <span className={`w-[30px] h-[4px] bg-slate-500 rounded-sm transition-all duration-300 ease-linear ${activeNavVerticas ? '-translate-x-7 opacity-0' : ''} lg:hidden`} />
      <span className={`w-[30px] h-[4px] bg-slate-500 rounded-sm transition-all duration-300 ease-linear ${activeNavVerticas ? 'transform -rotate-45 translate-x-0 -translate-y-[8px]' : ''} lg:hidden`} />

      {/* lg */}
      {activeNavVerticas
        ? (
          <IoIosArrowBack className='hidden lg:block' size={25} />
          )
        : (
          <IoIosArrowForward className='hidden lg:block' size={25} />
          )}
    </button>
  )
}

export default ToggleNav
