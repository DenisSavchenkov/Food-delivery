import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setActiveSort, setOrderSort } from '../../redux/slices/filterSlice';
import styles from './Sort.module.scss';
import React from 'react';

interface SortByType {
  text: string;
  sortProperty: string;
}

export const sortBy: SortByType[] = [
  {
    text: 'алфавиту',
    sortProperty: 'title',
  },
  {
    text: 'цене',
    sortProperty: 'price',
  },
];

const Sort: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { activeSort, orderSort } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  // Close popup when choice sort category
  const closePopupWhenClicked = (index: number): void => {
    dispatch(setActiveSort(index));
    setIsOpen(false);
  };

  return (
    <div className={styles.sort}>
      <img
        onClick={() => dispatch(setOrderSort(!orderSort))}
        className={styles.sortIcon}
        style={orderSort ? { transform: 'none' } : undefined}
        src="arrow.svg"
        alt="arrow"
      />
      <span className={styles.sortText}>
        Сортировка по:
        <span onClick={() => setIsOpen(!isOpen)}>
          {sortBy[activeSort].text}
        </span>
      </span>

      <ul
        style={isOpen ? { transform: 'scale(1)' } : undefined}
        className={styles.sortPopup}
      >
        {sortBy.map((obj, index) => {
          return (
            <li
              onClick={() => closePopupWhenClicked(index)}
              key={index}
              style={activeSort === index ? { color: '#fe5f1e' } : undefined}
              className={styles.popupText}
            >
              {obj.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sort;
