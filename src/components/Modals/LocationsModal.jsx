import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import CustomHeader from '../custom/Header';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

// import GoogleMapReact from 'google-map-react';

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
	margin: 5px 8px;
`;

const ChipWrapper = styled.div`
	overflow: auto;
	width: 68%;
`;

const SelectWrapper = styled(FormControl)`
	min-width: 100px !important;
`;

const InputWrapper = styled.div`
	width: 68%;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin: 7px 0;
`;

const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
`;

const Error = styled.span`
	color: red;
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
					<FormWrapper onSubmit={handleSubmit}>
						<Field name='name' validate={required}>
							{({ input, meta }) => (
								<InputWrapper>
									<Input
										{...input}
										type='text'
										placeholder='location name'
									/>
									{meta.error && meta.touched && (
										<Error>{meta.error}</Error>
									)}
								</InputWrapper>
							)}
						</Field>
						<Field name='address' validate={required}>
							{({ input, meta }) => (
								<InputWrapper>
									<Input
										{...input}
										type='text'
										placeholder='address'
									/>
									{meta.error && meta.touched && (
										<Error>{meta.error}</Error>
									)}
								</InputWrapper>
							)}
						</Field>
						<Field
							name='latitude'
							validate={composeValidators(required, mustBeNumber)}
						>
							{({ input, meta }) => (
								<InputWrapper>
									<Input
										{...input}
										type='text'
										placeholder='latitude'
									/>
									{meta.error && meta.touched && (
										<Error>{meta.error}</Error>
									)}
								</InputWrapper>
							)}
						</Field>
						<Field
							name='longtitude'
							validate={composeValidators(required, mustBeNumber)}
						>
							{({ input, meta }) => (
								<InputWrapper>
									<Input
										{...input}
										type='text'
										placeholder='longtitude'
									/>
									{meta.error && meta.touched && (
										<Error>{meta.error}</Error>
									)}
								</InputWrapper>
							)}
						</Field>
						<Field name='categories'>
							{({ input, meta }) => (
								<SelectWrapper>
									<InputLabel htmlFor='select-multiple-chip'>
										Categories
									</InputLabel>
									<Select
										multiple
										{...input}
										renderValue={selected => (
											<ChipWrapper>
												{selected.map(value => (
													<StyledChip
														key={value}
														label={
															props.categories.find(
																category => {
																	return (
																		category.id ===
																		value
																	);
																}
															).name
														}
													/>
												))}
											</ChipWrapper>
										)}
									>
										{props.categories.map(category => (
											<MenuItem
												key={category.id}
												value={category.id}
											>
												{category.name}
											</MenuItem>
										))}
									</Select>
								</SelectWrapper>
							)}
						</Field>
						<Button type='submit' disabled={submitting}>
							{props.buttonText}
						</Button>
						{/* <GoogleMapReact
							bootstrapURLKeys={{ key: 'AIzaSyBJW1qHjP0qi1tvekNyc4uJ6tKV-D7eyTM' }}
							defaultCenter={{
								lat: 59.95,
								lng: 30.33
							}}
							defaultZoom={11}
							yesIWantToUseGoogleMapApiInternals
						>
							<div lat={59.955413} lng={30.337844}>
								My Marker
							</div>
						</GoogleMapReact> */}
					</FormWrapper>
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
