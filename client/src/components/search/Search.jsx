import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import packages from './dbPruebas'
import filtersProductsByKeyword from './filtersProductsByKeyword'

const Search = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    if (redirect === true) {
      setTimeout(() => {
        navigate('/search')
        setRedirect(false)
      }, 2000)
    }
  }, [redirect])

  const handleSearch = (e) => {
    const filteredData = filtersProductsByKeyword(packages, searchTerm)
    console.log('Foods Filter Keyword ->', filteredData)
    setRedirect(false)
  }

  return (
    <div className='containerSear w-full h-auto flex justify-center items-center'>
      {
        redirect
          ? (
            <p className='redirect '>redirigiendo...</p>
            )
          : (
            <div className='relative'>
              <input
                type='text'
                name='text'
                className='input h-[45px] w-[208px] rounded-[50px] border-2 border-colorCustom1 bg-white outline-none font-parrafo font-medium text-sm px-7'
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder='Buscador'
              />
              <button className='icon absolute left-2 top-[14px] text-lg' onClick={handleSearch}>
                <IoSearch />
              </button>
            </div>
            )
      }
    </div>
  )
}

export default Search
