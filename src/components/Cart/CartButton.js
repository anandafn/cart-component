import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showCartActions } from "../../store/cart-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const productCounter = useSelector(
    (state) => state.counterCart.totalQuantity
  );

  const clickHandler = () => {
    dispatch(showCartActions.toggle());
  };

  return (
    <button onClick={clickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{productCounter}</span>
    </button>
  );
};

export default CartButton;
