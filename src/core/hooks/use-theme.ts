import { useContext } from 'react';

import { ThemeContext } from '@contexts';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return {
    theme,
    setTheme,
  };
};
