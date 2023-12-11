import React, { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import filtersProductsByKeyword from './filtersProductsByKeyword'

const Search = ({ allVisitas, nameColumn, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [buscando, setbuscando] = useState(false)

  useEffect(() => {
    if (buscando === true) {
      setTimeout(() => {
        setbuscando(false)
      }, 3000)
    }
  }, [buscando])

  const handleSubmit = (e) => {
    e.preventDefault()
    const filteredData = filtersProductsByKeyword({ products: allVisitas, nameColumn, searchTerm })
    handleSearch(filteredData)
    setbuscando(true)
    setSearchTerm('...buscando')
    setTimeout(() => {
      setSearchTerm('')
    }, 300)
  }

  return (
    <div className='containerSear w-full h-auto flex justify-center items-center'>
      {
        buscando
          ? (
            <div className='bg-gradient-to-r from-green-500 via-green-700 to-blue-400 rounded-[50px] p-1 font-titulo'>
              <div className=' h-[50px] w-[268px] rounded-[50px] bg-white outline-none font-parrafo font-medium text-lg px-8 flex items-center justify-center'>
                <p className='redirect '> Buscando...</p>
              </div>
            </div>
            )
          : (
            <form onSubmit={handleSubmit} className='relative'>
              <div className='bg-gradient-to-r from-green-500 via-green-700 to-blue-400 rounded-[50px] p-1 font-titulo text-lg '>
                <input
                  type='text'
                  name='text'
                  className='input h-[50px] w-[268px] rounded-[50px] bg-white outline-none font-parrafo font-medium text-sm px-8'
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder='Buscador'
                />
                <button type='submit' className='icon absolute h-[100%] left-2 top-0 text-xl flex justify-center items-center'>
                  <IoSearch />
                </button>
              </div>
            </form>
            )
      }
    </div>
  )
}

export default Search
