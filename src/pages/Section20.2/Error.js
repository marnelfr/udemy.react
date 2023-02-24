import PageContent from "../../components/Section20.2/PageContent";
import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError()
  let message = 'An error occured!'
  let title = 'Error'

  if(error.status === 500) {
    message = error.data.message
  }
  if(error.status === 400) {
    message = 'Page not found'
    title = 404
  }
  return <PageContent title={title}>
    {message}
  </PageContent>
}

export default ErrorPage
