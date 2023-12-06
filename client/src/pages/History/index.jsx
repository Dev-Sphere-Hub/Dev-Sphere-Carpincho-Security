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
    <div className='variabeleContain w-[100%] min-h-screen flex flex-col lg:flex-wrap lg:justify-start lg:items-end '>
      <VerticalMenu />
      <section className='relative w-[100%] h-[100%] min-h-screen flex flex-col justify-start items-center p-2 lg:p-5 min-w-[300px] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] '>
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
