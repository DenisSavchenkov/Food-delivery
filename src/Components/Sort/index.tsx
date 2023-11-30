import styles from './Sort.module.scss';
import React from 'react';

const sortBy = ['алфавиту', 'цене'];

const Sort = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isActiveIndex, setIsActiveIndex] = React.useState<number>(0);

  const closePopupWhenClicked = (index: number): void => {
    setIsActiveIndex(index);
    setIsOpen(false);
  };

  return (
    <div className={styles.sort}>
      <img className={styles.sortIcon} src="arrow.svg" alt="arrow" />
      <span className={styles.sortText}>
        Сортировка по:{' '}
        <span onClick={() => setIsOpen(!isOpen)}>{sortBy[0]}</span>
      </span>

      <ul className={isOpen ? styles.activePopup : styles.sortPopup}>
        {sortBy.map((text: string, index: number) => {
          return (
            <li
              onClick={() => closePopupWhenClicked(index)}
              key={index}
              className={
                isActiveIndex === index ? styles.activeText : styles.popupText
              }
            >
              {text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sort;
