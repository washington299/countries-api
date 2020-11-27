import { createContext } from 'react';

import themes from '../styles/themes';

const theme = localStorage.getItem('theme');

const ThemeContext = createContext({
	theme: theme === 'dark' ? themes.dark : themes.light,
	toggleTheme: () => {},
});

export default ThemeContext;
