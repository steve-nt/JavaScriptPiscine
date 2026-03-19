/*
 * FOR-EACH.JS - Custom forEach Implementation with Side Effects
 * 
 * CODE EXPLANATION:
 * - forEach(arr, callback, context): Executes callback for each element
 * - Uses call() to bind context (this) for callback execution
 * - Passes element, index, and original array to callback
 * - Returns undefined (use for side effects, not transformations)
 * 
 * CONCEPTS STUDIED:
 * - Iteration: Looping through all array elements
 * - Callbacks: Passing functions to execute on each item
 * - Function context binding: Using call() to set 'this' value
 * - Side effects: Operations for their effects, not return values
 * - Parameter passing: element, index, and array reference
 * 
 * REAL WORLD EXAMPLES:
 * 1. DOM rendering: Add event listeners to each element
 *    forEach(buttons, (btn) => btn.addEventListener('click', handler))
 * 
 * 2. API requests: Send each item to server
 *    forEach(items, (item) => fetch('/api/items', {body: JSON.stringify(item)}))
 * 
 * 3. Logging/monitoring: Log events with context
 *    forEach(logs, function(log) {
 *      console.log(`[${this.timestamp}] ${log.message}`);
 *    }, {timestamp: new Date()})
 * 
 * 4. Database operations: Save each record
 *    forEach(records, (record) => database.insert(record))
 * 
 * 5. Validation: Collect errors for all fields
 *    let errors = []
 *    forEach(fields, (field) => {
 *      if (!isValid(field)) errors.push(field.name)
 *    })
 * 
 * 6. DOM mutations: Update all elements
 *    forEach(elements, (el) => el.classList.add('active'))
 * 
 * 7. Analytics: Track each user action
 *    forEach(events, (event) => analytics.track(event.type, event.data))
 * 
 * BONUS CHALLENGES:
 * 1. Implement forEach with early exit support (throw custom exception)
 * 2. Create forEachAsync: Handle promises/async callbacks
 * 3. Add breakable version: Return false to exit loop early
 * 4. Implement forEachRight: Iterate in reverse order
 * 5. Add batching: Group items and process in chunks
 * 6. Create filtered forEach: Only execute for items matching predicate
 * 7. Performance: Compare forEach vs for loop vs map with unused result
 * 8. Add concurrent version: Execute multiple callbacks simultaneously
 */

const forEach = (arr, callback, context) => {
  for (let i = 0; i < arr.length; i++) {
    callback.call(context, arr[i], i, arr);
  }
};