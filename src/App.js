import Cart from './components/Section19/Cart/Cart';
import Layout from './components/Section19/Layout/Layout';
import Products from './components/Section19/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchCartData, sendCartData} from "./store/Section19/cart-actions";

let initialRender = true

function App() {
  const showModal = useSelector(state => state.modal.display)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if(initialRender) {
      initialRender = false
      return
    }
    if(cart.changed) {
      dispatch(sendCartData(cart.items))
    }
  }, [cart, dispatch])

  return (
    <Layout>
      {showModal && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
