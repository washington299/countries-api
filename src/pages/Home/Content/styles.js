import styled from "styled-components";

export default styled.main`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-gap: 50px;
`;

export const Loading = styled.div`
	margin-bottom: 30px;
	text-align: center;
`;
