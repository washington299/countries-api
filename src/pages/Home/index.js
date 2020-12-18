import React from 'react';

import FilterArea from './FilterArea';
import Content from './Content';
import Pagination from './Pagination';

import Container from './styles';

class Home extends React.Component {
	render() {
		return (
			<Container>
				<FilterArea />
				<Content />
				<Pagination />
			</Container>
		);
	}
}

export default Home;
