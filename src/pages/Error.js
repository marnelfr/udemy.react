import MainNavigation from "../components/MainNavigation";
import {useRouteError} from "react-router-dom";
import PageContent from "../components/PageContent";

const ErrorPage = () => {
  const error = useRouteError();
  let title = 'Error occured';
  let message = 'An error occurred';
  if(error.status === 500) {
    title = 'Server side error';
    message = error.data.message;
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        {message}
      </PageContent>
    </>
  )
}

export default ErrorPage
