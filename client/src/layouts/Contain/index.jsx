import React from 'react'
import Header from '../Header'
// import Footer from '../Footer'

const Contain = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  )
}
export default Contain
