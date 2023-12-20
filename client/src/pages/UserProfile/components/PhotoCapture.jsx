import { useRef } from 'react'
import usePhotoCaptureStore from '../../../store/PhotoCaptureStore/photoCaptureStore'
import WebcamCapture from './WebcamCapture'
import CaptureButton from './CaptureButton'
import { BiX } from 'react-icons/bi'

const PhotoCapture = () => {
  const webcamRef = useRef(null)
  const { isActive, setIsActive, setCaptureImage, setEditPhoto } = usePhotoCaptureStore()

  const handleToggle = (e) => {
    e.preventDefault()
    setIsActive(!isActive)
  }

  const handleCapture = async (e) => {
    e.preventDefault()
    const imagenBase64 = await webcamRef.current.getScreenshot()

    // Verificar si la cadena es una cadena base64 válida
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
      setCaptureImage(file)
    } else {
      console.error('La cadena no es una cadena base64 válida.')
    }
  }

  return (
    <div className='flex flex-col items-center justify-center gap-3 relative transition-all ease-linear duration-500 '>
      <WebcamCapture webcamRef={webcamRef} />
      <CaptureButton onToggle={handleToggle} onCapture={handleCapture} />
      <button
        className='absolute right-1 bottom-2 w-[20px] h-[20px] rounded-md bg-green-400 text-white  text-sm grid place-content-center '
        onClick={(e) => setEditPhoto(false)}
      >
        <BiX />
      </button>
    </div>
  )
}

export default PhotoCapture
