const filtersProductsByKeyword = (products, searchTerm) => {
  return products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
}

export default filtersProductsByKeyword
