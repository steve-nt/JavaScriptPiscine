function indexOf(arr, value, fromIndex = 0) {
	for (let i = fromIndex; i < arr.length; i++) {
		if (arr[i] === value) {
			return i;
		}
	}
	return -1;
}

function lastIndexOf(arr, value, fromIndex = arr.length - 1) {
	for (let i = fromIndex; i >= 0; i--) {
		if (arr[i] === value) {
			return i;
		}
	}
	return -1;
}

function includes(arr, value) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return true;
		}
	}
	return false;
}

/*
WHAT THE CODE DOES:
- Reimplements Array.indexOf(), lastIndexOf(), and includes() methods without using built-ins
- indexOf: Searches forward and returns first matching index, or -1 if not found
- lastIndexOf: Searches backward and returns last matching index, or -1 if not found
- includes: Returns true if value exists in array, false otherwise

POSSIBLE CHALLENGES:
- Understanding default parameter values (fromIndex)
- Handling edge cases (empty arrays, out-of-bounds fromIndex, null/undefined values)
- Distinguishing between forward and backward iteration
- Understanding strict equality (===) vs loose equality (==)
- Performance with large arrays (linear search is O(n))

CONCEPTS TO LEARN:
- Array iteration and indexing
- Default function parameters
- Loop direction control (forward vs backward)
- Return values and early exit strategies
- Boolean logic and conditionals

BONUS CHALLENGES:
- Add support for predicate function (findIndex, findLastIndex)
- Implement binary search for sorted arrays (O(log n))
- Add regex pattern matching for indexOf
- Create a version that returns all matching indices
- Implement with different equality checks (loose vs strict)
- Add case-insensitive search for strings
- Handle searching in nested arrays (deep search)
*/
