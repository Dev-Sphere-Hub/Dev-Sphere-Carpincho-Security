const filtersProductsByKeyword = ({ products, nameColumn, searchTerm }) => {
  console.log(nameColumn)
  return products.filter((item) =>
    item[nameColumn].toLowerCase().includes(searchTerm.toLowerCase())
  )
}

export default filtersProductsByKeyword
