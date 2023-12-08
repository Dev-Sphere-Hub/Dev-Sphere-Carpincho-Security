import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Webcam from 'react-webcam'
import useNavStore from '../../store/NavStore/navStore'

const PhotoCapture = () => {
  const webcamRef = useRef(null)
  const [isActive, setIsActive] = useState(true)
  const navigate = useNavigate()

  const capturar = async () => {
    const imagenSrc = webcamRef.current.getScreenshot()
    navigate('/photoCapture/quickRegistration', { state: { imagen: imagenSrc } })
  }

  const { setActiveIndex } = useNavStore()

  useEffect(() => {
    setActiveIndex('ingresoRapido')
    return () => setActiveIndex(null)
  }, [])

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Registro rápido</h1>
      <div className='mb-4 border border-gray-300 h-64 w-64'>
        {isActive
          ? (
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat='image/jpeg'
              className='h-64 w-64 object-cover'
            />
            )
          : (
            <div className='h-64 w-64 flex items-center justify-center'>
              <span>La cámara está desactivada</span>
            </div>
            )}
      </div>
      <button
        onClick={capturar}
        className='bg-blue-500 text-white px-4 py-2 rounded mb-4'
      >
        Tomar foto y registrar
      </button>
      <button
        onClick={() => setIsActive(!isActive)}
        className='bg-red-500 text-white px-4 py-2 rounded'
      >
        {isActive ? 'Desactivar' : 'Activar'} cámara
      </button>
    </div>
  )
}

export default PhotoCapture
