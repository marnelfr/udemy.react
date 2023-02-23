import {Link} from "react-router-dom";

const ProductsPage = () => {
  return (
    <>
      <h1>My product page</h1>
      <h3>Products list:</h3>
      <ul>
        <Link to={'/products/1'}>Product 1</Link> <br/>
        <Link to={'/products/2'}>Product 2</Link> <br/>
        <Link to={'/products/3'}>Product 3</Link> <br/>
      </ul>
      <p>Go back to <Link to={'/'}>Home page</Link></p>
    </>
  )
}

export default ProductsPage