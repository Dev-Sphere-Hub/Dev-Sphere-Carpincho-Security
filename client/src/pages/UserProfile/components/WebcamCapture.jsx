import React from 'react'
import usePhotoCaptureStore from '../../../store/PhotoCaptureStore/photoCaptureStore'
import Webcam from 'react-webcam'

const WebcamCapture = ({ webcamRef }) => {
  const { isActive, capturedImage } = usePhotoCaptureStore()

  return (
    <div className='h-[250px] w-[250px]   bg-gradient-to-r from-green-500 via-green-700 to-blue-400 rounded-xl grid place-content-center relative'>
      {capturedImage
        ? (
          <img src={capturedImage} alt='Captured' className='h-64 w-64 object-cover' />
          )
        : isActive
          ? (
            <Webcam audio={false} ref={webcamRef} screenshotFormat='image/jpeg' className='h-[240px] w-[240px] object-cover rounded-md border-2 bg-white' />
            )
          : (
            <div className='h-64 w-64 flex items-center justify-center'>la cámara está desactivada</div>
            )}
    </div>
  )
}

export default WebcamCapture
