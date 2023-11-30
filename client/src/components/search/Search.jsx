import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import './searchButton.css'
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
    setRedirect(true)
  }

  return (
    <div className='containerSear w-full h-auto flex justify-center items-center'>
      {
        redirect
          ? (
            <p className='redirect '>redirigiendo...</p>
            )
          : (
            <>
              <input
                type='text'
                name='text'
                className='input h-[50px] w-[268px] rounded-3xl border-2 border-blue-500 bg-white'
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder='Buscador'
              />
              <button className='icon' onClick={handleSearch}>
                <IoSearch />
              </button>
            </>
            )
      }
    </div>
  )
}

export default Search
