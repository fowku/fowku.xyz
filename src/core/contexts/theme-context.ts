import { createContext } from 'react';

import { Theme, ThemeType } from '@types';

interface ThemeContextType {
  theme: Theme;
  setTheme: (themeType: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: {
    type: 'light',
  },
  setTheme: () => {
    console.warn('Please wrap component in ThemeProvider');
  },
});

export { ThemeContext };
