import React, { useEffect } from 'react'
import { BiPlus } from 'react-icons/bi'
import usePackageStore from '../../../../store/PackageStore/PackageStore'
import { useAuthStore } from '../../../../store/AuthStore/AuthStore'
import StylesForm from '../../../../constants/StylesForm'

const ListaDePaquetes = () => {
  const { token } = useAuthStore()
  const { paquetes, update, loading, errorPaquete, getPaquetes } = usePackageStore()
  const { genericCard, genericCard2 } = StylesForm()
  useEffect(() => {
    const response = getPaquetes(token)
    console.log('response --> ', response)
  }, [update])

  const calcStatus = (status) => status === 'received'

  return (
    <div className='w-full h-full  py-6 border-2 border-slate-400'>
      <section className='flex-col w-full lg:w-[500px] justify-center'>
        <h2 className='mx-auto text-3xl font-bold text-white shadow-lg shadow-black'>Novedades</h2>
        <button className='text-slate-500 cursor-pointer rounded-full w-[30px] h-[30px] grid place-content-center border-2 border-slate-600 text-xl hover:text-slate-300 hover:border-slate-300 transition-all ease-linear duration-300'>
          <BiPlus />
        </button>
      </section>

      <section className='ContainGeneral w-full h-auto border-2 border-yellow-100 py-5 flex flex-col lg:flex-row gap-1 flex-nowrap'>
        <section className='sectionCard w-full flex flex-row flex-wrap justify-center items-center gap-2 lg:w-1/2 border-2 border-orange-200 h-auto'>
          {paquetes.map((paquete, index) => (
            <section
              key={index}
              className={`w-[260px] lg:w-[340px] h-[150px] lg:h-[160px] border-2 text-left p-2 lg:p-3 rounded-md font-parrafo text-sm font-normal ${genericCard2} `}
            >
              <h3 className='estadoPakage text-slate-600 font-bold flex justify-start items-center gap-2'>Estado: <span className={`text-xs font-light text-slate-600 rounded-full py-1 px-2 ${calcStatus(paquete.status) ? 'bg-green-300' : 'bg-red-400'} `}>{paquete?.status || 'pendiente'}</span> </h3>
              <p className='estadoPakage text-slate-600 font-bold flex justify-start items-center gap-2'>Repartidor: <span className='text-base font-light text-slate-600 rounded-full py-1 px-2 '>{paquete?.deliverer || 'pepito'}</span> </p>
              <p className='estadoPakage text-slate-600 font-bold flex justify-start items-center gap-2'>Destino: {paquete?.recipient || 'cali'}</p>
              <p className='estadoPakage text-slate-600 font-bold flex justify-start items-center gap-2'>Estado: {paquete?.status || 'confirmar'}</p>

            </section>
          ))}
        </section>
        <section className='detailsCards w-full lg:w-1/2 bg-green-200 h-[250px]' />
      </section>

    </div>
  )
}

export default ListaDePaquetes
