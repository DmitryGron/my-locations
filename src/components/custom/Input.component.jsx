import React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';

const StyledInput = styled(Input)``;

const CustomInput = props => {
	return (
		<StyledInput
			placeholder={props.placeholder}
			onChange={props.onChange}
		/>
	);
};

export default CustomInput;
