function multiply(a, b) {
	let result = 0;
	if (b < 0) {
		for (let i = 0; i > b; i--) {
			result -= a;
		}
	} else {
		for (let i = 0; i < b; i++) {
			result += a;
		}
	}
	return result;
}

function divide(a, b) {
	let result = 0;
	let isNegative = (a < 0) !== (b < 0);
	a = a < 0 ? -a : a;
	b = b < 0 ? -b : b;
	while (a >= b) {
		a -= b;
		result++;
	}
	return isNegative ? -result : result;
}

function modulo(a, b) {
	let isNegative = a < 0;
	a = a < 0 ? -a : a;
	b = b < 0 ? -b : b;
	while (a >= b) {
		a -= b;
	}
	return isNegative ? -a : a;
}

/*
WHAT THE CODE DOES:
- Implements multiplication, division, and modulo operators without using *, /, or % operators
- multiply(a, b): Adds 'a' to itself 'b' times (repeated addition)
- divide(a, b): Counts how many times 'b' fits into 'a' (repeated subtraction)
- modulo(a, b): Finds the remainder after division using repeated subtraction

POSSIBLE CHALLENGES:
- Handling negative numbers correctly (different sign combinations)
- Understanding division vs floor division behavior
- Avoiding infinite loops when dividing by zero or when denominator > numerator
- Performance with large numbers (repeated addition/subtraction is slow)
- Understanding two's complement and sign handling

CONCEPTS TO LEARN:
- Arithmetic fundamentals (multiplication as repeated addition)
- Integer division and remainder calculation
- Sign handling and number operations
- Loop conditions and termination
- Edge cases with negative numbers

BONUS CHALLENGES:
- Add zero-division error handling
- Implement bitwise operations for faster multiplication
- Use bit shifting for multiplication by powers of 2
- Handle floating-point division (returning decimal results)
- Optimize using exponential multiplication (doubling approach)
- Implement factorial, power, or GCD using these primitives
- Create a full calculator with all four operations
*/
