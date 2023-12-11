import React from 'react'

const ItemPeople = ({ persona }) => {
  const calcStatus = (status) => status === 'authorized'

  return (
    <div key={persona._id} className='col-span-5 py-2 bg-white'>
      <div className='grid grid-cols-5'>
        <div className='col-span-1 py-2 grid place-content-center'>
          <img src={persona.photo} alt={`Imagen de ${persona._id}`} className='w-16 h-16 object-cover rounded-full' />
        </div>
        <div className='col-span-1 py-2 grid place-content-center'>
          <span className={`py-2 px-4 rounded-[30px] text-colorCustom4 font-medium capitalize ${calcStatus(persona.state) ? 'bg-green-300' : 'bg-red-400'}`}>{persona.state}</span>
        </div>
        <div className='col-span-1 py-2 grid place-content-center'>
          <span>{persona.checkIn}</span>
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
