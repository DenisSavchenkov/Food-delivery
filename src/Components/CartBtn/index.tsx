import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './CartBtn.module.scss';

const CartBtn: FC = () => {
  return (
    <Link to="/cart" className={styles.cartBtn}>
      <span className={styles.price}>520 ₽</span>
      <div className={styles.column}></div>
      <div className={styles.count}>
        <img src="cart-icon.svg" alt="cart-icon" />
        <span>3</span>
      </div>
    </Link>
  );
};

export default CartBtn;
