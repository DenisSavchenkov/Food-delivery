import { Link } from 'react-router';
import styles from './LoginPage.module.scss';
import loginLogo from '/delivery-man.png';

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.inner}>
        <div className={styles.img}>
          <img src={loginLogo} alt="login-logo" />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>Вход</h2>
          <form className={styles.form}>
            <label>
              <p> Ваш email:</p>
              <input
                className={styles.input}
                type="email"
                placeholder="Email"
              />
            </label>
            <label>
              <p> Ваш пароль:</p>
              <input
                className={styles.input}
                type="password"
                placeholder="Пароль"
              />
            </label>
            <button className={styles.button}>Вход</button>
          </form>

          <div className={styles.bottom}>
            <p className={styles.text}>Нет аккаунта?</p>
            <Link className={styles.link} to="/registr">
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
