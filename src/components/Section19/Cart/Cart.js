import Card from '../UI/Card/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Modal from "../UI/Modal/Modal";
import {useSelector} from "react-redux";

const Cart = (props) => {
  const items = useSelector(state => state.cart.items)

  const cartItemList = items.map(item => <CartItem
    key={item.id}
    item={{ title: item.title, quantity: item.quantity, total: item.total, price: item.price }}
  />)

  return (
    <Modal>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>{cartItemList}</ul>
      </Card>
    </Modal>
  );
};

export default Cart;
