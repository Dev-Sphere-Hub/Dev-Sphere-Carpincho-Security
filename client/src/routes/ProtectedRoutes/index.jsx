// ProtectedRoutes.js
import React from 'react'
import { Route, Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true

  if (!isAuthenticated) {
    return <Navigate to='/login' />
  }

  return <Route>{children}</Route>
}

export default ProtectedRoute
