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

  // const dataURItoBlob = (dataURI) => {
  //   const byteString = atob(dataURI.split(',')[1])
  //   const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  //   const ab = new ArrayBuffer(byteString.length)
  //   const ia = new Uint8Array(ab)

  //   for (let i = 0; i < byteString.length; i++) {
  //     ia[i] = byteString.charCodeAt(i)
  //   }

  //   return new Blob([ab], { type: mimeString })
  // }

  const handleCapture = async (e) => {
    e.preventDefault()
    const imagenSrc = await webcamRef.current.getScreenshot()
    setCaptureImage(imagenSrc)

    // Convierte la imagen base64 en un Blob
    // const imageFile = dataURItoBlob(imagenSrc)

    // if (imageFile) {
    //   // Actualiza el estado en el store con el objeto File
    //   setCaptureImage(imageFile)
    // } else {
    //   // Realiza alguna acción de manejo de error si es necesario
    //   console.error('Error al procesar la imagen.')
    // }
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
