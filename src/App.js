import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const FoodApp = props => {
  return (
    <>
      {/*<Cart/>*/}
      <Header />
      <main>
        <Meals />
      </main>
    </>
  )
}

export default FoodApp