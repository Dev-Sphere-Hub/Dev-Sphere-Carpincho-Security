import { Route, Routes } from 'react-router-dom'
import React from 'react'
// import Home from '../pages/Home/index'
import GuardianJournal from '../pages/GuardianJournal'
import Register from '../pages/Register'
import LoginForm from '../pages/LoginForm'

// import PhotoCapture from '../components/PhotoCapture'
import SuccessfulRegistration from '../components/SuccessfulRegistration'

import History from '../pages/History'
import LandinPage from '../pages/LandinPAge/LandinPage'
import NotFound from '../pages/NotFound/NotFound'
// import RegisterAll from '../pages/RegisterAll'

const AppRoutes = () => {
  const logged = false // luego lo traemos desde un estado
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
      <Route path='/photoCapture/registerExito' element={<SuccessfulRegistration />} />
      {/* <Route path='/registro' element={<RegisterAll />} /> */}
      <Route path='*' element={<NotFound />} />
      <Route
        path='/historial/*'
        element={<History />}
      />

    </Routes>

  )
}

export default AppRoutes

// import { useRoutes } from 'react-router-dom'
// import React from 'react'
// // import Home from '../pages/Home/index'
// import GuardianJournal from '../pages/GuardianJournal'
// import Register from '../pages/Register'
// import LoginForm from '../pages/LoginForm'
// import SuccessfulRegistration from '../components/SuccessfulRegistration'

// import History from '../pages/History'
// import LandinPage from '../pages/LandinPAge/LandinPage'
// import RegisterAll from '../pages/RegisterAll'

// const AppRoutes = () => {
//   const logged = true // luego lo traemos desde un estado
//   const routes = useRoutes([
//     {
//       path: '/',
//       element: <LandinPage />
//     },
//     logged === true &&
//     {
//       path: '/profile',
//       element: ''
//     },
//     {
//       path: '/novedades',
//       element: <GuardianJournal />
//     },
//     {
//       path: '/login',
//       element: <LoginForm />
//     },
//     {
//       path: '/register',
//       element: <Register />
//     },
//     {
//       path: '/photoCapture/registerExito',
//       element: <SuccessfulRegistration />
//     },
//     {
//       path: '/registro',
//       element: <RegisterAll />
//     },
//     {
//       path: '/historial/*',
//       element: <History />
//     }
//   ])

//   return routes
// }

// export default AppRoutes
