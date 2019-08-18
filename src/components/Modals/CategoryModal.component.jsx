import React, { useState } from 'react';

const CategoriesModalForm = props => {
	const [inputValue, setInputValue] = useState('');

	return (
		<div>
			<input
				onChange={e => setInputValue(e.target.value)}
				placeholder='please enter the category name'
			/>
			<button onClick={() => props.onClick(inputValue)}>ADD</button>
		</div>
	);
};

export default CategoriesModalForm;
