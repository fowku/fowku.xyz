import { FC } from 'react';

import { ThemeType } from '@types';

import { Icons } from '../Icon';
import styles from './ThemeSelect.module.scss';

export interface ThemeSelectProps {
  theme: ThemeType;
  onChange: (newTheme: ThemeType) => void;
}

const ThemeSelect: FC<ThemeSelectProps> = ({ theme, onChange }) => {
  function handleThemeChange() {
    onChange?.(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className={styles['theme-select']} onClick={handleThemeChange}>
      {theme === 'light' && <Icons.Moon />}
      {theme === 'dark' && <Icons.Sun />}
    </div>
  );
};

export default ThemeSelect;
