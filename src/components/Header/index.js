import React from 'react';

import ThemeTogglerButton from '../ThemeTogglerButton';

import Container, { Title } from './styles';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { darkMode: false };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((state) => ({
			darkMode: !state.darkMode,
		}));
	}

	render() {
		return (
			<Container>
				<Title>Where in the world?</Title>
				<ThemeTogglerButton />
			</Container>
		);
	}
}

export default Header;
