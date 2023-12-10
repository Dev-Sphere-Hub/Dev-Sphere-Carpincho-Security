import React from 'react'
import Search from '../../components/search'
import Categories from '../../components/Categories'
import LatestArrivals from '../../components/latestArrivals'

const Home = () => {
  return (
    <section className='relative w-[100%] h-auto bg-white m-0 p-0 flex flex-col gap-8 min-w-[300px] mt-[140px] lg:mt-[80px]'>
      <Search />
      <Categories />
      <LatestArrivals />
    </section>
  )
}

export default Home
