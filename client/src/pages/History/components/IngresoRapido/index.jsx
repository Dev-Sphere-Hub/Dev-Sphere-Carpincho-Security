import React, { useEffect } from 'react'
import useNavStore from '../../../../store/NavStore/navStore'

const IngresoRapido = () => {
  const { setActiveIndex } = useNavStore()

  useEffect(() => {
    setActiveIndex('ingresoRapido')
    return () => setActiveIndex(null)
  }, [])

  return (
    <div className='w-[100%] h-[100%] bg-red-400 place-content-center'>IngresoRapido</div>
  )
}

export default IngresoRapido
