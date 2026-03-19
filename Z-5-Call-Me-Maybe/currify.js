export function currify(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args)
    }
    return function(...nextArgs) {
      return curried(...args, ...nextArgs)
    }
  }
}

/*
 * CURRIFY.JS - Automatic Function Currying with Partial Application
 * 
 * CODE EXPLANATION:
 * - Takes any function and returns curried version
 * - Uses func.length to determine parameter count
 * - Accumulates args until enough provided, then executes original
 * - Supports partial application and multiple args per call
 * 
 * CONCEPTS STUDIED:
 * - Dynamic currying: Adapt to any function's arity
 * - Function.length property: Number of declared parameters
 * - Recursion: Nested calls to curried until complete
 * - Rest parameters: Collecting variable arguments
 * - Closure: Maintaining argument accumulator across calls
 * - Higher-order functions: Wrapping and transforming functions
 * 
 * REAL WORLD EXAMPLES:
 * 1. Flexible function application:
 *    const add = (a, b, c) => a + b + c
 *    const curriedAdd = currify(add)
 *    curriedAdd(1)(2)(3)      // 6
 *    curriedAdd(1, 2)(3)      // 6 (flexibility!)
 *    curriedAdd(1)(2, 3)      // 6
 * 
 * 2. API client builder:
 *    const request = (method, url, data) => fetch(url, {method, body: data})
 *    const curriedReq = currify(request)
 *    const postTo = curriedReq('POST')
 *    const postUser = postTo('https://api.com/users')
 *    postUser({name: 'John'})
 * 
 * 3. Event handler factory:
 *    const handleChange = (fieldName, validation, data) => {...}
 *    const curriedChange = currify(handleChange)
 *    const emailChange = curriedChange('email')(isValidEmail)
 * 
 * 4. Configuration builder:
 *    const setupDB = (host, port, user, password) => {...}
 *    const curry = currify(setupDB)
 *    const prodDB = curry('prod.db.com')(5432)('admin')
 * 
 * 5. Assertion in tests:
 *    const assertEqual = currify((expected, actual, msg) => {...})
 *    const shouldBe = assertEqual(42)
 *    shouldBe(42)('Answer is correct')
 * 
 * BONUS CHALLENGES:
 * 1. Add reverse currying: rightCurrify for right-to-left application
 * 2. Implement uncurrify: Convert curried function back to normal
 * 3. Add placeholder support: Allow skipping args with _ placeholder
 * 4. Create asyncCurrify: Handle functions returning promises
 * 5. Add caching: Memoize results for same argument combinations
 * 6. Performance test: Benchmark vs manual currying
 */
