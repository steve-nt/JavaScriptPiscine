function flat(arr, depth = 1) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i]) && depth > 0) {
			let flattened = flat(arr[i], depth - 1);
			for (let j = 0; j < flattened.length; j++) {
				result.push(flattened[j]);
			}
		} else {
			result.push(arr[i]);
		}
	}
	return result;
}

/*
WHAT THE CODE DOES:
- Recursively flattens nested arrays to specified depth
- Default depth is 1 (flatten one level)
- Returns new array without modifying original
- Stops at specified depth limit
- Example: flat([1, [2, [3, 4]], 5], 1) -> [1, 2, [3, 4], 5]

POSSIBLE CHALLENGES:
- Understanding recursion and recursive calls
- Depth management (decrementing with each level)
- Array type checking (Array.isArray vs typeof)
- Handling arrays of different lengths
- Performance with deeply nested structures

CONCEPTS TO LEARN:
- Recursive function design
- Base case and recursive case
- Depth-first traversal
- Array flattening algorithms
- Performance implications of recursion (call stack)

BONUS CHALLENGES:
- Implement iteratively with a stack
- Add infinity depth (flatten completely)
- Create a version that preserves structure (with null placeholders)
- Add filtering during flattening
- Implement for other iterables (strings, sets)
- Create generator version for memory efficiency
- Add performance optimization with memoization
*/
