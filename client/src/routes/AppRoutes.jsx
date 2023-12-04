import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../pages/home/Home'
import GuardianJournal from '../pages/GuardianJournal'
import History from '../pages/History'

const AppRoutes = () => {
  const logged = true // luego lo traemos desde un estado
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {
        logged === true &&
          <Route path='/profile' element='' />
      }
      <Route path='/novedades' element={<GuardianJournal />} />
      <Route path='/historial' element={<History />} />

    </Routes>

  )
}

export default AppRoutes
