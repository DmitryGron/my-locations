import {
	ADD_LOCATION,
	REMOVE_LOCATION,
	UPDATE_LOCATION,
	FETCH_LOCATIONS
} from './actionTypes';

export const addLocation = locationObject => {
	return {
		type: ADD_LOCATION,
		locationObject: locationObject
	};
};

export const updateLocation = (locationId, newLocationObject) => {
	return {
		type: UPDATE_LOCATION,
		locationId: locationId,
		newLocationObject: newLocationObject
	};
};

export const removeLocation = locationId => {
	return {
		type: REMOVE_LOCATION,
		locationId: locationId
	};
};

export const fetchLocations = () => {
	return {
		type: FETCH_LOCATIONS
	};
};
