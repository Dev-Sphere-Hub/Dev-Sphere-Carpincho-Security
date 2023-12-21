import React from 'react'

const ItemVehicle = ({ vehicle }) => {
  return (
    <div key={vehicle._id} className='col-span-5 py-2 backdrop-blur-md backdrop-saturate-180 bg-[#5b7dad50] bg-opacity-80 border-2 border-white border-opacity-20 mb-1'>
      <div className='grid grid-cols-5 text-sm lg:text-xs font-parrafo font-medium text-white'>
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
          <span>{vehicle.address}</span>
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
