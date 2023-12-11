import React from 'react'
import VerticalMenu from '../../layouts/VerticalMenu'
import { Route, Routes, Outlet } from 'react-router-dom'
import UserProfile from '../../components/UserProfile'
import Historial from './components/Historial'
import GuardianJournal from '../GuardianJournal'
import Paquetes from './components/Paquetes/Paquetes'
import RegisterAll from '../RegisterAll'

const History = () => {
  // la ruta de esto es /historial
  return (
    <div className='variabeleContain w-[100%] mt-[140px] mx-auto max-w-[1280px]
    lg:mt-[80px] min-h-screen flex flex-col lg:flex-wrap lg:justify-start lg:items-end '
    >
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
            path='/ingresoRapido'
            element={<RegisterAll />}

          />
          <Route
            path='/historia'
            element={<Historial />}
          />
          <Route
            path='/reportes'
            element={<GuardianJournal />}
          />
          <Route
            path='/paquetes'
            element={<Paquetes />}
          />
        </Routes>
      </section>
    </div>
  )
}

export default History
