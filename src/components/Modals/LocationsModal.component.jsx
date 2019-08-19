import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import React from 'react';
import { Field, Form } from 'react-final-form';
import CustomHeader from '../custom/Header.component';

const required = value => (value ? undefined : 'Required');
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined);
const composeValidators = (...validators) => value =>
	validators.reduce(
		(error, validator) => error || validator(value),
		undefined
	);

const LocationsModalForm = props => {
	return (
		<div>
			<CustomHeader>{props.header}</CustomHeader>
			<Form
				onSubmit={values => props.onClick(values)}
				initialValues={props.locationObject}
				render={({
					handleSubmit,
					form,
					submitting,
					pristine,
					values
				}) => (
					<form onSubmit={handleSubmit}>
						<Field name='name' validate={required}>
							{({ input, meta }) => (
								<div>
									<Input
										{...input}
										type='text'
										placeholder='location name'
									/>
									{meta.error && meta.touched && (
										<span>{meta.error}</span>
									)}
								</div>
							)}
						</Field>
						<Field name='address' validate={required}>
							{({ input, meta }) => (
								<div>
									<Input
										{...input}
										type='text'
										placeholder='address'
									/>
									{meta.error && meta.touched && (
										<span>{meta.error}</span>
									)}
								</div>
							)}
						</Field>
						<Field
							name='latitude'
							validate={composeValidators(required, mustBeNumber)}
						>
							{({ input, meta }) => (
								<div>
									<Input
										{...input}
										type='text'
										placeholder='latitude'
									/>
									{meta.error && meta.touched && (
										<span>{meta.error}</span>
									)}
								</div>
							)}
						</Field>
						<Field
							name='longtitude'
							validate={composeValidators(required, mustBeNumber)}
						>
							{({ input, meta }) => (
								<div>
									<Input
										{...input}
										type='text'
										placeholder='longtitude'
									/>
									{meta.error && meta.touched && (
										<span>{meta.error}</span>
									)}
								</div>
							)}
						</Field>
						<Button type='submit' disabled={submitting}>
							{props.buttonText}
						</Button>
					</form>
				)}
			/>
		</div>
	);
};

export default LocationsModalForm;

/* <CustomInput
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

<CustomButton onClick={() => props.onClick(locationObject)}>
{props.buttonText}
</CustomButton> */
