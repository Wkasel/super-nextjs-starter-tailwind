/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';

import { ThemeProvider } from 'next-themes';

export const StyledThemeProvider: React.FC = ({ children }) => {
  // forcedTheme="light"
  return (
    <ThemeProvider defaultTheme="light" forcedTheme="light" attribute="class">
      {children}
    </ThemeProvider>
  );
};
