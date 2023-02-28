import Navigation from "../../../components/Section25/Nav/Navigation";
import {Outlet} from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default RootLayout
