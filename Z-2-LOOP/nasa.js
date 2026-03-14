function nasa(n) {
	let result = '';
	for (let i = 1; i <= n; i++) {
		if (i > 1) {
			result += ' ';
		}
		if (i % 3 === 0 && i % 5 === 0) {
			result += 'NASA';
		} else if (i % 3 === 0) {
			result += 'NA';
		} else if (i % 5 === 0) {
			result += 'SA';
		} else {
			result += i;
		}
	}
	return result;
}

/*
WHAT THE CODE DOES:
- Classic FizzBuzz-style challenge with NASA theme
- Returns string of numbers 1 to N with replacements based on divisibility
- Divisible by 3: "NA", by 5: "SA", by both 15: "NASA"
- Numbers separated by spaces

POSSIBLE CHALLENGES:
- Understanding operator precedence (check both conditions first)
- Order of if/else-if conditions matters (most specific first)
- Proper use of modulo operator (%)
- String building with space separation
- Edge cases (n=0, n=1, n=15)

CONCEPTS TO LEARN:
- Modulo operator for divisibility checking
- Conditional logic and if/else-if chains
- Order of conditions (specificity matters)
- String concatenation and formatting
- Loop iteration and accumulation

BONUS CHALLENGES:
- Generalize with customizable divisors and words
- Implement recursively instead of loop
- Add configurable output format (CSV, JSON, etc.)
- Create a version that handles negative numbers
- Add more divisibility rules
- Implement with regex pattern matching
- Create performance benchmark for large N values
*/
