import React, { useEffect } from 'react'
import useNavStore from '../../../../store/NavStore/navStore'

const IngresoEgreso = () => {
  const { setActiveIndex } = useNavStore()

  useEffect(() => {
    setActiveIndex('ingresoEgreso')
    return () => setActiveIndex(null)
  }, [])

  return (
    <div className='w-[100%] h-[100%] bg-yellow-200 place-content-center'>IngresoEgreso</div>
  )
}

export default IngresoEgreso
