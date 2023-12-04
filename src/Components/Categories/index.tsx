import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setActiveCategory } from '../../redux/slices/filterSlice';
import styles from './Categories.module.scss';
import React from 'react';

export const categories = [
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
  const { activeCategory } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  return (
    <ul className={styles.categories}>
      {categories.map((category, index) => {
        return (
          <li
            onClick={() => dispatch(setActiveCategory(index))}
            className={styles.category}
            style={
              activeCategory === index
                ? { background: '#000', color: '#fff' }
                : undefined
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
