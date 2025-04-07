import styles from './Prdouct.module.scss';
import roll from '/roll.jpg';

const Product = () => {
  return (
    <li className={styles.product}>
      <img className={styles.productImg} src={roll} alt="product" />
      <div className={styles.productInfo}>
        <h2 className={styles.productTitle}>Калифорния</h2>
        <p className={styles.productDescription}>
          Сочный ролл с крабом, масаго и соусом яки. Сочный ролл с крабом,
          масаго и соусом яки. Сочный ролл с крабом, масаго и соусом яки. Сочный
          ролл с крабом, масаго и соусом яки. Сочный ролл с крабом, масаго и
          соусом яки.
        </p>
      </div>
      <div className={styles.productBottom}>
        <span className={styles.price}>395 ₽</span>
        <button className={styles.button}>
          <span>Добавить</span>
        </button>
      </div>
    </li>
  );
};

export default Product;
