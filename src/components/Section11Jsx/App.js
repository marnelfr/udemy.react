import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";

const FoodApp = props => {
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

export default FoodApp