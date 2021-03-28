import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";

import { ThemeContext } from "../contexts/themes";

const StyledComponentsThemeProvider = ({ children }) => {
	const { theme } = useContext(ThemeContext);

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledComponentsThemeProvider;
