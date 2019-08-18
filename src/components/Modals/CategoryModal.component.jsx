import React, { useState } from 'react';
import CustomInput from '../custom/Input.component';
import CustomButton from '../custom/Button.component';
import CustomHeader from '../custom/Header.component';

const CategoriesModalForm = props => {
	const [inputValue, setInputValue] = useState('');

	return (
		<div>
			<CustomHeader>{props.header}</CustomHeader>
			<CustomInput
				onChange={e => setInputValue(e.target.value)}
				placeholder='category name'
			/>
			<CustomButton onClick={() => props.onClick(inputValue)}>
				ADD
			</CustomButton>
		</div>
	);
};

export default CategoriesModalForm;
