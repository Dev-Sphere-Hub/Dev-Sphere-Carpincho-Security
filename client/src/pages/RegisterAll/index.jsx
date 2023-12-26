import React, { useState } from 'react'
import FormVehicle from '../../components/FormVehicle'
import FormPackage from '../../components/FormPackage'
import FormPerson from '../../components/FormPerson'
import useImageStore from '../../store/imagenStore/Imagen'
import { useAuthStore } from '../../store/AuthStore/AuthStore'
import StylesForm from '../../constants/StylesForm'
import PhotoCapture from '../UserProfile/components/PhotoCapture'

const RegisterAll = () => {
  const { styleButton } = StylesForm()
  const [formularioVisible, setFormularioVisible] = useState('ingreso')
  const toggleFormulario = (formulario) => {
    setFormularioVisible(formulario)
  }
  const { capturedImage } = useImageStore()
  console.log(capturedImage)
  const { token, user } = useAuthStore()

  return (
    <>
      <div className='flex flex-col lg:flex-eow items-center justify-center w-full min-h-screen pb-5 gap-5'>

        {/* <PhotoCapture /> */}
        <PhotoCapture />

        <section className='mx-auto w-full h-full flex flex-col justify-center items-center gap-5'>
          <div className={`relative flex justify-between items-center w-[98%] max-w-[400px] h-[40px] lg:max-w-[500px] lg:h-[40px] text-white cursor-pointer bg-[#ccdebc] gap-0 text-xs lg:text-sm rounded-full overflow-hidden ${styleButton}`}>
            <div className={`z-20 absolute h-full w-1/3  border-2 rounded-full border-white border-opacity-20 bg-[#5b7dada9] ${formularioVisible === 'ingreso' ? 'translate-x-0' : formularioVisible === 'paqueteria' ? 'translate-x-[100%]' : 'translate-x-[200%]'} transition-transform ease-linear duration-300  `} />
            <button
              className='h-full w-1/3 z-20 rounded-full'
              onClick={() => toggleFormulario('ingreso')}
            >
              Ingreso de persona
            </button>
            <button
              className='h-full w-1/3 z-20 rounded-full'
              onClick={() => toggleFormulario('paqueteria')}
            >
              Paqueteria
            </button>
            <button
              className='h-full w-1/3 z-20 rounded-full'
              onClick={() => toggleFormulario('vehiculo')}
            >
              Vehiculo / Moto
            </button>
          </div>

          {formularioVisible === 'ingreso' && (
            <>
              <h2 className='text-xl font-bold text-slate-800'>Ingreso de persona</h2>
              <FormPerson token={token} user={user} imagen={capturedImage} />
            </>
          )}
          {formularioVisible === 'paqueteria' && (
            <>
              <h2 className='text-xl font-bold text-slate-800'>Ingreso de paqueteria</h2>
              <FormPackage token={token} user={user} imagen={capturedImage} />
            </>
          )}
          {formularioVisible === 'vehiculo' && (
            <>
              <h2 className='text-xl font-bold text-slate-800'>Ingreso de vehiculos</h2>
              <FormVehicle />
            </>
          )}
        </section>
      </div>
    </>
  )
}

export default RegisterAll
