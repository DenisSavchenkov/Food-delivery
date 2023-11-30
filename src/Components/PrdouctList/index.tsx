import ProductItem from '../ProductItem';
import { FC } from 'react';
import styles from './ProductList.module.scss';
import { useAppSelector } from '../../redux/hooks';

const ProductList: FC = () => {
  const { products } = useAppSelector((state) => state.getProducts);

  return (
    <ul className={styles.productList}>
      {products.map((product) => {
        return <ProductItem {...product} key={product.id} />;
      })}
    </ul>
  );
};

export default ProductList;
