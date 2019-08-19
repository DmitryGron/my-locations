import { updateObject } from '../../shared/utility';
import {
	ADD_LOCATION,
	FETCH_LOCATIONS,
	REMOVE_LOCATION,
	SET_ALPHABETICALLY_SORT,
	SET_CATEGORY_FILTER,
	SET_GROUPED_SORT,
	UPDATE_LOCATION
} from '../actions/actionTypes';

const initialState = {
	locations: [], // [{id,name,address,latitude,longtitude,categories:[int]}]
	counter: 0,
	grouped: false,
	alphabetically: false,
	categoryFilterId: -1
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

const setGroupedSort = (state, action) => {
	return updateObject(state, { grouped: !state.grouped });
};

const setAlphabeticallySort = (state, action) => {
	return updateObject(state, { alphabetically: !state.alphabetically });
};

const setCategoryFilter = (state, action) => {
	return updateObject(state, { categoryFilterId: !state.categoryFilterId });
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
		case SET_GROUPED_SORT:
			return setGroupedSort(state, action);
		case SET_ALPHABETICALLY_SORT:
			return setAlphabeticallySort(state, action);
		case SET_CATEGORY_FILTER:
			return setCategoryFilter(state, action);
		default:
			return state;
	}
};

export default reducer;
