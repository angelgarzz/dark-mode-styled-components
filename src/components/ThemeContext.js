import React, { createContext, useState, useEffect, useMemo } from 'react';

import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from '../constants/theme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(undefined);

  useEffect(() => {
    const root = window.document.documentElement;

    // Will be used in gatsby ssr so changes happen before React component
    // tree mounts
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    );

    setThemeMode(initialColorValue);
  }, []);

  const contextValue = useMemo(() => {
    function setThemeMode(newValue) {
      const root = window.document.documentElement;

      localStorage.setItem(COLOR_MODE_KEY, newValue);

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;

        root.style.setProperty(cssVarName, colorByTheme[newValue]);
      });

      setThemeMode(newValue);
    }

    return {
      themeMode,
      setThemeMode,
    };
  }, [themeMode, setThemeMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
