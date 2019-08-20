import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)``;

const CustomButton = props => {
	return (
		<StyledButton onClick={props.onClick}>{props.children}</StyledButton>
	);
};

export default CustomButton;
