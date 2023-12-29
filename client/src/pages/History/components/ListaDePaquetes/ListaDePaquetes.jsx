import React, { useEffect, useState } from 'react'
import { BiPlus, BiArea, BiX } from 'react-icons/bi'
import usePackageStore from '../../../../store/PackageStore/PackageStore'
import { useAuthStore } from '../../../../store/AuthStore/AuthStore'
import StylesForm from '../../../../constants/StylesForm'
import usePagination from '../../../../components/Pagination/Pagination'
import Paginacion from '../Historial/components/Paginacion'

const ListaDePaquetes = () => {
  const { token } = useAuthStore()
  const { paquetes, update, getPaquetes } = usePackageStore()
  const [detailPaquete, setDetailPaquete] = useState(null)
  const { genericCard2 } = StylesForm()
  const { currentItems, funcPaginate } = usePagination(paquetes)

  useEffect(() => {
    const response = getPaquetes(token)
    console.log('response --> ', response)
  }, [update])

  const calcStatus = (status) => status === 'received'

  const handelActiveRenderIndex = (e, objeto) => {
    e.preventDefault()
    document.startViewTransition(() => {
      setDetailPaquete(objeto)
    })
  }

  const handleCloseModal = (e) => {
    e.preventDefault()
    document.startViewTransition(() => {
      setDetailPaquete(null)
    })
  }
  // if (detailPaquete === null) {
  //   setDetailPaquete(paquetes[0])
  // }

  return (
    <div className='w-full h-full  py-6 '>
      <section className='flex flex-row w-full justify-center items-center gap-2 bg-red-400'>
        <h2 className=' text-3xl font-bold text-white shadow-black'>Novedades</h2>
        <button className='text-slate-500 cursor-pointer rounded-full w-[30px] h-[30px] grid place-content-center border-2 border-slate-600 text-xl hover:text-slate-300 hover:border-slate-300 transition-all ease-linear duration-300'>
          <BiPlus />
        </button>
      </section>

      <section className='ContainGeneral w-full h-auto  py-5 flex flex-col lg:flex-row gap-1 flex-nowrap'>
        <section className='sectionCard w-full flex flex-row flex-wrap justify-center items-center gap-2 lg:w-1/2  h-auto'>
          {currentItems.map((paquete, index) => (
            <section
              key={index}
              className={`relative w-[260px] lg:w-[340px] h-[150px] lg:h-[160px] border-2 text-left p-2 lg:p-3 rounded-md font-parrafo text-sm font-normal ${genericCard2} `}
            >
              <h3 className='estadoPakage text-slate-600 font-bold flex justify-start items-center gap-2'>Estado: <span className={`text-xs font-light text-slate-600 rounded-full py-1 px-2 ${calcStatus(paquete.status) ? 'bg-green-300' : 'bg-red-400'} `}>{paquete?.status || 'pendiente'}</span> </h3>

              <p className='estadoPakage text-slate-600 font-bold flex justify-start items-center gap-2'>Repartidor:
                <span className='text-base font-light text-slate-600 rounded-full py-1 px-2 '>{paquete?.deliverer || 'pepito'}
                </span>
              </p>

              <p className='estadoPakage text-slate-600 font-bold flex justify-start items-center gap-2'>Destino:
                <span className='text-base font-light text-slate-600 rounded-full py-1 px-2 '>{paquete?.recipient || 'cali'}
                </span>
              </p>

              <button
                className='absolute top-1 right-1 text-2xl hover:text-yellow-50 transition-all ease-linear duration-300'
                onClick={(e) => handelActiveRenderIndex(e, paquete)}
              >
                <BiArea />
              </button>
            </section>
          ))}
          <Paginacion paginate={funcPaginate} />
        </section>
        <section className='hidden detailsCards w-full lg:w-1/2 lg:flex justify-center items-center min-h-[300px]'>
          <section className='detailPaquete w-[90%] bg-purple-400 h-[420px] rounded-md flex flex-col justify-center items-center shadow-custom'>
            <h2>repartidor: <span>{detailPaquete?.recipient}</span></h2>
            <img className='w-[350px] lg:w-full h-[250px] object-cover' src={` ${detailPaquete?.photoURL || 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1703751913/carpincho/pakage_oih8iw.jpg'}`} alt={detailPaquete?.description} />
            <p><span>{detailPaquete?.deliverer}</span></p>
            <p><span>{detailPaquete?.description}</span></p>
            <p><span>{detailPaquete?.status}</span></p>
            <p><span>{detailPaquete?.type}</span></p>
          </section>
        </section>
      </section>
      {detailPaquete && (
        <section className='modalDetail lg:hidden detailsCards w-full min-h-screen flex justify-center items-center bg-slate-300 absolute top-0 left-0 opacity-90'>

          <section className='relative detailPaquete w-[300px] md:w-[400px] h-[430px] bg-green-200 rounded-md overflow-hidden flex flex-col justify-center items-center shadow-custom'>
            <img className='w-[350px] lg:w-full h-[240px] object-cover' src={` ${detailPaquete?.photoURL || 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1703751913/carpincho/pakage_oih8iw.jpg'}`} alt={detailPaquete?.description} />
            <h2>repartidor: <span>{detailPaquete?.recipient}</span></h2>
            <p><span>{detailPaquete?.deliverer}</span></p>
            <p><span>{detailPaquete?.description}</span></p>
            <p><span>{detailPaquete?.status}</span></p>
            <p><span>{detailPaquete?.type}</span></p>

            <button
              className='closeModal absolute top-2 right-2 w-5 h-5 text-red-500 text-xl rounded-full border-2 grid place-content-center'
              onClick={handleCloseModal}
            >
              <BiX />
            </button>
          </section>
        </section>
      )}
    </div>
  )
}

export default ListaDePaquetes
