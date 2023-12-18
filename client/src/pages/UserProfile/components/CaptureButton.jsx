import React from 'react'
import usePhotoCaptureStore from '../../../store/PhotoCaptureStore/photoCaptureStore'
import { PiCameraSlashBold } from 'react-icons/pi'
import { IoCameraOutline } from 'react-icons/io5'

const CaptureButton = ({ onCapture, onToggle }) => {
  const { isActive } = usePhotoCaptureStore()

  return (
    <div className='w-full h-auto flex flex-col justify-center items-center gap-3'>
      <button onClick={onToggle} className='bg-slate-400 opacity-70 text-white rounded-full absolute px-2 py-2 -top-3 -right-3 text-xl'>
        {isActive ? <PiCameraSlashBold /> : <IoCameraOutline />}
      </button>
      <button onClick={onCapture} className=' w-[150px] h-[40px] rounded-full bg-gradient-to-r from-green-500 via-green-700 to-blue-400'>
        Tomar foto
      </button>
    </div>
  )
}

export default CaptureButton
