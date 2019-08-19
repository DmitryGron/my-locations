import { updateObject } from '../../shared/utility';
import {
	ADD_LOCATION,
	REMOVE_LOCATION,
	UPDATE_LOCATION,
	FETCH_LOCATIONS
} from '../actions/actionTypes';

const initialState = {
	locations: [], // [{id,name,address,latitude,longtitude,[categoriId]}]
	counter: 0
};

const addLocation = (state, action) => {
	const updatedLocationsArray = [...state.locations];
	updatedLocationsArray.push({
		id: state.counter,
		name: action.locationObject.name,
		address: action.locationObject.address,
		latitude: action.locationObject.latitude,
		longtitude: action.locationObject.longtitude,
		categories: action.locationObject.categories
	});

	const updatedState = {
		locations: updatedLocationsArray,
		counter: state.counter + 1
	};
	localStorage.setItem('locations', JSON.stringify(updatedState));
	return updateObject(state, updatedState);
};

const updateLocation = (state, action) => {
	const updatedLocationsArray = [...state.locations];
	let locationIndex = -1;
	const location = updatedLocationsArray.find((location, index) => {
		if (location.id === action.locationId) {
			locationIndex = index;
			return true;
		}
		return false;
	});
	if (locationIndex !== -1) {
		const updatedLocation = updateObject(
			location,
			action.newLocationObject
		);
		updatedLocationsArray[locationIndex] = updatedLocation;
		const updatedState = { locations: updatedLocationsArray };
		localStorage.setItem('locations', JSON.stringify(updatedState));
		return updateObject(state, updatedState);
	}
	return state;
};

const removeLocation = (state, action) => {
	const oldLocationsArray = [...state.locations];
	const updatedLocationsArray = oldLocationsArray.filter(location => {
		return location.id !== action.locationId;
	});
	const updatedState = { locations: updatedLocationsArray };
	localStorage.setItem('locations', JSON.stringify(updatedState));
	return updateObject(state, updatedState);
};

const fetchLocations = (state, action) => {
	const obj = JSON.parse(localStorage.getItem('locations'));
	return updateObject(state, obj);
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_LOCATION:
			return addLocation(state, action);
		case UPDATE_LOCATION:
			return updateLocation(state, action);
		case REMOVE_LOCATION:
			return removeLocation(state, action);
		case FETCH_LOCATIONS:
			return fetchLocations(state, action);
		default:
			return state;
	}
};

export default reducer;
