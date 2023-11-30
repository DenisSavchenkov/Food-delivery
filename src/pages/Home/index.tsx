import styles from './Home.module.scss';
import React from 'react';
import Header from '../../Components/Header';
import Categories from '../../Components/Categories';
import Sort from '../../Components/Sort';
import ProductList from '../../Components/PrdouctList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchProducts } from '../../redux/slices/getProductsSlice';

const Home = () => {
  const { isLoading } = useAppSelector((state) => state.getProducts);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.homePage}>
      <Header />
      <div className={styles.content}>
        <div className={styles.contentTop}>
          <Categories />
          <Sort />
        </div>
        {isLoading ? null : <ProductList />}
      </div>
    </div>
  );
};

export default Home;
