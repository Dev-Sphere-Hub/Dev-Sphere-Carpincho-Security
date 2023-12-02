const filtersProductsByKeyword = (products, searchTerm) => {
  return products.filter((item) =>
    item.destinatario.toLowerCase().includes(searchTerm.toLowerCase())
  )
}

export default filtersProductsByKeyword
