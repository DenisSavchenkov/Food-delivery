import styles from './Sort.module.scss';

const Sort = ({ onClickSort, sortByPrice }) => {
  return (
    <div onClick={() => onClickSort()} className={styles.sort}>
      <img
        className={
          sortByPrice === 'desc' ? styles.sortIcon : styles.sortIconAsc
        }
        src="arrow.svg"
        alt="arrow"
      />
      <span className={styles.sortText}>Цена</span>
    </div>
  );
};

export default Sort;
