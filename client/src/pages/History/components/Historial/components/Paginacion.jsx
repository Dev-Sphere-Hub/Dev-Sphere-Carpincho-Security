import React from 'react'
import { BiSolidRightArrowAlt, BiSolidLeftArrowAlt } from 'react-icons/bi'

const Paginacion = ({ paginate }) => {
  return (
    <div className='w-[1000px] mx-auto py-3  paginationButtons flex justify-between items-center'>
      <button
        className='text-xl text-green-500 hover:text-colorCustom2 transition-all ease-linear duration-300'
        onClick={() => paginate('prev')}
      ><BiSolidLeftArrowAlt />
      </button>
      <button
        className='text-xl text-blue-400 hover:text-colorCustom2 transition-all ease-linear duration-300'
        onClick={() => paginate('next')}
      ><BiSolidRightArrowAlt />
      </button>
    </div>
  )
}

export default Paginacion
