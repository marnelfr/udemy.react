import {useParams} from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams()

  return (
    <>
      <h1>Product details page!</h1>
      <p>{id}</p>
    </>
  )
}

export default ProductDetailsPage
