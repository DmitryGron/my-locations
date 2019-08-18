import React from 'react';

const LocationsModalForm = props => {
	return (
		<div>
			<input
				onChange={props.onChange}
				placeholder='please enter the category name'
			/>
			<button type='submit' onClick={props.onClick}>
				ADD
			</button>
		</div>
	);
};

export default LocationsModalForm;
