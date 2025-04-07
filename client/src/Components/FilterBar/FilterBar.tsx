import sortArrow from '/sort-arrow.svg';
import styles from './FilterBar.module.scss';
import { useState } from 'react';

const categories = [
  'Роллы',
  'Суши',
  'Пицца',
  'Горячее',
  'Поке',
  'Закуски',
  'Напитки',
  'Соусы',
];
const sortBy = ['алфавиту', 'цене'];

const FilterBar = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [activeSort, setActiveSort] = useState<number>(0);

  const sortChoice = (i: number) => {
    setActiveSort(i);
    setShowPopup(false);
  };

  return (
    <div className={styles.filterBar}>
      {/* Категории */}
      <ul className={styles.categories}>
        {categories.map((category, i) => {
          return (
            <li key={i} className={styles.category}>
              {category}
            </li>
          );
        })}
      </ul>
      {/* Сортировка */}
      <div className={styles.sort}>
        <img src={sortArrow} alt="Sort-arrow" />
        <p>
          Сортировка по:{' '}
          <span onClick={() => setShowPopup(!showPopup)}>
            {sortBy[activeSort]}
          </span>
        </p>

        {/* Попап Сортировки */}
        {showPopup && (
          <ul className={styles.sortPopup}>
            {sortBy.map((element, i) => {
              return (
                <li
                  onClick={() => sortChoice(i)}
                  key={i}
                  className={
                    activeSort === i ? styles.activeSort : styles.sortBy
                  }
                >
                  {element}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
