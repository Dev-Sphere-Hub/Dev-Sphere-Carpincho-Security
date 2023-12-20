import React from 'react'
import ItemPackage from './ItemPackage'

const ListOfPackage = ({ paquete }) => {
  return (
    <div className='col-span-5 py-2 bg-white'>
      {
        paquete && paquete.map(
          paquete => (
            <ItemPackage key={paquete._id} paquete={paquete} />
          )
        )
      }
    </div>
  )
}

export default ListOfPackage
