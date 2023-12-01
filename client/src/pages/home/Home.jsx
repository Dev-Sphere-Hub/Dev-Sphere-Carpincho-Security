import React from 'react'
import Search from '../../components/search/Search'
import Categories from '../../components/categories/Categories'
import LatestArrivals from '../../components/latestArrivals/LatestArrivals'

const Home = () => {
  return (
    <section className='relative w-[100%] h-auto bg-white m-0 p-0 flex flex-col gap-8 min-w-[300px]'>
      <Search />
      <Categories />
      <LatestArrivals />
    </section>
  )
}

export default Home
