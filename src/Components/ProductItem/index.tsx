import { FC } from 'react';
import styles from './ProductItem.module.scss';
import { Product } from '../../Types';

const ProductItem: FC<Product> = ({
  imageURL,
  title,
  weight,
  description,
  price,
}) => {
  return (
    <li className={styles.productItem}>
      <img className={styles.img} src={imageURL} alt="img" />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.weight}>
          Вес: <span>{weight} г.</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.price}>{price} ₽</span>
        <button className={styles.btn}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#EB5A1E"
            />
          </svg>
          <span className={styles.btnText}> Добавить</span>
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
