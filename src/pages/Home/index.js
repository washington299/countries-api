import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import getQueryStringPage from '../../helpers/getQueryStringPage';

import FilterArea from './FilterArea';
import Content from './Content';
import Pagination from './Pagination';

import Container from './styles';

class Home extends React.Component {
	render() {
		const currentPage = getQueryStringPage(this.props.location.search);

		return (
			<Container>
				<FilterArea />
				<Content currentPage={currentPage} />
				<Pagination currentPage={currentPage} />
			</Container>
		);
	}
}

Home.propTypes = {
	location: PropTypes.string.isRequired,
};

export default withRouter(Home);
