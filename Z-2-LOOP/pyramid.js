function pyramid(str, n) {
	let result = '';
	for (let i = 1; i <= n; i++) {
		if (i > 1) {
			result += '\n';
		}
		for (let j = 0; j < (n - i) * str.length; j++) {
			result += ' ';
		}
		for (let j = 0; j < 2 * i - 1; j++) {
			result += str;
		}
	}
	return result;
}

/*
WHAT THE CODE DOES:
- Creates a centered pyramid pattern with increasing width toward center
- Line i has (n-i) spaces for centering and (2*i-1) character repetitions
- Scales properly for multi-character strings
- Example: pyramid('*', 3) returns "  *\n ***\n*****"

POSSIBLE CHALLENGES:
- Calculating proper spacing for centering
- Handling multi-character strings (space multiplication)
- Understanding the 2*i-1 formula for pyramid width
- Boundary conditions and the last line
- Building aesthetically pleasing output

CONCEPTS TO LEARN:
- Triple nested loops (newlines, spaces, characters)
- Mathematical formula for pattern generation (2*i-1)
- Proportional scaling with multi-character strings
- ASCII art and text-based UI design
- Center alignment algorithms

BONUS CHALLENGES:
- Create inverted pyramid
- Add thickness parameter for wider/narrower pyramids
- Implement diamond shape
- Add hollow pyramid support
- Create multi-layer pyramid patterns
- Generate colored output (ANSI codes)
- Implement using recursion
*/
