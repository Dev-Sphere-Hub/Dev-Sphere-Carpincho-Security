import React from 'react'
import VerticalMenu from '../../layouts/VerticalMenu'
import { Route, Routes, Outlet } from 'react-router-dom'
import IngresoEgreso from './components/IngresoEgreso/IngresoEgreso'
import UserProfile from '../../components/UserProfile'
import Reportes from '../../components/Reports'
import IngresoRapido from './components/IngresoEgreso/IngresoRapido'
import Historial from './components/Historial/Historial'

const History = () => {
  // la ruta de esto es /historial
  return (
    <div className='variabeleContain w-[100%] min-h-screen border-2 border-pink-400 lg:flex lg:flex-row lg:flex-wrap lg:justify-start lg:items-start lg:gap-1'>
      <VerticalMenu />
      <section className='relative w-[100%] h-[100%] min-h-[calc(100vh-270px)] border-2 border-teal-400 m-0 flex flex-col gap-8 min-w-[300px] lg:w-[calc(100%-275px)] xl:w-[calc(100%-240px)] lg:ml-auto py-2 px-1 overflow-auto'>
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
