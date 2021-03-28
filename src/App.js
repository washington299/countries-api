import React from "react";

import Routers from "./routes";

import CountriesProvider from "./contexts/countries";
import ThemeContextProvider from "./contexts/themes";

import StyledComponentsThemeProvider from "./styles/styledComponentsThemeProvider";

import GlobalStyles from "./styles/globalStyles";

const App = () => {
	return (
		<ThemeContextProvider>
			<StyledComponentsThemeProvider>
				<CountriesProvider>
					<GlobalStyles />
					<Routers />
				</CountriesProvider>
			</StyledComponentsThemeProvider>
		</ThemeContextProvider>
	);
};

export default App;
