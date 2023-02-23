import {Link} from "react-router-dom";
import MainNavigation from "../../components/Section20/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Error page</h1>
        Go back to the <Link to={'/'}>home page</Link>
      </main>
    </>
  )
}

export default ErrorPage
