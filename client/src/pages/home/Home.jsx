import React from 'react'
import Search from '../../components/search/Search'
import Categories from '../../components/categories/Categories'

const Home = () => {
  return (
    <section className='relative w-[100%] h-[100%] bg-white m-0 p-0 flex flex-col gap-5 min-w-[300px]'>
      <Search />

      <Categories />
    </section>
  )
}

export default Home
