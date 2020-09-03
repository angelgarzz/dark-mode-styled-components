import React from 'react';
import Terser from 'terser';

import {
  COLOR_MODE_KEY,
  COLORS,
  INITIAL_COLOR_MODE_CSS_PROP,
} from './src/constants';

import App from './src/components/App';

function setColorsByTheme() {
  const colors = 'a';
  const colorModeKey = 'b';
  const colorModeCssProp = 'c';

  const preferredQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDark = preferredQuery.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = 'light';

  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDark ? 'dark' : 'light';
  }

  let root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;

    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}

const InserScript = () => {
  const boundFn = String(setColorsByTheme)
    .replace('a', JSON.stringify(COLORS))
    .replace('b', COLOR_MODE_KEY)
    .replace('c', INITIAL_COLOR_MODE_CSS_PROP);

  let calledFunction = `(${boundFn})()`;

  calledFunction = Terser.minify(calledFunction).code;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<InserScript />);
};

export const wrapPageElement = ({ element }) => {
  return <App>{element}</App>;
};
