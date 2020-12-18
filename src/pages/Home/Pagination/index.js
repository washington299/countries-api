import React from 'react';
import propTypes from 'prop-types';

import getCountries from '../../../services/api';

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
		const { pagesQuantity } = await getCountries(this.props.currentPage, countriesPerPage);

		for (let i = 1; i <= 6; i += 1) {
			this.state.pages.push(i);
		}

		this.setState({ pagesQuantity: Math.ceil(pagesQuantity / countriesPerPage) });
	}

	render() {
		return (
			<Container>
				<PageNumber
					href={`?page=${this.props.currentPage - 1}`}
					style={this.props.currentPage === 1 ? { pointerEvents: 'none' } : {}}
				>
					&laquo;
				</PageNumber>
				{this.state.pages.map((page) => (
					<PageNumber
						key={page}
						active={page === this.props.currentPage}
						href={`?page=${page}`}
					>
						{page}
					</PageNumber>
				))}
				<PageNumber
					href={`?page=${this.props.currentPage + 1}`}
					style={this.props.currentPage === this.state.pagesQuantity ? { pointerEvents: 'none' } : {}}
				>
					&raquo;
				</PageNumber>
			</Container>
		);
	}
}

Pagination.propTypes = {
	currentPage: propTypes.number.isRequired,
};

export default Pagination;
