import React from 'react'
import personas from '../../../../db/db_registros'
const Historial = () => {
  return (
    <div className='h-full w-[290px] lg:w-[650px] xl:w-[900px] 2xl:w-[1100px] grid 2xl:place-content-center overflow-x-scroll 2xl:overflow-auto p-5'>
      <div className='w-[1000px]  grid grid-cols-5  rounded-lg border-2 border-colorCustom1'>
        <div className='bg-colorCustom1 p-2'>
          <span>Empleado</span>
        </div>
        <div className='bg-colorCustom1 p-2'>
          <span>Estado</span>
        </div>
        <div className='bg-colorCustom1 p-2'>
          <span>Publicado</span>
        </div>
        <div className='bg-colorCustom1 p-2'>
          <span>Categoria</span>
        </div>
        <div className='bg-colorCustom1 p-2 rounded-tr-md'>
          <span>Tipo</span>
        </div>
        <div className='col-span-5 p-2 bg-white'>

          {personas.map(persona => (
            <div key={persona.id} className='col-span-5 p-2 bg-white'>
              <div className='grid grid-cols-5'>
                <div className='col-span-1 p-2'>
                  <img src={persona.imagen} alt={`Imagen de ${persona.id}`} className='w-16 h-16 object-cover rounded-full' />
                </div>
                <div className='col-span-1 p-2'>
                  <span>{persona.estado}</span>
                </div>
                <div className='col-span-1 p-2'>
                  <span>{persona.fechaPublicacion}</span>
                </div>
                <div className='col-span-1 p-2'>
                  <span>{persona.categoria}</span>
                </div>
                <div className='col-span-1 p-2 rounded-tr-md'>
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
