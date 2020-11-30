import React from 'react';
import PropTypes from 'prop-types';

import Container, {
	Flag, InfoBox, Name, InfoArea, Subject, Text,
} from './styles';

class Country extends React.Component {
	render() {
		return (
			<Container>
				<Flag src={this.props.flag} alt={this.props.name} />
				<InfoBox>
					<Name>{this.props.name}</Name>
					<InfoArea>
						<p>
							<Subject>Population:</Subject>
							{' '}
							<Text>{this.props.population}</Text>
						</p>
						<p>
							<Subject>Region:</Subject>
							{' '}
							<Text>{this.props.region}</Text>
						</p>
						<p>
							<Subject>Capital:</Subject>
							{' '}
							<Text>{this.props.capital}</Text>
						</p>
					</InfoArea>
				</InfoBox>
			</Container>
		);
	}
}

Country.propTypes = {
	flag: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	population: PropTypes.number.isRequired,
	region: PropTypes.string.isRequired,
	capital: PropTypes.string.isRequired,
};

export default Country;
