import styled from 'styled-components';

export default styled.header`
	height: 80px;
	display: flex;
	align-items: center;
	background-color: ${(props) => props.theme.element}
`;