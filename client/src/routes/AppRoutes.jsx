import { Route, Routes } from 'react-router-dom'
import React from 'react'
// import Home from '../pages/Home/index'
import GuardianJournal from '../pages/GuardianJournal'
import Register from '../pages/Register'
import LoginForm from '../pages/LoginForm'

import QuickRegistration from '../pages/QuickRegistration/index'
// import PhotoCapture from '../components/PhotoCapture'
import SuccessfulRegistration from '../components/SuccessfulRegistration'

import History from '../pages/History'
import LandinPage from '../pages/LandinPAge/LandinPage'

const AppRoutes = () => {
  const logged = true // luego lo traemos desde un estado
  return (
    <Routes>
      {/* <Route path='/' element={<Home />} /> */}
      <Route path='/' element={<LandinPage />} />
      {
        logged === true &&
          <Route path='/profile' element='' />
      }
      <Route path='/novedades' element={<GuardianJournal />} />

      <Route path='/login' element={<LoginForm />} />
      <Route path='/register' element={<Register />} />

      <Route path='/photoCapture/quickRegistration' element={<QuickRegistration />} />
      <Route path='/photoCapture/registerExito' element={<SuccessfulRegistration />} />

      <Route
        path='/historial/*'
        element={<History />}
      />

    </Routes>

  )
}

export default AppRoutes
