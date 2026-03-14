function cutFirst(str) {
	return str.slice(2);
}

function cutLast(str) {
	return str.slice(0, str.length - 2);
}

function cutFirstLast(str) {
	return str.slice(2, str.length - 2);
}

function keepFirst(str) {
	return str.substring(0, 2);
}

function keepLast(str) {
	return str.substring(str.length - 2);
}

function keepFirstLast(str) {
	if (str.length < 4) {
		return str;
	}
	return str.slice(0, 2) + str.slice(str.length - 2);
}

/*
WHAT THE CODE DOES:
- Provides utility functions for simple string manipulation
- cutFirst/cutLast/cutFirstLast: Remove first/last 2 characters
- keepFirst/keepLast/keepFirstLast: Keep only first/last 2 characters
- Uses slice() and substring() for string extraction

POSSIBLE CHALLENGES:
- Understanding the difference between slice() and substring()
- Handling edge cases (strings shorter than 2 or 4 characters)
- Proper index calculations for negative and positive indices
- Recognizing that overlapping regions need special handling

CONCEPTS TO LEARN:
- String slicing and substring operations
- Index manipulation (length - offset)
- Edge case handling for boundary conditions
- Difference between slice() (doesn't swap) and substring() (swaps indices)

BONUS CHALLENGES:
- Generalize to cut/keep any number of characters (parameter N)
- Add support for cutting from middle or arbitrary positions
- Implement using loop-based character manipulation instead of slice
- Create a chainable API for multiple operations
- Add validation to handle invalid input
- Optimize for very long strings
- Add support for Unicode and multi-byte characters
*/
