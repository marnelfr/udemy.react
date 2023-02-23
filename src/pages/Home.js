import {Link} from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>My home page</div>
      <p>Go to <Link to={'/products'}>products page</Link></p>
    </>
  )
}

export default HomePage