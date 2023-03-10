import {Form, useSearchParams, Link, useActionData, useNavigation} from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  const errorData = useActionData()

  const [searchParams] = useSearchParams()
  const isLogin = searchParams.get('mode') === 'login'

  const {state} = useNavigation()
  const isSubmitting = state === 'submitting'

  return (
    <>
      {errorData && errorData.message && <p>
        {errorData.message}
      </p>}
      {errorData && errorData.errors && <ul>
        {Object.values(errorData.errors).map(error => <li key={error}>{error}</li>)}
      </ul>}
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : `${isLogin ? 'Login' : 'Save'}`}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
