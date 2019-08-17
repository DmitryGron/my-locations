import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

// TODO: check if need more state(loading,etc...)
const initialState = {
	categories: []
};

const addCategory = (state, action) => {
	console.log(state, action);
};

const getCategories = (state, action) => {
	console.log(state, action);
};

const updateCategory = (state, action) => {
	console.log(state, action);
};

const removeCategory = (state, action) => {
	console.log(state, action);
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_CATEGORY:
			return addCategory(state, action);
		case actionTypes.GET_CATEGORIES:
			return getCategories(state, action);
		case actionTypes.UPDATE_CATEGORY:
			return updateCategory(state, action);
		case actionTypes.REMOVE_CATEGORY:
			return removeCategory(state, action);
		default:
			return state;
	}
};

export default reducer;
