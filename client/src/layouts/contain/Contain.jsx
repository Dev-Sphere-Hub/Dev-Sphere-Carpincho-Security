import React from 'react'
import Header from '../header'
import Footer from '../footer'


const Contain = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Contain
