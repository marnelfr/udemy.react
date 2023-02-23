import Cart from './Cart/Cart';
import Layout from './Layout/Layout';
import Products from './Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchCartData, sendCartData} from "../../store/Section19/cart-actions";
import './App.css';

let initialRender = true

function App19() {
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

export default App19;
