export function fold(array, func, accumulator) {
  let acc = accumulator
  for (let i = 0; i < array.length; i++) {
    acc = func(acc, array[i])
  }
  return acc
}

export function foldRight(array, func, accumulator) {
  let acc = accumulator
  for (let i = array.length - 1; i >= 0; i--) {
    acc = func(acc, array[i])
  }
  return acc
}

export function reduce(array, func) {
  if (array.length < 1) {
    throw new Error('Reduce of empty array with no initial value')
  }
  let acc = array[0]
  for (let i = 1; i < array.length; i++) {
    acc = func(acc, array[i])
  }
  return acc
}

export function reduceRight(array, func) {
  if (array.length < 1) {
    throw new Error('Reduce of empty array with no initial value')
  }
  let acc = array[array.length - 1]
  for (let i = array.length - 2; i >= 0; i--) {
    acc = func(acc, array[i])
  }
  return acc
}

/*
 * REDUCE.JS - Accumulation and Aggregation Functions
 * 
 * CODE EXPLANATION:
 * - fold(array, func, accumulator): Reduces array left-to-right with initial value
 * - foldRight(array, func, accumulator): Reduces right-to-left with initial value
 * - reduce(array, func): Like fold but uses first element as initial value
 * - reduceRight(array, func): Like foldRight but uses last element as initial value
 * 
 * CONCEPTS STUDIED:
 * - Accumulation pattern: Building single value from collection
 * - Reduction: Processing sequence of items into final result
 * - Left vs right order: Direction of processing affects results for non-commutative ops
 * - Stateful iteration: Maintaining accumulator state across loop
 * - Error handling: Throwing on empty array without initial value
 * 
 * REAL WORLD EXAMPLES:
 * 1. Sum values: reduce([1,2,3,4], (a,b) => a + b) => 10
 * 2. Count occurrences: reduce(items, (counts, item) => {...}, {})
 * 3. Build object from array: reduce(pairs, (obj, [k,v]) => ({...obj, [k]: v}), {})
 * 4. Find maximum: reduce(nums, (max, n) => n > max ? n : max)
 * 5. String concatenation: fold(words, (str, w) => str + w, '')
 * 6. Balance calculation: foldRight(transactions, (bal, tx) => bal + tx.amount, 0)
 * 
 * BONUS CHALLENGES:
 * 1. Create scan: Return all intermediate accumulator values, not just final
 * 2. Add reduceAsync for async operations
 * 3. Implement groupReduce: Reduce with result grouped by key
 * 4. Create zipReduce: Reduce over multiple arrays simultaneously
 * 5. Performance: Implement early termination if predicate is met
 */
