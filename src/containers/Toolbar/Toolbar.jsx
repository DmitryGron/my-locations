import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
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

const StyledButton = styled(Button)`
	border: 0;
	color: white !important;
	font-size: 1rem !important;
	font-weight: bold !important;
	height: 48px;
	padding: 0 20px !important;
	border-left: 1.5px solid white !important;
	border-radius: 0px !important;
`;

const ToolbarDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #41b3a3;
	margin-bottom: 20px;
`;

const StyledHeader = styled.header`
	color: white;
	font-size: 2rem;
	padding: 0 30px;
	font-weight: bold;
`;

const Toolbar = props => {
	return (
		<ToolbarDiv>
			<StyledHeader>{props.title}</StyledHeader>
			<div>
				{props.buttons.map(button => {
					return !button.categoryFilterIds ? (
						<StyledButton
							key={button.buttonText}
							onClick={button.onClick}
						>
							{button.buttonText}
						</StyledButton>
					) : (
						<Select
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
													button.categories.find(
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
					);
				})}
			</div>
		</ToolbarDiv>
	);
};

export default Toolbar;
