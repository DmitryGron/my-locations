import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = ({ google, initialLat, initialLng, style, zoom }) => {
	return (
		<Map
			google={google}
			style={style}
			zoom={11}
			initialCenter={{ lat: initialLat, lng: initialLng }}
			onRightclick={obj => {
				console.log(obj);
			}}
		>
			<Marker
				position={{ lat: initialLat, lng: initialLng }}
				onClick={props => {
					// console.log(props);
				}}
			/>
		</Map>
	);
};

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_MY_GOOGLE_MAP_KEY
})(MapContainer);
