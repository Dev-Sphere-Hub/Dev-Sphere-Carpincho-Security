import React from 'react'
import ItemVehicle from './ItemVehicle'

const ListOfVehicle = ({ vehicles }) => {
  return (
    <div className='col-span-5 p-0 bg-white'>

      {vehicles.map(vehicle => (
        <ItemVehicle key={vehicle._id} vehicle={vehicle} />
      ))}

    </div>
  )
}

export default ListOfVehicle
