import React, { useState } from 'react';
import CustomInput from '../custom/Input.component';
import CustomButton from '../custom/Button.component';
import CustomHeader from '../custom/Header.component';
import { updateObject } from '../../shared/utility';

const LocationsModalForm = props => {
	const [locationObject, setLocationObject] = useState({
		...props.locationObject
	});

	const updateLocationObject = newValue => {
		const updatedLocationObject = updateObject(locationObject, newValue);
		setLocationObject(updatedLocationObject);
	};

	return (
		<div>
			<CustomHeader>{props.header}</CustomHeader>
			<CustomInput
				onChange={e => {
					const newValue = { name: e.target.value };
					updateLocationObject(newValue);
				}}
				placeholder='location name'
				defaultValue={locationObject.name}
			/>
			<CustomInput
				onChange={e => {
					const newValue = { address: e.target.value };
					updateLocationObject(newValue);
				}}
				placeholder='address'
				defaultValue={locationObject.address}
			/>
			<CustomInput
				onChange={e => {
					const newValue = { latitude: e.target.value };
					updateLocationObject(newValue);
				}}
				placeholder='latitude'
				defaultValue={locationObject.latitude}
			/>
			<CustomInput
				onChange={e => {
					const newValue = { longtitude: e.target.value };
					updateLocationObject(newValue);
				}}
				placeholder='longtitude'
				defaultValue={locationObject.longtitude}
			/>

			{/* here will be categories dropdown */}

			<CustomButton onClick={() => props.onClick(locationObject)}>
				{props.buttonText}
			</CustomButton>
		</div>
	);
};

export default LocationsModalForm;
