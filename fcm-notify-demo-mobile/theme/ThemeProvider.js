import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

const lightTheme = {
  colors: {
    primary: '#006494',
    primaryContainer: '#cde5ff',
    onPrimaryContainer: '#001e31',
    secondary: '#50606e',
    secondaryContainer: '#d3e5f5',
    onSecondaryContainer: '#0c1d29',
    surface: '#ffffff',
    surfaceVariant: '#dfe2eb',
    onSurface: '#1a1c1e',
    onSurfaceVariant: '#42474e',
    background: '#f8f9ff',
    outline: '#72777f',
  },
  shape: {
    corner: {
      full: 999,
      large: 16,
      medium: 12,
      small: 8,
      none: 0,
    },
  },
};

const darkTheme = {
  colors: {
    primary: '#91ccff',
    primaryContainer: '#004b6f',
    onPrimaryContainer: '#cde5ff',
    secondary: '#b7c9d9',
    secondaryContainer: '#364956',
    onSecondaryContainer: '#d3e5f5',
    surface: '#1a1c1e',
    surfaceVariant: '#42474e',
    onSurface: '#e2e2e5',
    onSurfaceVariant: '#c2c7cf',
    background: '#1a1c1e',
    outline: '#8c9198',
  },
  shape: {
    corner: {
      full: 999,
      large: 16,
      medium: 12,
      small: 8,
      none: 0,
    },
  },
};

const ThemeContext = createContext({
  theme: lightTheme,
  isDark: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');

  useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 