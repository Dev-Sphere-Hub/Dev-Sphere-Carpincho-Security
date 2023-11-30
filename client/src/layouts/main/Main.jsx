import React from 'react'
import AppRoutes from '../../routes/AppRoutes'

const Main = () => {
  return (
    <main className='main w-[100%] h-min-screen  bg-whiteCustom overflow-hidden  box-border flex flex-col justify-top gap-[2rem]'>
      <AppRoutes />
    </main>
  )
}

export default Main
