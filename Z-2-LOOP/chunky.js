function chunk(arr, size) {
	let result = [];
	for (let i = 0; i < arr.length; i += size) {
		let subArray = [];
		for (let j = 0; j < size && i + j < arr.length; j++) {
			subArray.push(arr[i + j]);
		}
		result.push(subArray);
	}
	return result;
}

/*
WHAT THE CODE DOES:
- Divides an array into smaller sub-arrays of specified size
- Last chunk contains remaining elements if array length isn't divisible by size
- Returns array of sub-arrays (2D array)
- Example: chunk([1,2,3,4,5], 2) -> [[1,2], [3,4], [5]]

POSSIBLE CHALLENGES:
- Handling arrays that don't divide evenly into chunks
- Correct boundary checking to avoid out-of-bounds errors
- Nested loop control and index management
- Understanding step iteration (i += size)
- Memory efficiency with large arrays

CONCEPTS TO LEARN:
- Nested loops and multi-dimensional arrays
- Array slicing and chunking patterns
- Boundary conditions and edge cases
- Loop stepping (i += size vs i++)
- Array construction and push operations

BONUS CHALLENGES:
- Add parameter to specify overlap between chunks
- Implement using array.slice() instead of manual copying
- Create a streaming version for large datasets
- Add support for different data types (strings, iterables)
- Implement a version that flattens back to original
- Add configuration for padding the last chunk
- Create a generator version for memory efficiency
*/
