import { ProductsListProp } from '../../Types';
import ProductItem from '../ProductItem';
import { FC } from 'react';
import styles from './ProductList.module.scss';

const ProductList: FC<ProductsListProp> = ({ products }) => {
  return (
    <ul className={styles.productList}>
      {products.map((product) => {
        return <ProductItem {...product} key={product.id} />;
      })}
    </ul>
  );
};

export default ProductList;
