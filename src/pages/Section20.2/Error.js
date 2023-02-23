import {Link} from "react-router-dom";

const ErrorPage = (props) => {
  const code = props.code || 404
  return (
    <main>
      <h1>{code}</h1>
      <h3 style={{color: 'red'}}>{props.message}</h3>
      <Link to='..' relative='path'>Back</Link>
    </main>
  )
}

export default ErrorPage
