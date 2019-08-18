import * as actionTypes from './actionTypes';

export const addCategory = () => {
	return {
		type: actionTypes.ADD_CATEGORY
	};
};

export const updateCategory = (categoryName, newCategoryName) => {
	return {
		type: actionTypes.UPDATE_CATEGORY,
		categoryName: categoryName,
		newCategoryName: newCategoryName
	};
};

export const removeCategory = categoryName => {
	return {
		type: actionTypes.REMOVE_CATEGORY,
		categoryName: categoryName
	};
};

export const changeCategoryInput = categoryName => {
	return {
		type: actionTypes.REMOVE_CATEGORY,
		categoryInputValue: categoryName
	};
};
