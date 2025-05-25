// Material Design 3 color tokens
export const lightTheme = {
  colors: {
    // Primary
    primary: '#006494', // Primary color
    onPrimary: '#ffffff',
    primaryContainer: '#cde5ff',
    onPrimaryContainer: '#001e31',

    // Secondary
    secondary: '#50606f',
    onSecondary: '#ffffff',
    secondaryContainer: '#d3e5f5',
    onSecondaryContainer: '#0c1d29',

    // Tertiary
    tertiary: '#66587b',
    onTertiary: '#ffffff',
    tertiaryContainer: '#edddff',
    onTertiaryContainer: '#221534',

    // Surface
    surface: '#fdfcff',
    onSurface: '#1a1c1e',
    surfaceVariant: '#dfe2eb',
    onSurfaceVariant: '#43474e',

    // Background
    background: '#fdfcff',
    onBackground: '#1a1c1e',

    // Error
    error: '#ba1a1a',
    onError: '#ffffff',
    errorContainer: '#ffdad6',
    onErrorContainer: '#410002',

    // Outline
    outline: '#73777f',
    outlineVariant: '#c3c7cf',
  },
  elevation: {
    level0: 'none',
    level1: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
    level2: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
    level3: '0px 1px 3px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
    level4: '0px 2px 3px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
    level5: '0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
  },
  typography: {
    display: {
      large: { fontSize: 57, lineHeight: 64, letterSpacing: -0.25, fontWeight: '400' },
      medium: { fontSize: 45, lineHeight: 52, letterSpacing: 0, fontWeight: '400' },
      small: { fontSize: 36, lineHeight: 44, letterSpacing: 0, fontWeight: '400' },
    },
    headline: {
      large: { fontSize: 32, lineHeight: 40, letterSpacing: 0, fontWeight: '400' },
      medium: { fontSize: 28, lineHeight: 36, letterSpacing: 0, fontWeight: '400' },
      small: { fontSize: 24, lineHeight: 32, letterSpacing: 0, fontWeight: '400' },
    },
    title: {
      large: { fontSize: 22, lineHeight: 28, letterSpacing: 0, fontWeight: '400' },
      medium: { fontSize: 16, lineHeight: 24, letterSpacing: 0.15, fontWeight: '500' },
      small: { fontSize: 14, lineHeight: 20, letterSpacing: 0.1, fontWeight: '500' },
    },
    body: {
      large: { fontSize: 16, lineHeight: 24, letterSpacing: 0.5, fontWeight: '400' },
      medium: { fontSize: 14, lineHeight: 20, letterSpacing: 0.25, fontWeight: '400' },
      small: { fontSize: 12, lineHeight: 16, letterSpacing: 0.4, fontWeight: '400' },
    },
    label: {
      large: { fontSize: 14, lineHeight: 20, letterSpacing: 0.1, fontWeight: '500' },
      medium: { fontSize: 12, lineHeight: 16, letterSpacing: 0.5, fontWeight: '500' },
      small: { fontSize: 11, lineHeight: 16, letterSpacing: 0.5, fontWeight: '500' },
    },
  },
  shape: {
    corner: {
      extraSmall: 4,
      small: 8,
      medium: 12,
      large: 16,
      extraLarge: 28,
    },
  },
  state: {
    hover: 0.08,
    focus: 0.12,
    pressed: 0.12,
    dragged: 0.16,
  },
};

export const darkTheme = {
  colors: {
    // Primary
    primary: '#94ccff',
    onPrimary: '#003351',
    primaryContainer: '#004b73',
    onPrimaryContainer: '#cde5ff',

    // Secondary
    secondary: '#b7c9d9',
    onSecondary: '#22323f',
    secondaryContainer: '#384956',
    onSecondaryContainer: '#d3e5f5',

    // Tertiary
    tertiary: '#d0c0e8',
    onTertiary: '#372a4a',
    tertiaryContainer: '#4e4162',
    onTertiaryContainer: '#edddff',

    // Surface
    surface: '#1a1c1e',
    onSurface: '#e2e2e5',
    surfaceVariant: '#43474e',
    onSurfaceVariant: '#c3c7cf',

    // Background
    background: '#1a1c1e',
    onBackground: '#e2e2e5',

    // Error
    error: '#ffb4ab',
    onError: '#690005',
    errorContainer: '#93000a',
    onErrorContainer: '#ffdad6',

    // Outline
    outline: '#8d9199',
    outlineVariant: '#43474e',
  },
  elevation: {
    level0: 'none',
    level1: '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)',
    level2: '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)',
    level3: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)',
    level4: '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)',
    level5: '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)',
  },
  typography: lightTheme.typography,
  shape: lightTheme.shape,
  state: lightTheme.state,
};

// Helper function to get elevation style
export const getElevation = (level, theme = 'light') => {
  const elevationStyle = theme === 'light' ? lightTheme.elevation[level] : darkTheme.elevation[level];
  return {
    elevation: parseInt(level.replace('level', '')),
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: parseInt(level.replace('level', '')) },
    shadowOpacity: theme === 'light' ? 0.15 : 0.3,
    shadowRadius: parseInt(level.replace('level', '')) * 2,
  };
};

// Helper function to get typography style
export const getTypography = (variant, size) => {
  return lightTheme.typography[variant][size];
}; 