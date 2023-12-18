import React, { useEffect, useState } from 'react'
import useNavStore from '../../../../store/NavStore/navStore'
import PhotoCapture from '../../../../components/PhotoCapture'
import PaqueteriaForm from '../../../../components/PaqueteriaForm'


const Paquetes = () => {
  const [formularioVisible, setFormularioVisible] = useState(null)

  const { setActiveIndex } = useNavStore()

  useEffect(() => {
    setActiveIndex('paquetes')
    return () => setActiveIndex(null)
  }, [])

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='flex flex-col items-center justify-center my-5'><PhotoCapture /></div>
      <div className='flex  w-[300px] h-[35px] lg:w-[500px] lg:h-[40px] text-white  cursor-pointer bg-[#ccdebc] gap-0 text-xs lg_text-lg'>
        <button className={`flex-1 rounded-[20px] h-full grid place-content-center ${formularioVisible === 'ingreso' ? 'bg-lime-600' : 'bg-transparent text-black'} transition ease-in delay-200`}>Ingreso</button>
        <button className={`flex-1 rounded-[20px] h-full grid place-content-center ${formularioVisible === 'Egreso' ? 'bg-lime-600' : 'bg-transparent text-black'} transition ease-in delay-200`}>Egreso</button>
      </div>
      <section>
        <form action='' className='flex flex-col'>
          <PaqueteriaForm />
        </form>
      </section>
    </div>
  )
}

export default Paquetes
