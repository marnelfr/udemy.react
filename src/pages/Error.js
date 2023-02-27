import MainNavigation from "../components/MainNavigation";
import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let message = 'An error occurred';
  if(error.status === 500) {
    message = error.data.message;
  }
  return (
    <>
      <MainNavigation />
      <p>{message}</p>
    </>
  )
}

export default ErrorPage
