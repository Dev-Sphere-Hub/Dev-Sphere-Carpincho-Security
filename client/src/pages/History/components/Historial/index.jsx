import React, { useEffect, useState } from 'react'
// import personas from '../../../../db/db_registros'
import './styles.css'
import useNavStore from '../../../../store/NavStore/navStore'
import ListOfPeople from './components/ListOfPeople'
import Paginacion from './components/Paginacion'
import axios from 'axios'
import useVisitStore from '../../../../store/VisitStore/VisitStore'
import { endpoints } from '../../../../constants/api'
import Search from '../../../../components/search'
import { useAuthStore } from '../../../../store/AuthStore/AuthStore'

const Historial = () => {
  const { setActiveIndex } = useNavStore()
  const [currentPage, setCurrentPage] = useState(1)

  const { visitas, setVisitas } = useVisitStore()
  const [filterVisitas, setFilterVisitas] = useState([])
  const { token } = useAuthStore()

  useEffect(() => {
    axios.get(endpoints.visitas, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        setVisitas(res.data.data)
        setFilterVisitas(res.data.data)
      })
      .catch(err => console.log(err))
  }, [setVisitas])

  useEffect(() => {
    setActiveIndex('historial')
    return () => setActiveIndex(null)
  }, [])

  const itemsPerPage = 5
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  // const currentItems = visitas?.slice(indexOfFirstItem, indexOfLastItem)
  const currentItems = filterVisitas?.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (action) => {
    if (action === 'next') {
      setCurrentPage((prev) => prev + 1)
    } else if (action === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const handleSearch = (filterData) => {
    setFilterVisitas(filterData)
  }

  console.log('Vicitas --> ', visitas)

  return (
    <div
      className='h-full w-[95%] sm:w-[90%] md:w-[90%] lg:w-[98%] xl:w-[98%] 2xl:w-[100%] lg:flex flex-col lg:justify-center lg:items-center overflow-x-scroll 2xl:overflow-auto scrollbar pb-2 gap-4'

    >
      <Search allVisitas={visitas} nameColumn='visitorFullName' handleSearch={handleSearch} />
      {/* aca puedo componetizar mas */}
      <div className='mt-3 w-[1000px] 2xl:w-[100%] grid grid-cols-5  rounded-lg border-2 overflow-hidden bg-gradient-to-r from-green-500 via-green-700 to-blue-400  text-colorCustom4 font-titulo font-medium text-base'>
        <div className=' py-2'>
          <h2 className='w-full text-center'>Empleado</h2>
        </div>
        <div className=' py-2'>
          <span>Estado</span>
        </div>
        <div className=' py-2'>
          <span>Publicado</span>
        </div>
        <div className=' py-2'>
          <span>Direccion</span>
        </div>
        <div className=' py-2 rounded-tr-md'>
          <span>Nombre</span>
        </div>

        <ListOfPeople personas={currentItems} />
      </div>

      <Paginacion paginate={paginate} />

    </div>
  )
}

export default Historial
