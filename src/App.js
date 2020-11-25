import React from 'react';
import GlobalStyles from './styles/globalStyles';

class App extends React.Component {
	render() {
		return (
			<>
				<GlobalStyles />
				<h1 style={{ background: '#858585' }}>Hello World!</h1>
			</>
		);
	}
}

export default App;
