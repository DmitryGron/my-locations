import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
	width: fit-content;
	min-width: 85px !important;
	min-height: 40px !important;
	font-size: 16px !important;
	margin: 15px 20px 0 auto !important;
	background-color: rgba(157, 180, 178, 0.35) !important;

	&:hover {
		background-color: rgba(157, 180, 178, 0.55) !important;
	}
`;

const CustomButton = ({ onClick, children, type }) => {
	return (
		<StyledButton type={type} onClick={onClick}>
			{children}
		</StyledButton>
	);
};

export default CustomButton;
