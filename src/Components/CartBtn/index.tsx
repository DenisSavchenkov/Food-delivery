import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './CartBtn.module.scss';
import { useAppSelector } from '../../redux/hooks';
import { cartProductType } from '../../redux/slices/cartSlice';

const CartBtn: FC = () => {
  const { totalPrice, cartProducts } = useAppSelector((state) => state.cart);

  // Calc total quantity
  const productsQuantity = cartProducts.reduce(
    (qnty: number, obj: cartProductType): number => {
      return qnty + obj.quantity;
    },
    0
  );
  return (
    <Link to="/cart" className={styles.cartBtn}>
      <span className={styles.price}>{totalPrice} ₽</span>
      <div className={styles.column}></div>
      <div className={styles.count}>
        <img src="/cart-icon.svg" alt="cart-icon" />
        <span>{productsQuantity}</span>
      </div>
    </Link>
  );
};

export default CartBtn;
