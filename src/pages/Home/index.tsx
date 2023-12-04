import styles from './Home.module.scss';
import React from 'react';
import Header from '../../Components/Header';
import Categories, { categories } from '../../Components/Categories';
import Sort, { sortBy } from '../../Components/Sort';
import ProductList from '../../Components/PrdouctList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchProducts } from '../../redux/slices/getProductsSlice';
import Spinner from '../../utils/Spinner/Spinner';

const Home = () => {
  const { isLoading } = useAppSelector((state) => state.getProducts);
  const { activeCategory, activeSort, orderSort } = useAppSelector(
    (state) => state.filter
  );
  const dispatch = useAppDispatch();

  // URL Variables
  const filterCategory =
    categories[activeCategory] === 'Все'
      ? ''
      : `&filter=${categories[activeCategory]}`;

  const filterSort = sortBy[activeSort].sortProperty;

  const filterOrder = orderSort ? 'asc' : 'desc';

  const params = [filterCategory, filterSort, filterOrder];

  // Getting products
  React.useEffect(() => {
    dispatch(fetchProducts([...params]));
  }, [filterCategory, filterSort, filterOrder]);

  return (
    <div className={styles.homePage}>
      <Header />
      <div className={styles.content}>
        <div className={styles.contentTop}>
          <Categories />
          <Sort />
        </div>
        {isLoading ? <Spinner /> : <ProductList />}
      </div>
    </div>
  );
};

export default Home;
