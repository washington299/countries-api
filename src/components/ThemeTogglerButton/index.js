import React, { useContext } from 'react';
import { WbSunny, NightsStay } from '@material-ui/icons';

import ThemeContext from '../../contexts/themes';
import themes from '../../styles/themes';

import Container from './styles';

function ThemeTogglerButton() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<Container onClick={toggleTheme}>
			{theme === themes.dark ? (
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
		</Container>
	);
}

export default ThemeTogglerButton;
