// libs
import { FC, ReactNode } from 'react';

// styles
import styles from './HomeLayout.module.scss';

export interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return <div className={styles['home-layout']}>{children}</div>;
};

export default HomeLayout;
