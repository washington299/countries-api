import { createContext } from 'react';

import themes from '../styles/themes';

const ThemeContext = createContext({
	theme: themes.light,
	toggleTheme: () => {},
});

export default ThemeContext;
