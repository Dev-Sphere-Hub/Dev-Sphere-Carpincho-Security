import React, { useEffect, useState } from 'react'
import useNavStore from '../../../../store/NavStore/navStore'
import axios from 'axios'
import { endpoints } from '../../../../constants/api'
import useVehicleStore from '../../../../store/VehicleStore/VehicleStore'
import Paginacion from '../Historial/components/Paginacion'
import Search from '../../../../components/search'
import ListOfVehicle from './components/ListOfVehicles'

const HistorialVehiculos = () => {
  const { setActiveIndex } = useNavStore()
  const [currentPage, setCurrentPage] = useState(1)

  const { vehicles, setVehicles } = useVehicleStore()
  const [filterVehicles, setFilterVehicles] = useState([])

  useEffect(() => {
    axios.get(endpoints.vehiculos)
      .then(res => {
        setVehicles(res.data.data)
        setFilterVehicles(res.data.data)
      })
      .catch(err => console.log(err))
  }, [setVehicles])

  useEffect(() => {
    setActiveIndex('vehiculos')
    return () => setActiveIndex(null)
  }, [])

  const itemsPerPage = 5
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  // const currentItems = visitas?.slice(indexOfFirstItem, indexOfLastItem)
  const currentItems = filterVehicles.reverse()?.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (action) => {
    if (action === 'next') {
      setCurrentPage((prev) => prev + 1)
    } else if (action === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const handleSearch = (filterData) => {
    setFilterVehicles(filterData)
  }

  console.log('Vehiculos --> ', vehicles)
  return (
    <div
      className='h-full mx-auto w-[95%] sm:w-[90%] md:w-[90%]  2xl:w-[1300px] lg:flex flex-col justify-start items-start xl:justify-center xl:items-center overflow-x-scroll 2xl:overflow-auto scrollbar pb-2 gap-4'

    >
      <Search allVisitas={vehicles} nameColumn='plateCode' handleSearch={handleSearch} />
      {/* aca puedo componetizar mas */}
      <div className='mt-3 w-[900px] 2xl:w-[1200px] grid grid-cols-4  rounded-lg  overflow-hidden text-colorCustom4 font-titulo font-medium text-xs lg:text-sm gap-1'>
        <div className='  py-2 bg-gradient-to-r from-green-500 via-green-700 to-blue-400'>
          <h2 className='w-full text-center'>Empleado</h2>
        </div>
        <div className='py-2 bg-gradient-to-r from-green-500 via-green-700 to-blue-400 '>
          <span>placa</span>
        </div>
        <div className=' py-2 bg-gradient-to-r from-green-500 via-green-700 to-blue-400 2'>
          <span>seguro</span>
        </div>
        <div className='py-2 bg-gradient-to-r from-green-500 via-green-700 to-blue-400  rounded-tr-md'>
          <span>detalle</span>
        </div>

        <ListOfVehicle vehicles={currentItems} />
      </div>

      <Paginacion paginate={paginate} />

    </div>
  )
}

export default HistorialVehiculos
