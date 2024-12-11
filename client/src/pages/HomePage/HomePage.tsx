import Header from '../../Components/Header';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>Все продукты</h1>
    </div>
  );
};

export default HomePage;
