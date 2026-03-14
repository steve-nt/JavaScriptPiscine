function repeat(str, num) {
	let result = '';
	for (let i = 0; i < num; i++) {
		result += str;
	}
	return result;
}

/*
WHAT THE CODE DOES:
- Replicates String.repeat() functionality without using the built-in method
- Takes a string and number, returns the string repeated 'num' times
- Example: repeat('abc', 3) -> 'abcabcabc'

POSSIBLE CHALLENGES:
- Understanding loop iteration and accumulation
- Handling edge cases (num = 0, negative numbers, empty strings)
- Performance implications of string concatenation in loops (strings are immutable in JS)

CONCEPTS TO LEARN:
- For loops and iteration
- String concatenation
- Function parameters and return values
- String manipulation

BONUS CHALLENGES:
- Implement using recursion instead of a loop
- Add support for negative numbers (throw error or return empty string)
- Use array.join() approach: repeat(str, num) => new Array(num + 1).join(str)
- Optimize for very large repetitions to avoid performance issues
- Add parameter validation to check for valid inputs
*/
