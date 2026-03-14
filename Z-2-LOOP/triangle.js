function triangle(str, n) {
	let result = '';
	for (let i = 1; i <= n; i++) {
		if (i > 1) {
			result += '\n';
		}
		for (let j = 0; j < i; j++) {
			result += str;
		}
	}
	return result;
}

/*
WHAT THE CODE DOES:
- Creates a text-based triangle pattern of increasing width
- Each line i contains i repetitions of the character/string
- Lines separated by newlines
- Example: triangle('*', 3) returns "*\n**\n***"

POSSIBLE CHALLENGES:
- Handling newline placement (first line has none)
- Building patterns with nested loops
- String repetition at different scales
- Understanding multi-character strings in patterns
- Edge cases (n=0, n=1, very large n)

CONCEPTS TO LEARN:
- Nested loops for pattern generation
- String building and newline handling
- Loop counters and conditionals
- Text-based ASCII art generation
- Performance with large n values

BONUS CHALLENGES:
- Generalize to right-aligned triangles
- Create upside-down triangles
- Add support for hollow triangles
- Implement diamond patterns
- Create pyramid variations (different characters per line)
- Add colored output (terminal ANSI codes)
- Create recursive implementation
*/
