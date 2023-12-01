import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setActiveSort, setOrderSort } from '../../redux/slices/filterSlice';
import styles from './Sort.module.scss';
import React, { ChangeEvent } from 'react';

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
  const popupRef = React.useRef<HTMLUListElement>(null);
  const dispatch = useAppDispatch();

  // Close popup when choice sort category
  const closePopupWhenClicked = (index: number): void => {
    dispatch(setActiveSort(index));
    setIsOpen(false);
  };

  // Close popup when clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    if (event.target !== popupRef.current) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className={styles.sort}>
      <img
        onClick={() => dispatch(setOrderSort(!orderSort))}
        className={orderSort ? styles.sortIconRotate : styles.sortIcon}
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
        ref={popupRef}
        className={isOpen ? styles.activePopup : styles.sortPopup}
      >
        {sortBy.map((obj, index) => {
          return (
            <li
              onClick={() => closePopupWhenClicked(index)}
              key={index}
              className={
                activeSort === index ? styles.activeText : styles.popupText
              }
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
