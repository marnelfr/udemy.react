import {Link} from "react-router-dom";

const ProductsPage = () => {
  return (
    <div>
      My product page
      <p>Go back to <Link to={'/'}>Home page</Link></p>
    </div>
  )
}

export default ProductsPage