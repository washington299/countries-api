import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routers from './routes';

import ThemeContext from './contexts/themes';
import themes from './styles/themes';

import GlobalStyles from './styles/globalStyles';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.toggleTheme = () => {
			this.setState((state) => ({
				theme:
					state.theme === themes.dark
						? themes.light
						: themes.dark,
			}));
		};

		this.state = {
			theme: themes.light,
			toggleTheme: this.toggleTheme,
		};
	}

	render() {
		const { state } = this;

		return (
			<ThemeContext.Provider value={this.state}>
				<ThemeProvider theme={state.theme}>
					<GlobalStyles />
					<Routers />
				</ThemeProvider>
			</ThemeContext.Provider>
		);
	}
}

export default App;
