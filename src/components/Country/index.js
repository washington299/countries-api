import React from 'react';

import Container, {
	Flag, InfoBox, Name, InfoArea, Subject, Text,
} from './styles';

class Country extends React.Component {
	render() {
		return (
			<Container>
				<Flag />
				<InfoBox>
					<Name>Brazil</Name>
					<InfoArea>
						<p>
							<Subject>Population:</Subject>
							{' '}
							<Text>200.000.000</Text>
						</p>
						<p>
							<Subject>Region:</Subject>
							{' '}
							<Text>America</Text>
						</p>
						<p>
							<Subject>Capital:</Subject>
							{' '}
							<Text>Brasilia</Text>
						</p>
					</InfoArea>
				</InfoBox>
			</Container>
		);
	}
}

export default Country;
