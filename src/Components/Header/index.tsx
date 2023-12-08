import { FC } from 'react';
import { Link } from 'react-router-dom';
import CartBtn from '../CartBtn';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img className={styles.logoImg} src="/logo.png" alt="logo" />
        <div className={styles.logoInfo}>
          <h1 className={styles.logoTitle}>FOOD-DELIVERY</h1>
          <p className={styles.logoText}>Самая вкусная еда во вселенной</p>
        </div>
      </Link>
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Введите блюдо"
        />
        <img
          className={styles.searchIcon}
          src="/search-icon.svg"
          alt="search-icon"
        />
      </div>
      <CartBtn />
    </div>
  );
};

export default Header;
