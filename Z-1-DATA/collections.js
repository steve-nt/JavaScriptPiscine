function arrToSet(arr) {
  return new Set(arr)
}

function arrToStr(arr) {
  return arr.join('')
}

function setToArr(set) {
  return Array.from(set)
}

function setToStr(set) {
  return Array.from(set).join('')
}

function strToArr(str) {
  return Array.from(str)
}

function strToSet(str) {
  return new Set(str)
}

function mapToObj(map) {
  return Object.fromEntries(map)
}

function objToArr(obj) {
  return Object.values(obj)
}

function objToMap(obj) {
  return new Map(Object.entries(obj))
}

function arrToObj(arr) {
  return { ...arr }
}

function strToObj(str) {
  return { ...str }
}

function superTypeOf(value) {
  if (value === null) return 'null'
  if (value === undefined) return 'undefined'
  
  const type = Object.prototype.toString.call(value).slice(8, -1)
  return type
}

/* 
 * 📚 WHAT YOU LEARNED:
 * - Data structure conversions between Array, Set, Map, Object, and String
 * - Set: Unique value collections (automatic duplicate removal)
 * - Map: Key-value pairs with any type of key
 * - Array.from(): Converting array-like structures to arrays
 * - Object.entries(): Converting objects to [key, value] arrays
 * - Object.fromEntries(): Converting [key, value] arrays to objects
 * - Object.values(): Extracting only values from objects
 * - Spread operator (...): Expanding iterables
 * - Advanced type detection with Object.prototype.toString
 * 
 * 🎯 PRACTICE MORE:
 * - Remove duplicates from an array using Set
 * - Build a frequency counter using Map
 * - Create a function that merges two objects
 * - Implement a cache system using Map
 * - Write a deep type checker for nested structures
 * 
 * 🌍 REAL-WORLD EXAMPLES:
 * - Sets: Storing unique user IDs, removing duplicate tags
 * - Maps: Caching API responses, storing user sessions
 * - Type detection: Form validation, API response handling
 * - Data transformation: Converting API data formats, preparing data for charts
 * - Database queries: Converting rows to objects, filtering unique records
 * 
 * 💡 Mastering data transformations makes you a versatile developer! 
 */
