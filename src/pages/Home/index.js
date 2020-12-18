import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Search, ExpandMore } from '@material-ui/icons';

import getCountries from '../../services/api';
import getQueryStringPage from '../../helpers/getQueryStringPage';

import Country from '../../components/Country';

import Container, {
	Filters,
	SearchField,
	RegionField,
	Input,
	Select,
	RegionDefaultText,
	OptionsBox,
	Option,
	Main,
	PaginationArea,
	PageNumber,
} from './styles';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hide: true,
			text: 'Filter by Region',
			countries: [],
			loading: true,
			currentPage: 1,
			pagesQuantity: null,
			pages: [],
		};
		this.handleClick = this.handleClick.bind(this);
		this.changeOption = this.changeOption.bind(this);
	}

	async componentDidMount() {
		const countriesPerPage = 12;
		const currentPage = getQueryStringPage(this.props.location.search);
		const countries = await getCountries(currentPage, countriesPerPage);

		for (let i = 1; i <= 6; i += 1) {
			this.state.pages.push(i);
		}

		this.setState({ pagesQuantity: Math.ceil(countries.length / countriesPerPage) });
		this.setState({
			countries,
			loading: false,
		});
	}

	handleClick() {
		this.setState((state) => ({
			hide: !state.hide,
		}));
	}

	changeOption(e) {
		this.handleClick();
		this.setState({ text: e.target.innerHTML });
	}

	render() {
		const currentPage = getQueryStringPage(this.props.location.search);

		return (
			<Container>
				<Filters>
					<SearchField>
						<Search />
						<Input />
					</SearchField>
					<RegionField>
						<Select onClick={this.handleClick}>
							<RegionDefaultText>{this.state.text}</RegionDefaultText>
							<ExpandMore />
						</Select>
						{!this.state.hide && (
							<OptionsBox>
								<Option
									style={{ marginBottom: 10 }}
									onClick={this.changeOption}
								>
									Filter by Region
								</Option>
								<Option onClick={this.changeOption}>Africa</Option>
								<Option onClick={this.changeOption}>America</Option>
								<Option onClick={this.changeOption}>Asia</Option>
								<Option onClick={this.changeOption}>Europe</Option>
								<Option onClick={this.changeOption}>Oceania</Option>
							</OptionsBox>
						)}
					</RegionField>
				</Filters>
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
					<PageNumber href={`?page=${currentPage - 1}`}>&laquo;</PageNumber>
					{this.state.pages.map((page) => (
						<PageNumber
							key={page}
							active={page === currentPage}
							href={`?page=${page}`}
						>
							{page}
						</PageNumber>
					))}
					<PageNumber href={`?page=${currentPage + 1}`}>&raquo;</PageNumber>
				</PaginationArea>
			</Container>
		);
	}
}

Home.propTypes = {
	location: PropTypes.object.isRequired,
};

export default withRouter(Home);
