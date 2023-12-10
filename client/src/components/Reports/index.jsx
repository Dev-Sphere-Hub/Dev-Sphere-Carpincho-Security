import React, { useEffect } from 'react'
import useNavStore from '../../store/NavStore/navStore'

const Reportes = () => {
  const { setActiveIndex } = useNavStore()

  useEffect(() => {
    setActiveIndex('reportes')
    return () => setActiveIndex(null)
  }, [])

  return (
    <div className='w-[100%] h-[100%] bg-green-200 place-content-center'>Reportes</div>
  )
}

export default Reportes
