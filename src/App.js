import Header from "./components/Section11/Layout/Header";
import Meals from "./components/Section11/Meals/Meals";
import Cart from "./components/Section11/Cart/Cart";

const App = props => {
  return (
    <>
      <Cart/>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  )
}

export default App