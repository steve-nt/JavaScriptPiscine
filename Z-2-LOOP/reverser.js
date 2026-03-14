function reverse(value) {
	if (typeof value === 'string') {
		let result = '';
		for (let i = value.length - 1; i >= 0; i--) {
			result += value[i];
		}
		return result;
	} else {
		for (let i = 0; i < value.length / 2; i++) {
			let temp = value[i];
			value[i] = value[value.length - 1 - i];
			value[value.length - 1 - i] = temp;
		}
		return value;
	}
}

/*
WHAT THE CODE DOES:
- Reimplements Array.reverse() and creates reverse for strings
- For strings: Creates new reversed string by iterating backwards
- For arrays: Swaps elements from both ends toward center, modifying in place
- Mirrors Array.reverse() behavior (mutates arrays, returns new strings)

POSSIBLE CHALLENGES:
- Type checking (string vs array)
- Two-pointer/swap technique for arrays
- Understanding in-place mutation vs creating new objects
- Handling empty arrays/strings and single element edge cases
- Performance with large data structures

CONCEPTS TO LEARN:
- Type checking and polymorphism
- Two-pointer technique and swapping
- In-place array modification
- String immutability vs array mutability
- Loop optimization (only iterate halfway through)

BONUS CHALLENGES:
- Implement reverse for objects and iterables
- Create a non-mutating version for arrays
- Use recursion to implement reverse
- Implement with destructuring/ES6 features
- Add support for reversing only a portion (start, end parameters)
- Benchmark in-place vs creating new array performance
- Implement for linked lists
*/
