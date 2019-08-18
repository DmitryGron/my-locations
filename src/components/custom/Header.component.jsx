import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
	font-size: 1.2rem;
	padding: 10px;
	margin-bottom: 30px;
	color: #a55911;
`;

const CustomHeader = props => {
	return <StyledHeader>{props.children}</StyledHeader>;
};

export default CustomHeader;
