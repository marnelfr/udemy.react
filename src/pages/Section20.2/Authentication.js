import AuthForm from "../../components/Section20.2/AuthForm";
import {json, redirect, useActionData} from "react-router-dom";
import {setAuthToken} from "../../util/Section20.2/auth";

export const authAction = async ({request, params}) => {
  const searchParams = new URL(request.url).searchParams
  const mode = searchParams.get('mode') === 'login' ? 'login' : 'signup'

  const data = await request.formData()
  const user = {
    email: data.get('email'),
    password: data.get('password')
  }

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })

  if(response.status === 422 || response.status === 401) {
    return response
  }

  if(!response.ok) {
    throw json({message: 'Can not signup user'}, {status: 500})
  }

  const resData = await response.json()
  setAuthToken(resData.token)

  return redirect('/')
}

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;