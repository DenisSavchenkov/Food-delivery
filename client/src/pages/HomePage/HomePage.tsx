import FilterBar from '../../Components/FilterBar/FilterBar';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <FilterBar />
    </div>
  );
};

export default HomePage;
