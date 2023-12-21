import React, { useEffect, useRef, useState } from 'react'
import { IoCameraOutline } from 'react-icons/io5'
import { PiCameraSlashBold } from 'react-icons/pi'
import Webcam from 'react-webcam'
import useNavStore from '../../store/NavStore/navStore'
import useImageStore from '../../store/imagenStore/Imagen'

const PhotoCapture = () => {
  const webcamRef = useRef(null)
  const [isActive, setIsActive] = useState(true)
  const { capturedImage, setCapturedImage } = useImageStore()

  const handelCapturar = async (e) => {
    e.preventDefault()
    const imagenBase64 = webcamRef.current.getScreenshot()

    if (/^data:image\/\w+;base64,/.test(imagenBase64)) {
      // Decodificar la cadena base64
      const arrayBuffer = Uint8Array.from(atob(imagenBase64.split(',')[1]), (c) =>
        c.charCodeAt(0)
      ).buffer

      // Crear un Blob y un objeto File
      const blob = new Blob([arrayBuffer], { type: 'image/png' })
      const fileName = 'perfilUser.png'
      const file = new File([blob], fileName, { type: 'image/png' })

      console.log('Imagen convertida a objeto File ->', file)

      // Hacer lo que necesites con el objeto File
      setCapturedImage(file)
    } else {
      console.error('La cadena no es una cadena base64 válida.')
    }
  }

  const { setActiveIndex } = useNavStore()

  useEffect(() => {
    setActiveIndex('ingresoRapido')
    return () => setActiveIndex(null)
  }, [])

  return (
    <div className='flex flex-col items-center justify-center '>

      <div className='mb-4 border-gray-300 h-64 w-64 relative rounded-md
    border-2 bg-white'
      >
        {capturedImage
          ? (
            <img src={capturedImage} alt='Captured' className='h-64 w-64 object-cover' />
            )
          : isActive
            ? (
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat='image/jpeg'
                className='h-64 w-64 object-cover rounded-md
                border-2 bg-white'
              />
              )
            : (
              <div className='h-64 w-64 flex items-center justify-center'>
                <span className='h-64 w-64 flex items-center justify-center'>La cámara está desactivada</span>
              </div>
              )}

        <button
          onClick={() => setIsActive(!isActive)}
          className='bg-slate-500 opacity-[0.3] text-white rounded-full absolute px-2 py-2 -top-3 -right-3'
        >
          {isActive ? <PiCameraSlashBold /> : <IoCameraOutline />}
        </button>
      </div>

      <button
        onClick={handelCapturar}
        className='bg-blue-500 text-white px-4 py-2 rounded mt-5'
      >
        Tomar foto y registrar
      </button>

    </div>
  )
}

export default PhotoCapture
