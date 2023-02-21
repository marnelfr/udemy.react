import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'MacBook',
    price: 2340,
    description: 'This is a super powerful computer'
  },
  {
    id: 'p2',
    title: 'Display touch',
    price: 1245,
    description: 'The best screen for computer ever'
  },
  {
    id: 'p3',
    title: 'iPhone 13 Pro',
    price: 1134.99,
    description: 'The phone I offered to my (I hope) girlfriend'
  }
]


const Products = (props) => {
  const productList = DUMMY_PRODUCTS.map(product => <ProductItem
    key={product.id}
    id={product.id}
    title={product.title}
    price={product.price}
    description={product.description}
  />)

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productList}</ul>
    </section>
  );
};

export default Products;
