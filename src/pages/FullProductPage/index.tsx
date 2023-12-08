import { FC } from 'react';
import Header from '../../Components/Header';
import styles from './FullProdcutPage.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProduct } from '../../redux/slices/getProductSlice';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import Spinner from '../../utils/Spinner/Spinner';
import { addProduct } from '../../redux/slices/cartSlice';
import { cartProductType } from '../../redux/slices/cartSlice';

const FullProductPage: FC = () => {
  const { product, isLoading } = useAppSelector((state) => state.getProduct);
  const dispatch: any = useDispatch();
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id]);

  const cartProduct: cartProductType = {
    imageURL: product.imageURL,
    title: product.title,
    weight: product.weight,
    description: product.description,
    price: product.price,
    id: product.id,
    category: product.category,
    quantity: 1,
  };

  return (
    <div className={styles.fullProductPage}>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.inner}>
          <img className={styles.img} src={product.imageURL} alt="img" />
          <div className={styles.info}>
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.description}>{product.description}</p>
            <div className={styles.weight}>{product.weight}</div>
            <div className={styles.bottom}>
              <span className={styles.price}>{product.price} ₽</span>
              <button
                onClick={() => dispatch(addProduct(cartProduct))}
                className={styles.btn}
              >
                Button
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullProductPage;
