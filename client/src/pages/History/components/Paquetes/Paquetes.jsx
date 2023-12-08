import React, { useEffect } from 'react'
import useNavStore from '../../../../store/NavStore/navStore'

const Paquetes = () => {
  const { setActiveIndex } = useNavStore()

  useEffect(() => {
    setActiveIndex('paquetes')
    return () => setActiveIndex(null)
  }, [])

  return (
    <div>Paquetes</div>
  )
}

export default Paquetes
