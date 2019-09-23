import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import GoogleMapReact from 'google-map-react';
import React from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import CustomButton from '../custom/Button';
import CustomHeader from '../custom/Header';

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
`;

const SelectWrapper = styled(FormControl)`
	max-width: fit-content;
	min-width: 195px !important;
`;

const InputWrapper = styled.div`
	width: 275px;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
`;

const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 85%;
`;

const Error = styled.span`
	color: red;
`;

const Wrapper = styled.div`
	height: 100%;
`;

const LocationsModalForm = props => {
	return (
		<Wrapper>
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
						<CustomButton type='submit' disabled={submitting}>
							{props.buttonText}
						</CustomButton>
						<GoogleMapReact
							bootstrapURLKeys={{
								key: process.env.REACT_APP_MY_GOOGLE_MAP_KEY
							}}
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
						</GoogleMapReact>
					</FormWrapper>
				)}
			/>
		</Wrapper>
	);
};

export default LocationsModalForm;
