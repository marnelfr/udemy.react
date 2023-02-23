import {Outlet} from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div>Root layout</div>
      <Outlet />
    </>
  )
}

export default RootLayout
