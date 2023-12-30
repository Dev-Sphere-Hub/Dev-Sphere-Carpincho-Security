import { useEffect, useState } from 'react'

const usePagination = (listaDeItems) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage())
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  // const itemsPerPage = 4
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = listaDeItems.reverse()?.slice(indexOfFirstItem, indexOfLastItem)

  const funcPaginate = (action) => {
    if (action === 'next') {
      setCurrentPage((prev) => {
        if (prev === Math.ceil(listaDeItems.length / itemsPerPage)) {
          return prev
        } else {
          return prev + 1
        }
        // prev + 1
      })
    } else if (action === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const getItemsPerPage = () => {
    const windowWidth = window.innerWidth

    if (windowWidth >= 1728) {
      return 8
    } else {
      return 4
    }
  }

  return { currentItems, funcPaginate }
}

export default usePagination
