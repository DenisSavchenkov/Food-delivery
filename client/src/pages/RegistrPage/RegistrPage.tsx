import { Link } from 'react-router';
import styles from './RegistrPage.module.scss';
import loginLogo from '/delivery-man.png';

const RegistrPage = () => {
  return (
    <div className={styles.registrPage}>
      <div className={styles.inner}>
        <div className={styles.img}>
          <img src={loginLogo} alt="login-logo" />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>Регистрация</h2>
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
            <label>
              <p>Ваше имя:</p>
              <input className={styles.input} type="text" placeholder="Имя" />
            </label>
            <button className={styles.button}>Зарегистрироваться</button>
          </form>

          <div className={styles.bottom}>
            <p className={styles.text}>Есть аккаунт?</p>
            <Link className={styles.link} to="/login">
              Войти
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrPage;
