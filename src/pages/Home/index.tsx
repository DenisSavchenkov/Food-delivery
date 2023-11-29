import styles from './Home.module.scss';
import { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import Categories from '../../Components/Categories';
import Sort from '../../Components/Sort';
import ProductList from '../../Components/PrdouctList';
import { Product } from '../../Types';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [sortByPrice, setSortByPrice] = useState<string>('desc');

  const onClickCategory = (category: string, index: number): void => {
    setActiveIndex(index);
    setActiveCategory(category);
  };
  const filterByCategory =
    activeCategory === 'Все' ? '' : `&filter=${activeCategory}`;

  const onClickSort = () => {
    setSortByPrice(sortByPrice === 'desc' ? 'asc' : 'desc');
  };

  useEffect(() => {
    try {
      const getData = async () => {
        const { data } = await axios.get(
          `https://651811de582f58d62d355bdb.mockapi.io/products?sortBy=price&order=${sortByPrice}${filterByCategory}`
        );
        setProducts(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [filterByCategory, sortByPrice]);

  return (
    <div className={styles.homePage}>
      <Header />
      <div className={styles.content}>
        <div className={styles.contentTop}>
          <Categories
            activeIndex={activeIndex}
            onClickCategory={onClickCategory}
          />
          <Sort onClickSort={onClickSort} sortByPrice={sortByPrice} />
        </div>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Home;
