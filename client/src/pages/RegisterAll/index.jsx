import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import PhotoCapture from '../../components/PhotoCapture'
import FormVehicle from '../../components/FormVehicle'
import FormPackage from '../../components/FormPackage'
import FormPerson from '../../components/FormPerson'

const RegisterAll = () => {
  const [formularioVisible, setFormularioVisible] = useState(null)
  const toggleFormulario = (formulario) => {
    setFormularioVisible(formulario)
  }
  const location = useLocation()
  const imgSrc = location.state?.imagen
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen mt-72 md:mt-24 lg:mt-48'>
        <div className='flex flex-col items-center justify-center my-5'><PhotoCapture /></div>
        <div className='flex flex-col md:flex-row place-content-center justify-around w-[83%] md:w-[88%] text-white p-2 rounded-md mb-5 mx-2'>
          <button style={{ backgroundColor: formularioVisible === 'ingreso' ? 'limegreen' : 'forestgreen' }} onClick={() => toggleFormulario('ingreso')} className='rounded-md w-full md:w-[20%] lg:w-[25%] p-2 mb-2 md:mb-0'>Ingreso de persona</button>
          <button style={{ backgroundColor: formularioVisible === 'paqueteria' ? 'limegreen' : 'forestgreen' }} onClick={() => toggleFormulario('paqueteria')} className='rounded-md w-full md:w-[20%] lg:w-[25%] p-2 mb-2 md:mb-0'>Paqueteria</button>
          <button style={{ backgroundColor: formularioVisible === 'vehiculo' ? 'limegreen' : 'forestgreen' }} onClick={() => toggleFormulario('vehiculo')} className='rounded-md w-full md:w-[20%] lg:w-[25%] p-2'>Vehiculo / Moto</button>
        </div>

        <section className='mx-6 w-[80%] bg-slate-500 p-3'>
          {formularioVisible === 'ingreso' && (
            <>
              <div className='text-xl font-bold mb-4'>formulario de ingreso</div>
              <FormPerson imagen={imgSrc} />
            </>
          )}
          {formularioVisible === 'paqueteria' && (
            <>
              <div className='text-xl font-bold mb-4'>formulario de paqueteria</div>
              <FormPackage imagen={imgSrc} />
            </>
          )}
          {formularioVisible === 'vehiculo' && (
            <>
              <div className='text-xl font-bold mb-4'>formulario de vehiculos</div>
              <FormVehicle imagen={imgSrc} />
            </>
          )}
        </section>
      </div>
    </>
  )
}

export default RegisterAll
