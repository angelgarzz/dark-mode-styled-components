import React from 'react';

import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { themeMode, setThemeMode } = React.useContext(ThemeContext);

  if (!themeMode) {
    return null;
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={themeMode === 'dark'}
        onChange={ev => {
          setThemeMode(ev.target.checked ? 'dark' : 'light');
        }}
      />{' '}
      Dark Mode
    </label>
  );
};

export default ThemeToggle;