import React from 'react'
import personas from '../../../../db/db_registros'
const Historial = () => {
  return (
    <div className='w-full h-full place-content-center '>
      <div className='grid grid-cols-5 w-full rounded-lg border-2 border-colorCustom1 overflow-hidden'>
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
