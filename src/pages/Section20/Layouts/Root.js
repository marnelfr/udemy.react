import {Outlet} from "react-router-dom";

import MainNavigation from "../../../components/Section20/MainNavigation";

const RootLayout = () => {
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
