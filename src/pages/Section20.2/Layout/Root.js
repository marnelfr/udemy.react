import {Outlet, useLoaderData, useSubmit} from "react-router-dom";
import MainNavigation from "../../../components/Section20.2/MainNavigation";
import {useEffect} from "react";

const RootLayout = () => {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if(!token) {
      return;
    }
    const timerId = setTimeout(() => {
      submit(null, {action: '/logout', method: 'post'});
    }, 1* 60 * 60 * 1000);
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
