function split(str, separator) {
	if (separator === '') {
		let result = [];
		for (let i = 0; i < str.length; i++) {
			result.push(str[i]);
		}
		return result;
	}
	
	let result = [];
	let current = '';
	for (let i = 0; i < str.length; i++) {
		let match = true;
		if (i + separator.length <= str.length) {
			for (let j = 0; j < separator.length; j++) {
				if (str[i + j] !== separator[j]) {
					match = false;
					break;
				}
			}
		} else {
			match = false;
		}
		
		if (match) {
			result.push(current);
			current = '';
			i += separator.length - 1;
		} else {
			current += str[i];
		}
	}
	result.push(current);
	return result;
}

function join(arr, separator) {
	let result = '';
	for (let i = 0; i < arr.length; i++) {
		if (i > 0) {
			result += separator;
		}
		result += arr[i];
	}
	return result;
}

/*
WHAT THE CODE DOES:
- Reimplements String.split() and Array.join() without using built-in methods
- split: Divides string into array by finding separator occurrences
- join: Concatenates array elements with separator between them
- Handles empty separators and edge cases

POSSIBLE CHALLENGES:
- Pattern matching and substring detection in split
- Correctly advancing index when separator is found
- Handling empty separator (split into characters)
- String concatenation performance with large inputs
- Off-by-one errors in index manipulation

CONCEPTS TO LEARN:
- String pattern matching and searching
- Index advancement and loop control flow
- Array building and accumulation
- Edge case handling (empty strings, empty arrays)
- String vs array operations

BONUS CHALLENGES:
- Add regex support for split (pattern matching)
- Implement split with limit parameter
- Add trim() support for split results
- Create reverse operations (join to string, split to array)
- Implement with different data types (numbers, objects)
- Add Unicode and multi-byte character support
- Optimize for very large strings/arrays
*/
