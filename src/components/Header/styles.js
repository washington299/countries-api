import styled from 'styled-components';

export default styled.header`
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${(props) => props.theme.element};
`;

export const Title = styled.strong`
	font-size: var(--font-size-small);
	padding-left: 15px;
`;

export const ThemeSwitcher = styled.div`
	display: flex;
	align-items: center;
	font-size: var(--font-size-small);
	padding-right: 15px;

	svg {
		margin-right: 5px;
	}
`;
