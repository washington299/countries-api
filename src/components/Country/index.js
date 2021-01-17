import React from 'react';

import numberFormat from '../../helpers/numberFormat';

import Container, {
	Flag,
	InfoBox,
	Name,
	InfoArea,
	Subject,
	Text,
} from './styles';

const Country = ({
	flag, name, population, region, capital,
}) => (
	<Container>
		<Flag src={flag} alt={name} />
		<InfoBox>
			<Name>{name}</Name>
			<InfoArea>
				<p>
					<Subject>Population:</Subject>
					{' '}
					<Text>{numberFormat(population)}</Text>
				</p>
				<p>
					<Subject>Region:</Subject>
					{' '}
					<Text>{region}</Text>
				</p>
				<p>
					<Subject>Capital:</Subject>
					{' '}
					<Text>{capital}</Text>
				</p>
			</InfoArea>
		</InfoBox>
	</Container>
);

export default Country;
