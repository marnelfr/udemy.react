import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {ModalContextProvider} from "./store/modal-context";
import CartContextProvider from "./store/CartContext/CartContextProvider";

const FoodApp = props => {
  return (
    <CartContextProvider>
      <ModalContextProvider>
        <Cart/>
        <Header />
      </ModalContextProvider>
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  )
}

export default FoodApp