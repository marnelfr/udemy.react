import PageContent from "../../components/Section20.2/PageContent";
import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
  const response = useRouteError()
  let message = 'An error occured!'
  let title = 'Error'

  if(response.status === 500) {
    message = JSON.parse(response.data).message
  }
  if(response.status === 400) {
    message = 'Page not found'
    title = 404
  }
  return <PageContent title={title}>
    {message}
  </PageContent>
}

export default ErrorPage
