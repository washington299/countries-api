import React, { createContext } from 'react';
import { WbSunny, NightsStay } from '@material-ui/icons';
import styled from 'styled-components';

import themes from '../styles/themes';

export const ThemeContext = createContext({
	theme: themes.light,
	toggleTheme: () => {},
});

export const ThemeStyles = styled.div`
	display: flex;
	align-items: center;
	font-size: var(--font-size-small);
	padding-right: 15px;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}

	svg {
		margin-right: 5px;
	}
`;

export function ThemeTogglerButton() {
	return (
		<ThemeContext.Consumer>
			{({ theme, toggleTheme }) => (
				<ThemeStyles onClick={toggleTheme}>
					{theme.darkMode ? (
						<>
							<NightsStay />
							<span>Dark mode</span>
						</>
					) : (
						<>
							<WbSunny style={{ color: '#FECE00' }} />
							<span>Light mode</span>
						</>
					)}
				</ThemeStyles>
			)}
		</ThemeContext.Consumer>
	);
}
