export function flow(funcs) {
  return function(...args) {
    let result = funcs[0](...args)
    for (let i = 1; i < funcs.length; i++) {
      result = funcs[i](result)
    }
    return result
  }
}

/*
 * FLOW.JS - Function Composition (Left-to-Right Pipeline)
 * 
 * CODE EXPLANATION:
 * - Takes array of functions
 * - Returns function that chains them: output of one = input of next
 * - First function receives all arguments, rest receive single result
 * 
 * CONCEPTS STUDIED:
 * - Function composition: Combining functions to create new function
 * - Data pipeline: Passing data through series of transformations
 * - Declarative programming: State what transformations, not how
 * - Left-to-right evaluation: Unlike mathematical composition (right-to-left)
 * - Higher-order functions: Functions operating on other functions
 * 
 * REAL WORLD EXAMPLES:
 * 1. Data transformation pipeline:
 *    const processUser = flow([
 *      parseJSON,
 *      validateUser,
 *      sanitizeData,
 *      saveToDatabase
 *    ])
 *    processUser(jsonString)
 * 
 * 2. String processing:
 *    const format = flow([
 *      trim,
 *      toLowerCase,
 *      removeSpecialChars,
 *      addPrefix('USER_')
 *    ])
 * 
 * 3. Image processing:
 *    const enhancePhoto = flow([
 *      loadImage,
 *      applyFilter,
 *      adjustBrightness,
 *      resizeImage,
 *      compress
 *    ])
 * 
 * 4. API request handling:
 *    const fetchAndProcess = flow([
 *      fetch,
 *      parseResponse,
 *      transformData,
 *      cacheResult,
 *      returnToUI
 *    ])
 * 
 * BONUS CHALLENGES:
 * 1. Create pipe: Right-to-left composition (like compose in lodash)
 * 2. Add error handling: Catch exceptions and pass to error handler
 * 3. Implement async flow: Handle promises/async functions
 * 4. Create conditional flow: Different paths based on conditions
 * 5. Add debugging: Log values between each step
 * 6. Performance optimization: Memoize intermediate results
 */
