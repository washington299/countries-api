import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Routers from "./routes";

import CountriesProvider from "./contexts/countries";
import ThemeContext from "./contexts/themes";
import themes from "./styles/themes";

import GlobalStyles from "./styles/globalStyles";

const App = () => {
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

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<CountriesProvider>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<Routers />
				</ThemeProvider>
			</CountriesProvider>
		</ThemeContext.Provider>
	);
};

export default App;
