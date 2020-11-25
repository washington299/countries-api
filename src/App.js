import React from 'react';
import GlobalStyles from './styles/globalStyles';

import Routers from './routes';

class App extends React.Component {
	render() {
		return (
			<>
				<GlobalStyles />
				<Routers />
			</>
		);
	}
}

export default App;
