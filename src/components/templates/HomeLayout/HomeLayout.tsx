import { FC, ReactNode } from 'react';

import { ThemeSelect } from '@atoms';

import { useTheme } from '@hooks';

import styles from './HomeLayout.module.scss';

export interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles['home-layout']}>
      <div className={styles['theme-select']}>
        <ThemeSelect theme={theme.type} onChange={setTheme} />
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default HomeLayout;
