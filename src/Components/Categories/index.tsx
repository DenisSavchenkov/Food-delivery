import styles from './Categories.module.scss';

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

const Categories = ({ activeIndex, onClickCategory }) => {
  return (
    <ul className={styles.categories}>
      {categories.map((category, index) => {
        return (
          <li
            onClick={() => onClickCategory(category, index)}
            className={
              index === activeIndex ? styles.activeCategory : styles.category
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
