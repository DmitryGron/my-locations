import React, { useState } from 'react';

const CategoriesModalForm = props => {
	const [inputValue, setInputValue] = useState('');

	return (
		<div>
			<header>{props.header}</header>
			<input
				onChange={e => setInputValue(e.target.value)}
				placeholder='category name'
			/>
			<button onClick={() => props.onClick(inputValue)}>ADD</button>
		</div>
	);
};

export default CategoriesModalForm;
