import React from 'react'
import formatoFecha from './FormatoFecha'

const ItemPeople = ({ persona }) => {
  console.log('PERSONA ->', persona)
  const calcStatus = (status) => status === 'authorized'

  return (
    <div key={persona._id} className='col-span-5 py-2 backdrop-blur-md backdrop-saturate-180 bg-[#5b7dad50] bg-opacity-80 border-2 border-white border-opacity-20 mb-1'>
      <div className='grid grid-cols-5 text-sm lg:text-xs font-parrafo font-medium text-white'>
        <div className='col-span-1 py-2 grid place-content-center'>
          <img src={persona.photo} alt={`Imagen de ${persona._id}`} className='w-16 h-16 object-cover rounded-full' />
        </div>
        <div className='col-span-1 py-2 grid place-content-center'>
          <span className={`py-1 px-3 lg:py-2 lg:px-4 rounded-[30px] text-colorCustom4 font-medium capitalize ${calcStatus(persona.state) ? 'bg-green-300' : 'bg-red-400'}`}>{persona.state}</span>
        </div>
        <div className='col-span-1 py-2 grid place-content-center'>
          <span>{formatoFecha(persona.checkIn)}</span>
        </div>
        <div className='col-span-1 py-2 grid place-content-center capitalize'>
          <span>{persona.address}</span>
        </div>
        <div className='col-span-1 py-2 grid place-content-center capitalize'>
          <span>{persona.visitorFullName}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ItemPeople
