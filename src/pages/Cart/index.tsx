import { FC } from 'react';
import styles from './Cart.module.scss';
import Header from '../../Components/Header';
import CartProduct from '../../Components/CartProduct';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  cartProductType,
  deleteAllProducts,
} from '../../redux/slices/cartSlice';

const Cart: FC = () => {
  const { cartProducts, totalPrice } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  // Calc total quantity
  const productsQuantity = cartProducts.reduce(
    (qnty: number, obj: cartProductType): number => {
      return qnty + obj.quantity;
    },
    0
  );

  const checkBeforeDelete = (): boolean => {
    return window.confirm('Вы желате очистить всю корзину?');
  };

  return (
    <div className={styles.cartPage}>
      <Header />
      <div className={styles.inner}>
        <div className={styles.top}>
          <h2 className={styles.topTitle}>
            <img src="cart-icon-black.svg" alt="basket" />
            <span className={styles.topText}>Корзина</span>
          </h2>
          <button
            onClick={() => dispatch(deleteAllProducts(checkBeforeDelete()))}
            className={styles.clearBtn}
          >
            <img src="clear-cart-icon.svg" alt="clear" />
            <span className={styles.clearText}>Очистить корзину</span>
          </button>
        </div>
        <ul className={styles.products}>
          {cartProducts.map((product) => {
            return <CartProduct {...product} key={product.id} />;
          })}
        </ul>
        <div className={styles.bottom}>
          <div className={styles.bottomInfo}>
            <span className={styles.totalQuantity}>
              Всего товаров: <span>{productsQuantity} шт.</span>
            </span>
            <span className={styles.totalPrice}>
              Сумма заказа: <span>{totalPrice} ₽</span>
            </span>
          </div>
          <div className={styles.bottomButtons}>
            <button className={styles.backBtn}>
              <img src="arrow-left.svg" alt="arrow" />
              Вернуться назад
            </button>
            <button className={styles.orderBtn}>Оплатить сейчас</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
