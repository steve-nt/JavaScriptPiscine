export function filter(array, func) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) {
      result.push(array[i])
    }
  }
  return result
}

export function reject(array, func) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    if (!func(array[i], i, array)) {
      result.push(array[i])
    }
  }
  return result
}

export function partition(array, func) {
  const passed = []
  const failed = []
  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) {
      passed.push(array[i])
    } else {
      failed.push(array[i])
    }
  }
  return [passed, failed]
}

/*
 * FILTER.JS - Array Selection and Partitioning Functions
 * 
 * CODE EXPLANATION:
 * - filter(array, func): Keeps elements where func returns true
 * - reject(array, func): Keeps elements where func returns false (opposite of filter)
 * - partition(array, func): Splits array into two: [passed, failed]
 * 
 * CONCEPTS STUDIED:
 * - Predicate functions: Functions that return boolean for decision-making
 * - Array filtering: Selecting subset of elements based on condition
 * - Array partitioning: Dividing data into categories
 * - Early termination: Unlike map, filter only includes matching items
 * 
 * REAL WORLD EXAMPLES:
 * 1. filter: Get only active users from database
 *    filter(users, u => u.isActive && u.verified)
 * 2. reject: Remove banned users from a list
 *    reject(comments, c => c.isSpam)
 * 3. partition: Separate valid and invalid form submissions
 *    const [valid, invalid] = partition(submissions, isValid)
 * 4. Data cleanup: Remove null/undefined values
 *    filter(data, item => item != null)
 * 
 * BONUS CHALLENGES:
 * 1. Create filterMap: Combine filtering and mapping in one pass
 * 2. Add a count function: Returns number of matching elements
 * 3. Implement groupBy: Partition into multiple groups based on func result
 * 4. Create filterAsync for async predicates
 */
