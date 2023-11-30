import styles from './Categories.module.scss';
import React from 'react';

const categories = [
  'Все',
  'Роллы',
  'Суши',
  'Пицца',
  'Горячее',
  'Поке',
  'Закуски',
  'Напитки',
  'Соусы',
];

const Categories: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  return (
    <ul className={styles.categories}>
      {categories.map((category: string, index: number) => {
        return (
          <li
            onClick={() => setActiveIndex(index)}
            className={
              activeIndex === index ? styles.activeCategory : styles.category
            }
            key={index}
          >
            {category}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
