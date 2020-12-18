import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import getCountries from '../../services/api';
import getQueryStringPage from '../../helpers/getQueryStringPage';

import FilterArea from './FilterArea';
import Country from '../../components/Country';

import Container, { Main, PaginationArea, PageNumber } from './styles';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: [],
			loading: true,
			pagesQuantity: null,
			pages: [],
		};
	}

	async componentDidMount() {
		const countriesPerPage = 12;
		const currentPage = getQueryStringPage(this.props.location.search);
		const { res: countries, pagesQuantity } = await getCountries(currentPage, countriesPerPage);

		for (let i = 1; i <= 6; i += 1) {
			this.state.pages.push(i);
		}

		this.setState({ pagesQuantity: Math.ceil(pagesQuantity / countriesPerPage) });
		this.setState({
			countries,
			loading: false,
		});
	}

	render() {
		const currentPage = getQueryStringPage(this.props.location.search);

		return (
			<Container>
				<FilterArea />
				<Main>
					{this.state.loading && (
						<span style={{ textAlign: 'center' }}>Loading...</span>
					)}
					{this.state.countries.map((country) => (
						<Country
							key={country.name}
							flag={country.flag}
							name={country.name}
							population={country.population}
							region={country.region}
							capital={country.capital}
						/>
					))}
				</Main>
				<PaginationArea>
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
				</PaginationArea>
			</Container>
		);
	}
}

Home.propTypes = {
	location: PropTypes.object.isRequired,
};

export default withRouter(Home);
