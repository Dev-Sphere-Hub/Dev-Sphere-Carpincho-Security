import React, { useEffect, useState } from 'react'
import personas from '../../../../db/db_registros'
import './styles.css'
import useNavStore from '../../../../store/NavStore/navStore'
import { BiSolidRightArrowAlt, BiSolidLeftArrowAlt } from 'react-icons/bi'
import ListOfPeople from './components/ListOfPeople'

const Historial = () => {
  const { setActiveIndex } = useNavStore()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setActiveIndex('historial')
    return () => setActiveIndex(null)
  }, [])

  const itemsPerPage = 5

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = personas.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (action) => {
    if (action === 'next') {
      setCurrentPage((prev) => prev + 1)
    } else if (action === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  return (
    <div
      className='h-full w-[95%] sm:w-[90%] md:w-[90%] lg:w-[98%] xl:w-[98%] 2xl:w-[100%] lg:flex flex-col lg:justify-center lg:items-center overflow-x-scroll 2xl:overflow-auto scrollbar pb-2'

    >
      <div className='w-[1000px] 2xl:w-[100%] grid grid-cols-5  rounded-lg border-2 overflow-hidden border-colorCustom1 text-colorCustom4 font-titulo font-medium text-base'>
        <div className='bg-colorCustom1 py-2'>
          <h2 className='w-full text-center'>Empleado</h2>
        </div>
        <div className='bg-colorCustom1 py-2'>
          <span>Estado</span>
        </div>
        <div className='bg-colorCustom1 py-2'>
          <span>Publicado</span>
        </div>
        <div className='bg-colorCustom1 py-2'>
          <span>Categoria</span>
        </div>
        <div className='bg-colorCustom1 py-2 rounded-tr-md'>
          <span>Tipo</span>
        </div>

        <ListOfPeople personas={currentItems} />
      </div>
      <div className='w-[99%] max-w-[1000px] mx-auto py-3  paginationButtons flex justify-between items-center'>
        <button
          className='text-xl text-colorCustom1 hover:text-colorCustom2 transition-all ease-linear duration-300'
          onClick={() => paginate('prev')}
        ><BiSolidLeftArrowAlt />
        </button>
        <button
          className='text-xl text-colorCustom1 hover:text-colorCustom2 transition-all ease-linear duration-300'
          onClick={() => paginate('next')}
        ><BiSolidRightArrowAlt />
        </button>
      </div>

    </div>
  )
}

export default Historial
