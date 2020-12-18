import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import getCountries from '../../../services/api';
import getQueryStringPage from '../../../helpers/getQueryStringPage';

import Container, { PageNumber } from './styles';

class Pagination extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pagesQuantity: null,
			pages: [],
		};
	}

	async componentDidMount() {
		const countriesPerPage = 12;
		const currentPage = getQueryStringPage(this.props.location.search);
		const { pagesQuantity } = await getCountries(currentPage, countriesPerPage);

		for (let i = 1; i <= 6; i += 1) {
			this.state.pages.push(i);
		}

		this.setState({ pagesQuantity: Math.ceil(pagesQuantity / countriesPerPage) });
	}

	render() {
		const currentPage = getQueryStringPage(this.props.location.search);

		return (
			<Container>
				<PageNumber
					href={`?page=${currentPage - 1}`}
					style={currentPage === 1 ? { pointerEvents: 'none' } : {}}
				>
					&laquo;
				</PageNumber>
				{this.state.pages.map((page) => (
					<PageNumber
						key={page}
						active={page === currentPage}
						href={`?page=${page}`}
					>
						{page}
					</PageNumber>
				))}
				<PageNumber
					href={`?page=${currentPage + 1}`}
					style={currentPage === this.state.pagesQuantity ? { pointerEvents: 'none' } : {}}
				>
					&raquo;
				</PageNumber>
			</Container>
		);
	}
}

Pagination.propTypes = {
	location: PropTypes.object.isRequired,
};

export default withRouter(Pagination);
