export const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties
	};
};

export const checkValidity = (value, rules) => {
	let isValid = value.trim() !== '';

	return isValid;
};
