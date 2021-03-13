import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Nunito Sans', sans-serif;
		background-color: ${props => props.theme.background};
		color: ${props => props.theme.text};
	}

	:root {
		--font-size-small: 14px;
		--font-size-default: 16px;

		--font-weight-light: 300;
		--font-weight-semi-bold: 600;
		--font-weight-extra-bold: 800;
	}

	.wrapper {
		padding: 0 15px;

		@media screen and (min-width: 768px) {
			padding: 0 30px;
		}
		@media screen and (min-width: 1080px) {
			padding: 0 50px;
		}
	}

	ul, li {
		margin: 0;
		padding: 0;
		list-style: none;
	}
`;
