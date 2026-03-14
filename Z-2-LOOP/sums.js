function sums(n) {
	let result = [];
	
	function helper(remaining, min, current) {
		if (remaining === 0) {
			if (current.length > 1) {
				result.push([...current]);
			}
			return;
		}
		
		for (let i = min; i <= remaining; i++) {
			current.push(i);
			helper(remaining - i, i, current);
			current.pop();
		}
	}
	
	helper(n, 1, []);
	return result;
}

/*
WHAT THE CODE DOES:
- Generates all integer partitions of a number (partitions of n)
- A partition is a set of numbers that sum to n
- No duplicates ([1,2] and [2,1] are same partition)
- Returns 2D array of all unique partitions
- Example: sums(4) -> [[1,1,1,1], [1,1,2], [1,3], [2,2]]

POSSIBLE CHALLENGES:
- Understanding recursion with accumulation
- Managing state through recursive calls
- Avoiding duplicate partitions (using min parameter)
- Backtracking (push/pop pattern)
- Understanding partition theory mathematics

CONCEPTS TO LEARN:
- Recursive backtracking algorithm
- Combinatorial number theory
- Managing depth and constraints in recursion
- The partition problem (mathematical concept)
- Array manipulation during recursion

BONUS CHALLENGES:
- Implement iteratively using a stack
- Add filtering by partition size or properties
- Generate partitions with specific constraints
- Count partitions without generating them
- Implement memoization for performance
- Add support for distinct partitions only
- Create generator version for large n
*/
