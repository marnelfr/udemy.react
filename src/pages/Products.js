import {Link} from "react-router-dom";

const ProductsPage = () => {
  return (
    <>
      <h1>My product page</h1>
      <p>Go back to <Link to={'/'}>Home page</Link></p>
    </>
  )
}

export default ProductsPage