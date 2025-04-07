import FilterBar from '../../Components/FilterBar/FilterBar';
import Products from '../../Components/Products/Products';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <FilterBar />
      <Products />
    </div>
  );
};

export default HomePage;
