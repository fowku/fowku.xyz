import { FC, ReactNode, useEffect, useState } from 'react';

import { Theme, ThemeType } from '@types';

import { ThemeContext } from '@contexts';

import styles from './ThemeProvider.module.scss';
import { THEME_LOCAL_STORAGE_KEY } from './constants';

export interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeRaw] = useState<Theme>({ type: 'light' });

  useEffect(() => {
    const prevSelectedTheme = window.localStorage.getItem(
      THEME_LOCAL_STORAGE_KEY,
    ) as ThemeType;

    // if theme was previously selected
    if (prevSelectedTheme !== null) {
      setThemeRaw(oldTheme => ({ ...oldTheme, type: prevSelectedTheme }));
      return;
    }

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setThemeRaw(oldTheme => ({ ...oldTheme, type: 'dark' }));
    } else {
      setThemeRaw(oldTheme => ({ ...oldTheme, type: 'light' }));
    }
  }, []);

  function setTheme(themeType: ThemeType) {
    setThemeRaw(oldTheme => ({ ...oldTheme, type: themeType }));
    window.localStorage.setItem(THEME_LOCAL_STORAGE_KEY, themeType);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <div className={`${theme.type} ${styles['theme-provider']}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
