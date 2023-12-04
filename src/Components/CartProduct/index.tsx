import { useAppDispatch } from '../../redux/hooks';
import {
  deleteCurrentProduct,
  minusCount,
  plusCount,
} from '../../redux/slices/cartSlice';
import styles from './CartProduct.module.scss';
import { FC } from 'react';

interface CartProductProp {
  title: string;
  weight: number;
  imageURL: string;
  price: number;
  id: string;
  quantity: number;
}

const CartProduct: FC<CartProductProp> = ({
  title,
  weight,
  imageURL,
  price,
  id,
  quantity,
}) => {
  const dispatch = useAppDispatch();
  return (
    <li className={styles.product}>
      <div className={styles.about}>
        <img className={styles.img} src={imageURL} alt="product" />
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.weight}>
            Вес: <span>{weight} г.</span>
          </p>
        </div>
      </div>
      <div className={styles.counter}>
        <img
          onClick={() => dispatch(minusCount(id))}
          src="minus-icon.svg"
          alt="minus"
        />
        <span className={styles.count}>{quantity}</span>
        <img
          onClick={() => dispatch(plusCount(id))}
          src="plus-icon.svg"
          alt="plus"
        />
      </div>
      <span className={styles.price}>{price} ₽</span>
      <button
        onClick={() => dispatch(deleteCurrentProduct(id))}
        className={styles.cancelBtn}
      >
        <img src="cancel-icon.svg" alt="cancel" />
      </button>
    </li>
  );
};

export default CartProduct;
