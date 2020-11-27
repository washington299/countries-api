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
