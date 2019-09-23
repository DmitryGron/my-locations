import Button from '@material-ui/core/Button';
import React from 'react';
import styled from 'styled-components';
import CategoriesSelect from '../../components/CategoriesSelect';

const StyledButton = styled(Button)`
	border: 0;
	color: white !important;
	font-size: 1rem !important;
	font-weight: bold !important;
	height: 100%;
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

const Wrapper = styled.div`
	height: 71px;
`;

const Toolbar = ({ title, buttons }) => {
	return (
		<ToolbarDiv>
			<StyledHeader>{title}</StyledHeader>
			<Wrapper>
				{buttons.map(button => {
					return !button.categoryFilterIds ? (
						<StyledButton
							key={button.buttonText}
							onClick={button.onClick}
						>
							{button.buttonText}
						</StyledButton>
					) : (
						<CategoriesSelect
							key={button.buttonText}
							button={button}
						/>
					);
				})}
			</Wrapper>
		</ToolbarDiv>
	);
};

export default Toolbar;
