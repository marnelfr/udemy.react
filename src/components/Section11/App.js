import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import {ModalContextProvider} from "../../store/Section11/modal-context";
import {CartContextProvider} from "../../store/Section11/cart-context";

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