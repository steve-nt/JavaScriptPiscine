function floor(num) {
	if (num >= 0) {
		let result = 0;
		let step = 1;
		while (result + step <= num) {
			result += step;
			step = step + step;
		}
		step = step / 2;
		while (step >= 1) {
			if (result + step <= num) {
				result += step;
			}
			step = step / 2;
		}
		return result;
	} else {
		let result = 0;
		let step = 1;
		while (result > num) {
			result -= step;
			step = step + step;
		}
		step = step / 2;
		while (step >= 1) {
			if (result + step <= num) {
				result += step;
			}
			step = step / 2;
		}
		return result;
	}
}

function ceil(num) {
	let f = floor(num);
	if (f === num) {
		return f;
	}
	return f + 1;
}

function round(num) {
	let f = floor(num);
	let frac = num - f;
	if (frac >= 0.5) {
		return f + 1;
	} else if (frac <= -0.5) {
		return f - 1;
	}
	return f;
}

function trunc(num) {
	if (num >= 0) {
		return floor(num);
	}
	let f = floor(num);
	if (f === num) {
		return f;
	}
	return f + 1;
}

/*
WHAT THE CODE DOES:
- Reimplements Math.floor(), Math.ceil(), Math.round(), and Math.trunc()
- floor: Largest integer <= num (rounds down)
- ceil: Smallest integer >= num (rounds up)
- round: Nearest integer (0.5 rounds away from zero)
- trunc: Removes decimal part (toward zero)

POSSIBLE CHALLENGES:
- Avoiding linear loops that would timeout (using exponential + binary search)
- Handling negative numbers correctly (different rounding behavior)
- Understanding when to round up vs down vs toward zero
- Binary search implementation (exponential then halving)
- Fractional part calculation for round function

CONCEPTS TO LEARN:
- Rounding algorithms and mathematical concepts
- Binary search and exponential search
- Handling negative numbers in mathematical operations
- Performance optimization (avoiding O(n) loops for large numbers)
- Bit manipulation alternatives (bitwise operators)

BONUS CHALLENGES:
- Implement using bitwise operators instead of loops
- Add rounding to N decimal places
- Implement Math.pow() and Math.sqrt() from scratch
- Create a 64-bit version handling very large numbers
- Add configurable rounding modes (banker's rounding, etc.)
- Optimize further with Newton's method for sqrt
- Handle edge cases (Infinity, NaN, -0)
*/
