import { ChildrenProp } from '../../Types';
import styles from './Container.module.scss';
import { FC } from 'react';

const Container: FC<ChildrenProp> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
