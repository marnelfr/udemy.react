import React, {useState} from "react";

const DUMMY_PRODUCT_DATA = [
  {
    id: 'p1',
    title: 'Red Scarf',
    description: 'A pretty red scarf.',
    isFavorite: false
  },
  {
    id: 'p2',
    title: 'Blue T-Shirt',
    description: 'A pretty blue t-shirt.',
    isFavorite: false
  },
  {
    id: 'p3',
    title: 'Green Trousers',
    description: 'A pair of lightly green trousers.',
    isFavorite: false
  },
  {
    id: 'p4',
    title: 'Orange Hat',
    description: 'Street style! An orange hat.',
    isFavorite: false
  }
]

const ProductContext = React.createContext({
  products: [],
  toggleFavState: (id) => {}
})


export const ProductContextProvider = (props) => {
  const [products, setProducts] = useState(DUMMY_PRODUCT_DATA)

  const toggleFavState = id => {
    setProducts(products => {
      const index = products.findIndex(product => product.id === id)
      const newStatus = !products[index].isFavorite
      const updatedList = [...products]
      updatedList[index] = {...products[index], isFavorite: newStatus}
      return updatedList
    })
  }

  return (
    <ProductContext.Provider value={{products, toggleFavState}}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContext