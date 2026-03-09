const is = {}

is.num = function(value) {
  return typeof value === 'number'
}

is.nan = function(value) {
  return Number.isNaN(value)
}

is.str = function(value) {
  return typeof value === 'string'
}

is.bool = function(value) {
  return typeof value === 'boolean'
}

is.undef = function(value) {
  return value === undefined
}

is.def = function(value) {
  return value !== undefined
}

is.arr = function(value) {
  return Array.isArray(value)
}

is.obj = function(value) {
  return typeof value === 'object' && !Array.isArray(value) && value !== null
}

is.fun = function(value) {
  return typeof value === 'function'
}

is.truthy = function(value) {
  return !!value
}

is.falsy = function(value) {
  return !value
}

/* 
 * 📚 WHAT YOU LEARNED:
 * - typeof operator for type checking
 * - JavaScript's type system (primitives vs objects)
 * - Special cases: NaN, null, undefined
 * - Array.isArray() for array detection
 * - Double negation (!!) to convert to boolean
 * - Organizing related functions in an object namespace
 * - The quirk: typeof null === 'object'
 * 
 * 🎯 PRACTICE MORE:
 * - Create a function that validates email format
 * - Build a form validator using these type checks
 * - Make a function that deeply checks nested object types
 * - Write a safe JSON parser that checks types before parsing
 * 
 * 🌍 REAL-WORLD EXAMPLES:
 * - Form validation: Checking if inputs are the correct type
 * - API validation: Ensuring server responses match expected format
 * - Defensive programming: Validating function arguments
 * - TypeScript alternative: Runtime type checking for JavaScript
 * - Database queries: Validating data before insertion
 * - Unit testing: Asserting correct types in test cases
 * 
 * 💡 Type checking prevents bugs and makes your code more robust! 
 */
