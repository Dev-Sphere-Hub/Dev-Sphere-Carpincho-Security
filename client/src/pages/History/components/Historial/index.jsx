import React, { useEffect } from 'react'
import personas from '../../../../db/db_registros'
import './styles.css'
import useNavStore from '../../../../store/NavStore/navStore'

const Historial = () => {
  const { setActiveIndex } = useNavStore()

  useEffect(() => {
    setActiveIndex('historial')
    return () => setActiveIndex(null)
  }, [])

  const calcStatus = (status) => status === 'aprobado'

  return (
    <div
      className='h-full w-[95%] sm:w-[90%] md:w-[90%] lg:w-[98%] xl:w-[98%] 2xl:w-[100%] lg:flex lg:justify-center lg:items-center  overflow-x-scroll 2xl:overflow-auto scrollbar pb-2'

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
        <div className='col-span-5 p-0 bg-white'>

          {personas.map(persona => (
            <div key={persona.id} className='col-span-5 py-2 bg-white'>
              <div className='grid grid-cols-5'>
                <div className='col-span-1 py-2 grid place-content-center'>
                  <img src={persona.imagen} alt={`Imagen de ${persona.id}`} className='w-16 h-16 object-cover rounded-full' />
                </div>
                <div className='col-span-1 py-2 grid place-content-center'>
                  <span className={`py-2 px-4 rounded-[30px] text-colorCustom4 font-medium capitalize ${calcStatus(persona.estado) ? 'bg-green-300' : 'bg-red-400'}`}>{persona.estado}</span>
                </div>
                <div className='col-span-1 py-2 grid place-content-center'>
                  <span>{persona.fechaPublicacion}</span>
                </div>
                <div className='col-span-1 py-2 grid place-content-center capitalize'>
                  <span>{persona.categoria}</span>
                </div>
                <div className='col-span-1 py-2 grid place-content-center capitalize'>
                  <span>{persona.tipo}</span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Historial
