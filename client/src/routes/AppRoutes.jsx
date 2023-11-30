import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../pages/home/Home'

const AppRoutes = () => {
  const logged = true // luego lo traemos desde un estado
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {
        logged === true &&
          <Route path='/profile' element='' />
      }
    </Routes>

  )
}

export default AppRoutes
