import Header from "./components/Section11/Layout/Header";
import Meals from "./components/Section11/Meals/Meals";
import Cart from "./components/Section11/Cart/Cart";
import {ModalContextProvider} from "./store/Modal/modal-context";

const App = props => {
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

export default App