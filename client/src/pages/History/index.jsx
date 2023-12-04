import React from 'react'
import VerticalMenu from '../../layouts/verticalMenu'
import { Route, Routes, Outlet } from 'react-router-dom'
import IngresoEgreso from './pruebas/IngresoEgreso'
import UserProfile from './pruebas/UserProfile'
import Reportes from './pruebas/Reportes'
import IngresoRapido from './pruebas/IngresoRapido'
import Historial from './pruebas/Historial'

const History = () => {
  // la ruta de esto es /historial
  return (
    <div className='variabeleContain w-[100%] bg-pink-400 lg:flex lg:flex-row lg:flex-wrap lg:justify-start lg:items-start lg:gap-1'>
      <VerticalMenu />
      <section className='relative w-[100%] min-h-[calc(100vh-270px)]  bg-teal-400 m-0 flex flex-col gap-8 min-w-[300px] lg:w-[calc(100%-310px)] lg:ml-auto p-5'>
        <Routes>
          <Route
            path='/historial/'
            element={
              <Outlet />
            }
          />
          <Route
            path='/'
            element={<UserProfile />}
          />

          <Route
            path='/ingresoEgreso'
            element={<IngresoEgreso />}
          />

          <Route
            path='/ingresoRapido'
            element={<IngresoRapido />}
          />
          <Route
            path='/historia'
            element={<Historial />}
          />
          <Route
            path='/reportes'
            element={<Reportes />}
          />
        </Routes>
      </section>
    </div>
  )
}

export default History
