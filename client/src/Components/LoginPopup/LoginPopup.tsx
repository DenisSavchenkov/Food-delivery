import styles from './LoginPopup.module.scss';
import loginLogo from '/delivery-man.png';
import cancelIcon from '/cancel-icon.svg';
import { FC, useRef, useState, useEffect } from 'react';

interface LoginProps {
  setShowLogin: (param: boolean) => void;
}

const LoginPage: FC<LoginProps> = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState<string>('Вход');
  const ref = useRef<HTMLDivElement>(null);

  //  Закрытие попап при клике в не блока
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as HTMLDivElement)
      ) {
        setShowLogin(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <div className={styles.loginPopup}>
      <div ref={ref} className={styles.inner}>
        <div className={styles.img}>
          <img src={loginLogo} alt="login-logo" />
        </div>
        <div className={styles.info}>
          <img
            onClick={() => setShowLogin(false)}
            className={styles.cancelIcon}
            src={cancelIcon}
            alt="cancel-icon"
          />
          <h2 className={styles.title}>
            {currentState === 'Вход' ? currentState : 'Регистрация'}
          </h2>
          <form action="#" className={styles.form}>
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
            {currentState === 'Зарегистрироваться' && (
              <label>
                <p>Ваше имя:</p>
                <input className={styles.input} type="text" placeholder="Имя" />
              </label>
            )}
            <button className={styles.button}>{currentState}</button>
          </form>

          <div className={styles.bottom}>
            {currentState === 'Вход' ? (
              <p className={styles.text}>
                Нет аккаунта?
                <span
                  onClick={() => setCurrentState('Зарегистрироваться')}
                  className={styles.link}
                >
                  Зарегистрироваться
                </span>
              </p>
            ) : (
              <p className={styles.text}>
                Есть аккаунт?
                <span
                  onClick={() => setCurrentState('Вход')}
                  className={styles.link}
                >
                  Войти
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
