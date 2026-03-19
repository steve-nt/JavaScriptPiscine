export function mult2(a) {
  return function(b) {
    return a * b
  }
}

export function add3(a) {
  return function(b) {
    return function(c) {
      return a + b + c
    }
  }
}

export function sub4(a) {
  return function(b) {
    return function(c) {
      return function(d) {
        return a - b - c - d
      }
    }
  }
}

/*
 * SWEET-CURRY.JS - Manual Currying Implementation
 * 
 * CODE EXPLANATION:
 * - mult2(a): Returns function that takes b, multiplies a*b
 * - add3(a): Returns function that takes b, returns function that takes c, sums all
 * - sub4(a): Returns function that takes b, c, d in sequence, subtracts all from a
 * 
 * CONCEPTS STUDIED:
 * - Currying: Converting function with N args to N functions with 1 arg each
 * - Closure: Inner functions "remember" outer function arguments
 * - Function composition: Functions returning functions
 * - Partial application: Providing arguments gradually
 * - Arity: Number of arguments a function expects
 * 
 * REAL WORLD EXAMPLES:
 * 1. Configuration builders:
 *    const configAPI = currify(setupAPI)
 *    const prod = configAPI('prod')('https://api.com')('sk-1234')
 * 
 * 2. Event handlers:
 *    const handleClick = curry((x, y, event) => {...})
 *    elem.onClick = handleClick(100)(200)
 * 
 * 3. Data transformation pipelines:
 *    const transform = curry((format, scale, data) => {...})
 *    const toPercent = transform('percent')(100)
 * 
 * 4. Function factories:
 *    const multiply = curry((a, b) => a * b)
 *    const double = multiply(2)
 *    const triple = multiply(3)
 * 
 * BONUS CHALLENGES:
 * 1. Create flexible curry that accepts multiple args per call
 * 2. Add uncurry: Convert curried function back to multi-arg form
 * 3. Implement memoization with curried functions
 * 4. Create composable pipeline using curried functions
 * 5. Add parameter reordering: Allow args in any order
 */
