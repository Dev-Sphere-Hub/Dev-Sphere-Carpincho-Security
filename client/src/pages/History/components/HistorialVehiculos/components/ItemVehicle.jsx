import React from 'react'

const ItemVehicle = ({ vehicle }) => {
  return (
    <div key={vehicle._id} className='col-span-5 py-2 bg-white'>
      <div className='grid grid-cols-4 text-lg font-parrafo font-normal'>
        <div className='col-span-1 py-2 grid place-content-center'>
          <img src={vehicle.photo} alt={`Imagen de ${vehicle._id}`} className='w-16 h-16 object-cover rounded-full' />
        </div>
        <div className='col-span-1 py-2 grid place-content-center'>
          <span>{vehicle.plateCode}</span>
        </div>
        <div className='col-span-1 py-2 grid place-content-center capitalize'>
          <span>{vehicle.carInsurance}</span>
        </div>
        <div className='col-span-1 py-2 grid place-content-center capitalize'>
          <span>{vehicle.details}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ItemVehicle
