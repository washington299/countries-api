import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Nunito Sans', sans-serif;
		background-color: ${(props) => props.theme.background};
		color: ${(props) => props.theme.text};
	}

	:root {
		--font-size-small: 14px;
		--font-size-default: 16px;

		--font-weight-light: 300;
		--font-weight-semi-bold: 600;
		--font-weight-extra-bold: 800;
	}
`;
