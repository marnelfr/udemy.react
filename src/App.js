import Cart from './components/Section19/Cart/Cart';
import Layout from './components/Section19/Layout/Layout';
import Products from './components/Section19/Shop/Products';
import {useSelector} from "react-redux";
import {useEffect} from "react";

function App() {
  const showModal = useSelector(state => state.modal.display)
  const items = useSelector(state => state.cart.items)

  useEffect(() => {
    fetch('https://udemy-react-a7270-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(items)
    })
  }, [items])

  return (
    <Layout>
      {showModal && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
