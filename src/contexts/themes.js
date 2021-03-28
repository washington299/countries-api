import React, { createContext, useEffect, useState } from "react";

import themes from "../styles/themes";

const theme = localStorage.getItem("theme");

export const ThemeContext = createContext({
	theme: theme === "dark" ? themes.dark : themes.light,
	toggleTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState(themes.light);

	function toggleTheme() {
		setTheme(theme === themes.dark ? themes.light : themes.dark);

		if (theme === themes.dark) {
			localStorage.setItem("theme", "light");
		} else {
			localStorage.setItem("theme", "dark");
		}
	}

	useEffect(() => {
		setTheme(localStorage.getItem("theme") === "light" ? themes.light : themes.dark);
	}, [theme]);

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
