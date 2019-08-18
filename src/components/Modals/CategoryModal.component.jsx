import React from 'react';

const CategoriesModalForm = (onClick, onChange) => {
	return (
		<div>
			<input
				onChange={onChange}
				placeholder='please enter the category name'
			/>
			<button onClick={onClick}>ADD</button>
		</div>
	);
};

export default CategoriesModalForm;
