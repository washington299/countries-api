import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import Header from './components/Header';

class Routers extends React.Component {
	render() {
		return (
			<>
				<Header />
				<Switch>
					<Route path="/details" component={Details} />
					<Route exact path="/" component={Home} />
				</Switch>
			</>
		);
	}
}

export default Routers;
