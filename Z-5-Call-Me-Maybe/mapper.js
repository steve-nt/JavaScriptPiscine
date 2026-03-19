export function map(array, func) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    result.push(func(array[i], i, array))
  }
  return result
}

export function flatMap(array, func) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const mapped = func(array[i], i, array)
    if (Array.isArray(mapped)) {
      for (let j = 0; j < mapped.length; j++) {
        result.push(mapped[j])
      }
    } else {
      result.push(mapped)
    }
  }
  return result
}

/*
 * MAPPER.JS - Array Transformation Functions
 * 
 * CODE EXPLANATION:
 * - map(array, func): Transforms each element using func and returns new array
 * - flatMap(array, func): Maps elements and flattens one level (arrays are unwrapped)
 * 
 * CONCEPTS STUDIED:
 * - Higher-order functions: Functions that take/return other functions
 * - Immutability: Original array remains unchanged, new array created
 * - Array iteration: Manual loops instead of built-in methods
 * - Callback pattern: Function passed as argument to control behavior
 * 
 * REAL WORLD EXAMPLES:
 * 1. map: Transform user objects to display names only
 *    map(users, user => user.name)
 * 2. flatMap: Parse CSV rows and flatten into single array
 *    flatMap(csvLines, line => line.split(','))
 * 3. Data normalization: Convert API responses into usable format
 *    flatMap(responses, res => res.data.items)
 * 
 * BONUS CHALLENGES:
 * 1. Add a depth parameter to flatMap to flatten multiple levels
 * 2. Create a mapAsync that handles promises/async functions
 * 3. Implement findMap: returns first non-null mapped value
 * 4. Create mapWithIndex that passes index to the original map
 */
