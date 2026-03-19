export function every(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (!func(array[i], i, array)) {
      return false
    }
  }
  return true
}

export function some(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) {
      return true
    }
  }
  return false
}

export function none(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) {
      return false
    }
  }
  return true
}

/*
 * QUANTIFIERS.JS - Universal and Existential Logic Functions
 * 
 * CODE EXPLANATION:
 * - every(array, func): Returns true only if ALL elements satisfy the condition
 * - some(array, func): Returns true if AT LEAST ONE element satisfies the condition
 * - none(array, func): Returns true if NO elements satisfy the condition
 * 
 * CONCEPTS STUDIED:
 * - Universal quantifiers (∀): "for all" - every element must match
 * - Existential quantifiers (∃): "there exists" - at least one must match
 * - Negation: none is the opposite of some
 * - Short-circuit evaluation: Stop as soon as result is determined
 * - Boolean logic: AND (every), OR (some), NOR (none)
 * 
 * REAL WORLD EXAMPLES:
 * 1. Validation: Check if all form fields are valid
 *    every(fields, f => f.isValid)
 * 2. Permission checking: User has at least one required role
 *    some(user.roles, r => requiredRoles.includes(r))
 * 3. Data integrity: Ensure no null/undefined values
 *    none(data, item => item == null)
 * 4. Quality checks: All tests passed
 *    every(testResults, t => t.passed)
 * 5. Feature flags: Has user enabled at least one feature
 *    some(features, f => f.isEnabled)
 * 6. Security: None of the passwords are weak
 *    none(passwords, p => isWeak(p))
 * 
 * BONUS CHALLENGES:
 * 1. Create find: Return first element matching predicate
 * 2. Add findIndex: Return index of first match
 * 3. Implement count: Number of matching elements
 * 4. Create allUnique: Check if all elements are different
 * 5. Performance optimization: Early exit comparison with array methods
 */
