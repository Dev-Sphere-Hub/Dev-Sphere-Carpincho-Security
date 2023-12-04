import React from 'react'
import VerticalMenu from '../../layouts/verticalMenu'

const History = () => {
  return (
    <div className='variabeleContain w-[100%] bg-pink-400 lg:flex lg:flex-row lg:flex-wrap lg:justify-start lg:items-start lg:gap-1'>
      <VerticalMenu />
      <section className='relative w-[100%] min-h-[calc(100vh-270px)]  bg-teal-400 m-0 p-0 flex flex-col gap-8 min-w-[300px] lg:w-[calc(100%-310px)] lg:ml-auto' />
    </div>
  )
}

export default History
