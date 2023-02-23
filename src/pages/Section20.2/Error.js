import {Link} from "react-router-dom";

const ErrorPage = (props) => {
  return (
    <main>
      <h1>404</h1>
      <h3 style={{color: 'red'}}>{props.message}</h3>
      <Link to='..' relative='path'>Back</Link>
    </main>
  )
}

export default ErrorPage
