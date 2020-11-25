import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/themes';

import GlobalStyles from './styles/globalStyles';
import Routers from './routes';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { darkMode: false };
	}

	componentDidMount() {
		if (localStorage.getItem('theme') === 'dark') {
			this.setState({ darkMode: true });
			return;
		}
		this.setState({ darkMode: false });
	}

	render() {
		const { state } = this;

		return (
			<ThemeProvider theme={state.darkMode ? theme.dark : theme.light}>
				<GlobalStyles />
				<Routers />
			</ThemeProvider>
		);
	}
}

export default App;
