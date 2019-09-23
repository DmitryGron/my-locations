import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';
import styled from 'styled-components';

const StyledChip = styled(Chip)`
	background-color: #a55911 !important;
	color: white !important;
	font-size: 1rem !important;
	margin: 5px 10px;
`;

const SelectWrapper = styled(FormControl)`
	min-width: 100px !important;
	height: 100%;
	padding-right: 20px !important;
`;

const CategoriesSelect = ({ button }) => {
	return (
		<SelectWrapper>
			<InputLabel htmlFor='select-multiple-chip'>Categories</InputLabel>
			<Select
				input={<Input id='select-multiple-chip' />}
				multiple
				key={button.buttonText}
				onChange={e => {
					button.setCategoryFilter(e.target.value);
				}}
				value={button.categoryFilterIds}
				renderValue={() => {
					return (
						<div>
							{button.categoryFilterIds.map(value => (
								<StyledChip
									key={value}
									label={
										button.categories.find(category => {
											return category.id === value;
										}).name
									}
								/>
							))}
						</div>
					);
				}}
			>
				{button.categories.map(category => (
					<MenuItem key={category.id} value={category.id}>
						{category.name}
					</MenuItem>
				))}
			</Select>
		</SelectWrapper>
	);
};

export default CategoriesSelect;
