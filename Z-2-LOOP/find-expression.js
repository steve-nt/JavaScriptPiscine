function findExpression(target) {
	if (target < 1) {
		return undefined;
	}
	
	if (target === 1) {
		return '1';
	}
	
	let queue = [[1, '1']];
	let visited = new Set([1]);
	
	while (queue.length > 0) {
		let current = queue.shift();
		let num = current[0];
		let path = current[1];
		
		// Try multiply by 2
		let next = num * 2;
		if (next === target) {
			return path + ' ' + mul2;
		}
		if (next < target && !visited.has(next)) {
			visited.add(next);
			queue.push([next, path + ' ' + mul2]);
		}
		
		// Try add 4
		next = num + 4;
		if (next === target) {
			return path + ' ' + add4;
		}
		if (next < target && !visited.has(next)) {
			visited.add(next);
			queue.push([next, path + ' ' + add4]);
		}
	}
	
	return undefined;
}

/*
WHAT THE CODE DOES:
- Uses BFS (Breadth-First Search) to find a sequence of operations reaching target
- Starting from 1, repeatedly apply *2 or +4 operations
- Tracks visited numbers to avoid cycles
- Returns path as string or undefined if impossible
- Example: findExpression(8) -> "1 *2 *2 +4"

POSSIBLE CHALLENGES:
- Understanding BFS vs DFS algorithms
- Queue management and FIFO order
- Visited set tracking to prevent infinite loops
- Early termination conditions (reaching target)
- Paths can get exponentially large for big targets

CONCEPTS TO LEARN:
- Breadth-first search algorithm
- Queue data structure and operations
- Graph traversal and path finding
- Visited set for cycle prevention
- Dynamic programming concepts

BONUS CHALLENGES:
- Implement with DFS and compare performance
- Add A* search with heuristics
- Find shortest path (already done with BFS)
- Find all possible paths
- Add support for different operations
- Optimize for very large target numbers
- Implement with memoization
*/
