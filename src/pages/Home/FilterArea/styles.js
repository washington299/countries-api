import styled from "styled-components";

export default styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 30px 0;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export const SearchField = styled.div`
	width: 100%;
	max-width: 480px;
	height: 40px;
	display: flex;
	align-items: center;
	background-color: ${props => props.theme.element};
	margin-bottom: 20px;
	border-radius: 5px;
	box-shadow: 0px 0px 10px ${props => props.theme.shadow};

	svg {
		font-size: 21px;
		margin: 0 20px;
		color: ${props => props.theme.text};
	}
`;

export const Input = styled.input.attrs(() => ({
	placeholder: "Search for a country...",
}))`
	height: 100%;
	flex: 1;
	background-color: ${props => props.theme.element};
	color: ${props => props.theme.text};
	font-size: calc(var(--font-size-small) - 1px);
	padding: 0 5px;
	border: none;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	outline: none;
`;

export const RegionField = styled.div`
	width: 200px;
	margin-top: 20px;
	position: relative;

	@media screen and (min-width: 768px) {
		margin-top: 0;
	}
`;

export const Select = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	padding: 0 20px;
	background-color: ${props => props.theme.element};
	color: ${props => props.theme.text};
	border: none;
	border-radius: 5px;
	box-shadow: 0px 0px 10px ${props => props.theme.shadow};
	cursor: pointer;

	svg {
		font-size: 20px;
		vertical-align: middle;
		position: absolute;
		right: 20px;
	}
`;

export const RegionDefaultText = styled.span`
	font-size: var(--font-size-small);
	font-weight: var(--font-weight-semi-bold);
`;

export const OptionsBox = styled.div`
	width: 100%;
	height: auto;
	margin-top: 4px;
	padding: 10px 0;
	background-color: ${props => props.theme.element};
	color: ${props => props.theme.text};
	border: none;
	border-radius: 5px;
	box-shadow: 0px 0px 10px ${props => props.theme.shadow};
	position: absolute;
`;

export const Option = styled.div`
	width: 100%;
	padding: 5px 20px;
	font-size: var(--font-size-small);
	font-weight: var(--font-weight-semi-bold);
	cursor: pointer;

	:hover {
		background-color: ${props => props.theme.background};
	}
`;
