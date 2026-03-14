function get(src, path) {
	let keys = path.split('.');
	let current = src;
	for (let i = 0; i < keys.length; i++) {
		if (current === undefined || current === null) {
			return undefined;
		}
		current = current[keys[i]];
	}
	return current;
}

/*
WHAT THE CODE DOES:
- Safely retrieves nested object properties using dot notation path
- Handles undefined/null values gracefully without throwing errors
- Returns undefined if path doesn't exist
- Example: get({a: {b: {c: 1}}}, 'a.b.c') -> 1

POSSIBLE CHALLENGES:
- Parsing dot-notation paths into array of keys
- Null/undefined checking at each level
- Accessing nested properties dynamically
- Handling edge cases (empty path, single property, very deep nesting)
- Differentiating undefined values from missing properties

CONCEPTS TO LEARN:
- Object property access (bracket notation)
- Defensive programming with null/undefined checks
- Path parsing and navigation
- Dynamic property access
- Recursive object traversal concepts

BONUS CHALLENGES:
- Add support for array indices in path (a.b[0].c)
- Implement set() function for setting nested values
- Add support for wildcard paths (a.*.c)
- Create a deep clone function along with this
- Add path validation and error messages
- Implement with optional chaining (?.) syntax internally
- Create getIn for immutable data structures
*/
