import AuthForm from '../components/AuthForm';

export const authAction = async ({request, params}) => {
  const url = new URL(request.url)
  const searchParams = url.searchParams

  const mode = searchParams.get('mode') === 'login' ? 'login' : 'signup'
  const path = 'http://localhost:8080/' + mode

  const data = await request.formData()
  const userInfo = {
    email: data.get('eamil'),
    password: data.get('password')
  }

  const response = await fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })


}

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;