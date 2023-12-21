import React from 'react'

const ItemPackage = ({ paquete }) => {
  const status = (status) => status === 'authorized'

  return (
    <div key={paquete._id} className='col-span-5 py-2 bg-white'>
      <div className='grid grid-cols-5 text-lg font-parrafo'>
        <div className='col-span-1 py-2 grid place-content-center'>
          <img src={paquete.photo} alt={`Imagen de ${paquete._id}`} className='w-16 h-16 object-cover rounded-full' />
        </div>
        <div className='col-span-1 py-2 grid place-content-center'>
          <span className={`py-2 px-4 rounded-[30px] text-colorCustom4 font-medium capitalize ${status(paquete.state) ? 'bg-green-300' : 'bg-red-400'}`}>{paquete.state}</span>
        </div>

        <div className='col-span-1 py-2 grid place-content-center capitalize'>
          <span>{paquete.address}</span>
        </div>
        <div className='col-span-1 py-2 grid place-content-center capitalize'>
          <span>{paquete.visitorFullName}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ItemPackage
