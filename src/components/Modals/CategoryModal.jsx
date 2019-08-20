import React, { useState } from 'react';
import CustomInput from '../custom/Input';
import CustomButton from '../custom/Button';
import CustomHeader from '../custom/Header';

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
				{props.buttonText}
			</CustomButton>
		</div>
	);
};

export default CategoriesModalForm;
