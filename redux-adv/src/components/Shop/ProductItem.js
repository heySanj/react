import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";


const ProductItem = (props) => {
  const { product } = props;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
      dispatch(cartActions.addItem({...product, amount: 1}));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{product.title}</h3>
          <div className={classes.price}>${product.price.toFixed(2)}</div>
        </header>
        <p>{product.description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
