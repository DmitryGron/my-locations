import Chip from '@material-ui/core/Chip';
import React from 'react';
import styled from 'styled-components';
// import GoogleMapReact from 'google-map-react';

const StyledChip = styled(Chip)`
	background-color: #41b3a3 !important;
	color: white !important;
	font-size: 1rem !important;
	margin: 5px 10px;
`;

const StyledDetailedDiv = styled.div`
	font-size: 1.2rem;
	padding: 10px;
	color: #a55911;
`;

const LocationsModalDetails = ({ locationObject, categories }) => {
	return (
		<div>
			<StyledDetailedDiv>Name: {locationObject.name}</StyledDetailedDiv>
			<StyledDetailedDiv>
				Adress: {locationObject.address}
			</StyledDetailedDiv>
			<StyledDetailedDiv>
				Latitude: {locationObject.latitude}
			</StyledDetailedDiv>
			<StyledDetailedDiv>
				Longtitude: {locationObject.longtitude}
			</StyledDetailedDiv>
			<StyledDetailedDiv>
				Categories:{' '}
				{locationObject.categories.map(categoryId => {
					return (
						<StyledChip
							key={categoryId}
							label={
								categories.find(category => {
									return category.id === categoryId;
								}).name
							}
						/>
					);
				})}
			</StyledDetailedDiv>
		</div>
	);
};

export default LocationsModalDetails;
