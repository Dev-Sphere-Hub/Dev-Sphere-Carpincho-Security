import React from 'react'

const ItemPeople = ({ persona }) => {
  const calcStatus = (status) => status === 'aprobado'

  return (
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
  )
}

export default ItemPeople
