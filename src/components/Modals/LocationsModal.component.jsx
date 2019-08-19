import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import CustomHeader from '../custom/Header.component';

const required = value => (value ? undefined : 'Required');
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined);
const composeValidators = (...validators) => value =>
	validators.reduce(
		(error, validator) => error || validator(value),
		undefined
	);

const StyledChip = styled(Chip)`
	background-color: #41b3a3 !important;
	color: white !important;
	font-size: 1rem !important;
	margin: 5px 10px;
`;

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
						<Field name='categories'>
							{({ input, meta }) => (
								<Select
									multiple
									{...input}
									renderValue={selected => (
										<div>
											{selected.map(value => (
												<StyledChip
													key={value}
													label={value}
												/>
											))}
										</div>
									)}
								>
									{props.categories.map(category => (
										<MenuItem
											key={category.id}
											value={category.name}
										>
											{category.name}
										</MenuItem>
									))}
								</Select>
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
