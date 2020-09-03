import React from 'react';

import { ThemeProvider } from './ThemeContext';
import GlobalStyles from './GlobalStyles';

// App component so there's no need to overwrite code in gatsby-browser and gatsby-ssr
function App({ children }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default App;
