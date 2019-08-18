import * as actionTypes from './actionTypes';

export const addCategory = categoryName => {
	return {
		type: actionTypes.ADD_CATEGORY,
		categoryName: categoryName
	};
};

export const updateCategory = (categoryName, newCategoryName) => {
	return {
		type: actionTypes.UPDATE_CATEGORY,
		categoryName: categoryName,
		newCategoryName: newCategoryName
	};
};

export const removeCategory = categoryId => {
	return {
		type: actionTypes.REMOVE_CATEGORY,
		categoryId: categoryId
	};
};
