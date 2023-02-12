import Header from "./components/Section11/Layout/Header";
import Meals from "./components/Section11/Meals/Meals";
import Cart from "./components/Section11/Cart/Cart";
import {ModalContextProvider} from "./store/Section11/modal-context";
import {CartContextProvider} from "./store/Section11/cart-context";

const App = props => {
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

export default App