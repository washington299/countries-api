import React from 'react';
import propTypes from 'prop-types';

import getCountries from '../../../services/api';

import Country from '../../../components/Country';

import Container from './styles';

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: [],
			loading: true,
		};
	}

	async componentDidMount() {
		const countriesPerPage = 12;
		const { res: countries } = await getCountries(this.props.currentPage, countriesPerPage);

		this.setState({
			countries,
			loading: false,
		});
	}

	render() {
		return (
			<Container>
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
			</Container>
		);
	}
}

Content.propTypes = {
	currentPage: propTypes.number.isRequired,
};

export default Content;
