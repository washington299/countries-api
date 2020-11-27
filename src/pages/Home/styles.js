import styled from 'styled-components';

export default styled.section.attrs(() => ({
	className: 'wrapper',
}))``;

export const Filters = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 30px 0;
`;

export const SearchField = styled.div`
	width: 100%;
	max-width: 480px;
	height: 40px;
	display: flex;
	align-items: center;
	background-color: ${(props) => props.theme.element};
	margin-bottom: 20px;
	border-radius: 5px;
	box-shadow: 0px 0px 10px ${(props) => props.theme.shadow};

	svg {
		font-size: 21px;
		margin: 0 20px;
		color: ${(props) => props.theme.text};
	}
`;

export const Input = styled.input.attrs(() => ({
	placeholder: 'Search for a country...',
}))`
	height: 100%;
	flex: 1;
	background-color: ${(props) => props.theme.element};
	color: ${(props) => props.theme.text};
	font-size: calc(var(--font-size-small) - 1px);
	padding: 0 5px;
	border: none;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	outline: none;
`;

export const RegionField = styled.div`
	width: 200px;
	height: 40px;
	background-color: ${(props) => props.theme.element};
	margin-top: 20px;
`;
