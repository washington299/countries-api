import styled from 'styled-components';

export default styled.header.attrs(() => ({
	className: 'wrapper',
}))`
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${(props) => props.theme.element};
	box-shadow: 0px 2px 2px ${(props) => props.theme.shadow};
`;

export const Title = styled.strong`
	font-size: var(--font-size-small);

	@media screen and (min-width: 768px) {
		font-size: 18px;
	}
`;
