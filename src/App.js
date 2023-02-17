import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {ModalContextProvider} from "./store/modal-context";

const FoodApp = props => {
  return (
    <>
      <ModalContextProvider>
        <Cart/>
        <Header />
      </ModalContextProvider>
      <main>
        <Meals />
      </main>
    </>
  )
}

export default FoodApp