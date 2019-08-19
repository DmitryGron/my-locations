import React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';

const StyledInput = styled(Input)``;

const CustomInput = ({ placeholder, onChange, defaultValue }) => {
	return (
		<StyledInput
			placeholder={placeholder}
			onChange={onChange}
			defaultValue={defaultValue}
		/>
	);
};

export default CustomInput;
