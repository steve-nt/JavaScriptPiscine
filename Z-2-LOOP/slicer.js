function slice(value, start, end) {
	let result = '';
	let length = value.length;
	
	// Normalize start index
	if (start < 0) {
		start = length + start;
	}
	start = start < 0 ? 0 : start;
	
	// Normalize end index
	if (end === undefined) {
		end = length;
	} else if (end < 0) {
		end = length + end;
	}
	end = end > length ? length : end;
	
	// Build result
	if (typeof value === 'string') {
		for (let i = start; i < end; i++) {
			result += value[i];
		}
		return result;
	} else {
		result = [];
		for (let i = start; i < end; i++) {
			result.push(value[i]);
		}
		return result;
	}
}

/*
WHAT THE CODE DOES:
- Reimplements Array.slice() and String.slice() without using the built-in method
- Extracts a shallow copy of a portion of an array or string
- Handles negative indices by converting them relative to the end
- Returns a new array/string without modifying the original

POSSIBLE CHALLENGES:
- Understanding negative index handling (converting -1 to length-1)
- Properly normalizing start and end boundaries
- Handling undefined/missing parameters
- Differentiating between string and array operations
- Managing edge cases (empty arrays, out-of-bounds indices)

CONCEPTS TO LEARN:
- Index normalization and boundary checking
- Type checking (typeof vs Array.isArray)
- String and array iteration
- Parameter validation and default values
- Shallow copying vs deep copying

BONUS CHALLENGES:
- Add support for step parameter like slice(arr, start, end, step)
- Implement negative step (reverse slicing)
- Add deep copying for nested arrays
- Create a splice version that modifies the original
- Implement for objects/other iterables
- Add automatic index clamping for out-of-bounds
- Create a performance-optimized version
*/
