import AuthForm from '../components/AuthForm';
import {json, redirect} from "react-router-dom";
import {setAuthToken} from "../util/auth";

export const authAction = async ({request, params}) => {
  const url = new URL(request.url)
  const searchParams = url.searchParams

  let mode = 'login';
  let message = 'Can not check login';
  if (searchParams.get('mode') !== 'login') {
    mode = 'signup';
    message = 'Can not sign you up for the moment';
  }
  const path = 'http://localhost:8080/' + mode

  const data = await request.formData()
  const userInfo = {
    email: data.get('email'),
    password: data.get('password')
  }

  const response = await fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })

  if(response.status === 422 || response.status === 401) {
    return response
  }

  if(!response.ok) {
    throw json({message}, {status: 500})
  }

  const resData = await response.json()
  setAuthToken(resData.token)

  return redirect('/events')
}

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;