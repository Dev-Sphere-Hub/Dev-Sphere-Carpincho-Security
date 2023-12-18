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
      <div className='flex flex-col items-center justify-center w-full'>
        <div className='flex flex-col items-center justify-center my-5'><PhotoCapture /></div>
        <div className='flex justify-between items-center w-[300px] h-[35px] lg:w-[500px] lg:h-[40px] text-white rounded-[20px] cursor-pointer bg-[#ccdebc] gap-0 text-xs lg_text-lg'>
          <button
            className={`flex-1 rounded-[20px] h-full grid place-content-center ${formularioVisible === 'ingreso' ? 'bg-lime-600' : 'bg-transparent text-black'} transition ease-in delay-200`}
            onClick={() => toggleFormulario('ingreso')}
          >
            Ingreso de persona  
          </button>
          <button
            className={`flex-1 rounded-[20px] h-full grid place-content-center ${formularioVisible === 'paqueteria' ? 'bg-lime-600' : 'bg-transparent text-black'} transition ease-in delay-200`}
            onClick={() => toggleFormulario('paqueteria')}
          >
            Paqueteria
          </button>
          <button
            className={`flex-1 rounded-[20px] h-full grid place-content-center ${formularioVisible === 'vehiculo' ? 'bg-lime-600' : 'bg-transparent text-black'} transition ease-in delay-200`}
            onClick={() => toggleFormulario('vehiculo')}
          >
            Vehiculo / Moto
          </button>
        </div>

        <section className='mx-6 w-[80%] p-3'>
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
