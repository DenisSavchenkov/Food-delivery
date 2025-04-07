import Product from '../Product/Product';
import styles from './Prdoucts.module.scss';
const Products = () => {
  return (
    <ul className={styles.products}>
      <Product />
    </ul>
  );
};

export default Products;
