// Sum all numbers in array
const adder = (arr, initial = 0) =>
  arr.reduce((sum, num) => sum + num, initial);

// Add odd numbers, multiply even numbers
const sumOrMul = (arr, initial = 0) =>
  arr.reduce((acc, num) => (num % 2 === 0 ? acc * num : acc + num), initial);

// Execute array of functions sequentially
const funcExec = (arr, initial = 0) =>
  arr.reduce((acc, func) => func(acc), initial);

/*
 * USING-REDUCE.JS - Practical Reduce Applications
 * 
 * CODE EXPLANATION:
 * - adder: Sums all numbers with optional initial value
 * - sumOrMul: Different operations based on odd/even numbers
 * - funcExec: Pipes initial value through array of functions
 * 
 * CONCEPTS STUDIED:
 * - Accumulation: Building result through iteration
 * - Conditional logic in reduce: Different operations per iteration
 * - Function composition: Treating functions as data to iterate over
 * - Higher-order functions: Functions operating on other functions
 * - Pipeline pattern: Threading value through sequential operations
 * - Default parameters: Initial value defaults to 0
 * 
 * REAL WORLD EXAMPLES:
 * 1. Sum calculations: Total sales, inventory count, scores
 *    const total = sales.reduce((sum, item) => sum + item.price, 0)
 * 
 * 2. Statistical aggregations: Average, min, max
 *    const avg = arr.reduce((sum, n) => sum + n, 0) / arr.length
 * 
 * 3. Building objects from arrays: Group by key
 *    const grouped = items.reduce((obj, item) => ({
 *      ...obj,
 *      [item.category]: [...(obj[item.category] || []), item]
 *    }), {})
 * 
 * 4. sumOrMul pattern - conditional operations:
 *    Multiply prices for even quantities, add prices for odd quantities
 *    Great for complex business logic
 * 
 * 5. funcExec - middleware chain / pipeline:
 *    Used in web frameworks for request processing:
 *    [authenticate, authorize, parseBody, validate, handleRequest]
 *    Each function receives output of previous, transforms, passes next
 * 
 * 6. Data transformation: Convert array to single aggregated value
 *    const report = transactions.reduce((summary, tx) => ({
 *      totalSpent: summary.totalSpent + tx.amount,
 *      categories: {...},
 *      largest: Math.max(summary.largest, tx.amount)
 *    }), {totalSpent: 0, categories: {}, largest: 0})
 * 
 * BONUS CHALLENGES:
 * 1. Create mapReduce: Filter and reduce in one pass
 * 2. Add asyncReduce: Handle promises/async functions
 * 3. Implement scan: Return all intermediate values, not just final
 * 4. Create reduceRight variant for reverse order
 * 5. Add error handling: Catch exceptions during reduction
 * 6. Performance comparison: Reduce vs for loop vs other methods
 * 7. Create groupReduce: Reduce into multiple accumulator groups
 * 8. Add conditional execution: Skip items meeting certain criteria
 */
