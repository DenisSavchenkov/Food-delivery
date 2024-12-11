import { Link } from 'react-router';
import styles from './Header.module.scss';
import logoIcon from '/logo.png';
import loginIcon from '/login-icon.svg';
import basketIcon from '/basket-icon.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img className={styles.logoIcon} src={logoIcon} alt="logo" />
        <div className={styles.logoText}>
          <h1 className={styles.title}>Food-delivery</h1>
          <p className={styles.titleText}>Самая быстрая доставка</p>
        </div>
      </Link>
      <input className={styles.search} type="text" />
      <button className={styles.ProfileButton}>
        <img src={loginIcon} alt="login-icon" />
        <p className={styles.loginText}>Профиль</p>
      </button>
      <button className={styles.cardButton}>
        <img className={styles.basketIcon} src={basketIcon} alt="Basket-icon" />
      </button>
    </div>
  );
};

export default Header;
