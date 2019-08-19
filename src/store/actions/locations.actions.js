import {
	ADD_LOCATION,
	FETCH_LOCATIONS,
	REMOVE_LOCATION,
	SET_ALPHABETICALLY_SORT,
	SET_CATEGORY_FILTER,
	SET_GROUPED_SORT,
	UPDATE_LOCATION
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

export const setGroupedSort = () => {
	return {
		type: SET_GROUPED_SORT
	};
};

export const setAlphabeticallySort = () => {
	return {
		type: SET_ALPHABETICALLY_SORT
	};
};

export const setCategoryFilter = () => {
	return {
		type: SET_CATEGORY_FILTER
	};
};
