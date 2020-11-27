import React from 'react';
import { WbSunny, NightsStay } from '@material-ui/icons';

import Container, { Title, ThemeSwitcher } from './styles';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { darkMode: false };
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			this.setState({ darkMode: true });
		} else {
			this.setState({ darkMode: false });
		}
	}

	handleClick() {
		this.setState((theme) => ({
			darkMode: !theme.darkMode,
		}));
	}

	render() {
		const { state } = this;
		return (
			<Container>
				<Title>Where in the world?</Title>
				<ThemeSwitcher onClick={this.handleClick}>
					{state.darkMode ? (
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
				</ThemeSwitcher>
			</Container>
		);
	}
}

export default Header;
