import Cart from "../../components/Cart/Cart";
import Header from "../../components/Layout/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
