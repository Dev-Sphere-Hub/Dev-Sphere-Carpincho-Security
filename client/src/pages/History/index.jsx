import React, { useState } from 'react'
import VerticalMenu from '../../layouts/VerticalMenu'
import { Route, Routes, Outlet } from 'react-router-dom'
import UserProfile from '../UserProfile/index'
import Historial from './components/Historial'
import GuardianJournal from '../GuardianJournal'
import RegisterAll from '../RegisterAll'
import HistorialVehiculos from './components/HistorialVehiculos/HistorialVehiculos'

import './History.css'
import ListaDePaquetes from './components/ListaDePaquetes/ListaDePaquetes'

const History = () => {
  const [activeNavVerticas, setActiveNavVerticas] = useState(false)

  // la ruta de esto es /historial
  return (
    <div className='variabeleContain w-full lg:w-full xl:w-full xl:max-w-[1880px] min-h-screen h-full flex flex-col justify-start items-start gap-1 lg:flex-row lg:flex:nowrap lg:justify-start bg-white mx-auto overflow-hidden'>
      <VerticalMenu activeNavVerticas={activeNavVerticas} setActiveNavVerticas={setActiveNavVerticas} />
      <section className={`relative w-full ${activeNavVerticas ? 'lg:transform lg:w-full' : 'lg:transform lg:w-4/5'} transition-transform ease-linear duration-300 h-full min-h-screen lg:min-h-screen flex flex-col justify-start items-center min-w-[300px] pt-5 lg:pt-[80px]  overflow-hidden fondo`}>
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
            element={<ListaDePaquetes />}
          />
          <Route
            path='/vehiculos'
            element={<HistorialVehiculos />}
          />
        </Routes>
      </section>
    </div>
  )
}

export default History
