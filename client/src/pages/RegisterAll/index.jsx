import React, { useState } from 'react'
import PhotoCapture from '../../components/PhotoCapture'
import FormVehicle from '../../components/FormVehicle'
import FormPackage from '../../components/FormPackage'
import FormPerson from '../../components/FormPerson'
import useImageStore from '../../store/imagenStore/Imagen'
import { useAuthStore } from '../../store/AuthStore/AuthStore'

const RegisterAll = () => {
  const [formularioVisible, setFormularioVisible] = useState(null)
  const toggleFormulario = (formulario) => {
    setFormularioVisible(formulario)
  }
  const { capturedImage } = useImageStore()
  const { token, user } = useAuthStore()

  return (
    <>
      <div className='flex flex-col items-center justify-center w-full'>
        <div className='flex flex-col items-center justify-center my-5'><PhotoCapture /></div>
        <div className='flex flex-col md:flex-row place-content-center justify-stretch w-[300px] md:w-[88%] h-[40px] text-white rounded-[20px]  bg-[#ccdebc]'>
          <button className={`rounded-[20px] w-full lg:w-[25%] p-2 mb-2 md:mb-0 ${formularioVisible === 'ingreso' ? 'bg-lime-600' : 'bg-transparent text-black'} transition ease-in delay-200`} onClick={() => toggleFormulario('ingreso')}>Ingreso de persona</button>
          <button className={`rounded-[20px] w-full lg:w-[25%] p-2 mb-2 md:mb-0 ${formularioVisible === 'paqueteria' ? 'bg-lime-600' : 'bg-transparent text-black'} transition ease-in delay-200`} onClick={() => toggleFormulario('paqueteria')}>Paqueteria</button>
          <button className={`rounded-[20px] w-full lg:w-[25%] p-2 ${formularioVisible === 'vehiculo' ? 'bg-lime-600' : 'bg-transparent text-black'} transition ease-in delay-200`} onClick={() => toggleFormulario('vehiculo')}>Vehiculo / Moto</button>
        </div>

        <section className='mx-6 w-[80%] p-3'>
          {formularioVisible === 'ingreso' && (
            <>
              <div className='text-xl font-bold mb-4'>formulario de ingreso</div>
              <FormPerson token={token} user={user} imagen={capturedImage} />
            </>
          )}
          {formularioVisible === 'paqueteria' && (
            <>
              <div className='text-xl font-bold mb-4'>formulario de paqueteria</div>
              <FormPackage token={token} user={user} imagen={capturedImage} />
            </>
          )}
          {formularioVisible === 'vehiculo' && (
            <>
              <div className='text-xl font-bold mb-4'>formulario de vehiculos</div>
              <FormVehicle token={token} imagen={capturedImage} />
            </>
          )}
        </section>
      </div>
    </>
  )
}

export default RegisterAll
