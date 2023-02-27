import {Outlet, useLoaderData, useSubmit} from "react-router-dom";
import MainNavigation from "../../../components/Section20.2/MainNavigation";
import {useEffect} from "react";
import {getTokenDuration} from "../../../util/auth";

const RootLayout = () => {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if(!token) {
      return;
    }
    if(token === 'EXPIRED') {
      return;
    }

    const tokenDuration = getTokenDuration()

    const timerId = setTimeout(() => {
      submit(null, {action: '/logout', method: 'post'});
    }, tokenDuration);
    return () => clearTimeout(timerId)
  }, [token, submit])

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
