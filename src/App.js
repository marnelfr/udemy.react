import Cart from './components/Section19/Cart/Cart';
import Layout from './components/Section19/Layout/Layout';
import Products from './components/Section19/Shop/Products';
import {useSelector} from "react-redux";

function App() {
  const showModal = useSelector(state => state.modal.display)
  return (
    <Layout>
      {showModal && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
