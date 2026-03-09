function first(value) {
  return value[0]
}

function last(value) {
  return value[value.length - 1]
}

function kiss(value) {
  return [last(value), first(value)]
}

/* 
 * 📚 WHAT YOU LEARNED:
 * - Bracket notation for accessing array/string elements
 * - Zero-based indexing (first element is at index 0)
 * - Using .length property to find the last element
 * - Function composition (using functions inside other functions)
 * - Arrays and strings both support bracket notation
 * 
 * 🎯 PRACTICE MORE:
 * - Create a function that gets the middle element(s) of an array
 * - Build a function that returns the second and second-to-last elements
 * - Make a function that swaps first and last elements
 * - Write a palindrome checker using first and last
 * 
 * 🌍 REAL-WORLD EXAMPLES:
 * - Playlist apps: Getting first/last song
 * - Chat applications: Showing most recent message (last)
 * - Photo galleries: First/last image navigation
 * - E-commerce: First/last items in cart
 * - Analytics: Comparing start vs end values in datasets
 * 
 * 💡 Understanding array indexing is essential for data manipulation! 
 */
