import * as actionTypes from './actionTypes';

export const addLocation = locationObject => {
	return {
		type: actionTypes.ADD_LOCATION,
		locationObject: locationObject
	};
};

export const updateLocation = (locationId, newLocationObject) => {
	return {
		type: actionTypes.UPDATE_LOCATION,
		locationId: locationId,
		newLocationObject: newLocationObject
	};
};

export const removeLocation = locationId => {
	return {
		type: actionTypes.REMOVE_LOCATION,
		locationId: locationId
	};
};

export const fetchLocation = () => {
	return {
		type: actionTypes.FETCH_LOACTIONS
	};
};
