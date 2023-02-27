import {Outlet, useSubmit} from "react-router-dom";
import MainNavigation from "../../components/MainNavigation";
import {useEffect} from "react";
import {getAuthToken, getExpirationDuration} from "../../util/auth";

const RootLayout = () => {
  const submit = useSubmit()
  const token = getAuthToken()

  useEffect(() => {
    if(!token || token === 'EXPIRED') {
      return;
    }
    const duration = getExpirationDuration()
    const timer = setTimeout(() => {
      submit(null, {action: '/logout', method: 'post'})
    }, duration)
    return () => clearTimeout(timer)
  }, [submit, token])

  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  )
}

export default RootLayout
