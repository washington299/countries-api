import React from 'react';

import ThemeTogglerButton from '../ThemeTogglerButton';

import Container, { Title } from './styles';

const Header = () => (
	<Container>
		<Title>Where in the world?</Title>
		<ThemeTogglerButton />
	</Container>
);

export default Header;
