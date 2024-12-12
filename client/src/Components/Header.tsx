import { Link } from 'react-router';
import { useState } from 'react';
import styles from './Header.module.scss';
import logoIcon from '/logo.png';
import loginIcon from '/login-icon.svg';
import basketIcon from '/basket-icon.svg';
import searchIcon from '/search-icon.svg';
import cancelIcon from '/cancel-icon.svg';

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <img className={styles.logoIcon} src={logoIcon} alt="logo" />
          <div className={styles.logoText}>
            <h1 className={styles.title}>Food-delivery</h1>
            <p className={styles.subTitle}>Самая быстрая доставка</p>
          </div>
        </Link>
        <label className={styles.searchLabel}>
          <input
            className={styles.search}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Поиск..."
          />
          <img
            className={styles.searchIcon}
            src={searchIcon}
            alt="search-icon"
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className={styles.cancelIcon}
              src={cancelIcon}
              alt="cancelIcon"
            />
          )}
        </label>
        <Link to="/login" className={styles.profileButton}>
          <img
            className={styles.profileIcon}
            src={loginIcon}
            alt="login-icon"
          />
          <span className={styles.profileText}>Вход</span>
        </Link>
        <button className={styles.cardButton}>
          <img
            className={styles.basketIcon}
            src={basketIcon}
            alt="Basket-icon"
          />
          <span className={styles.countProducts}>0</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
