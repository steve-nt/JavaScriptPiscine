function words(str) {
  return str.split(' ')
}

function sentence(arr) {
  return arr.join(' ')
}

function yell(str) {
  return str.toUpperCase()
}

function whisper(str) {
  return '*' + str.toLowerCase() + '*'
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/* 
 * 📚 WHAT YOU LEARNED:
 * - String methods: split(), join(), toUpperCase(), toLowerCase()
 * - charAt() and slice() for string manipulation
 * - Converting between strings and arrays
 * - String concatenation with +
 * - Method chaining for cleaner code
 * 
 * 🎯 PRACTICE MORE:
 * - Create a function that capitalizes every word (title case)
 * - Build a function that reverses a sentence word by word
 * - Make a word counter function
 * - Write a function that removes extra spaces from text
 * 
 * 🌍 REAL-WORLD EXAMPLES:
 * - Text editors: Uppercase/lowercase transformations
 * - Social media: Formatting usernames and display names
 * - Search engines: Normalizing search queries
 * - Form validation: Capitalizing names properly
 * - Chat apps: Text formatting options (bold, italic, etc.)
 * - SEO tools: Creating URL-friendly slugs from titles
 * 
 * 💡 String methods are your Swiss Army knife for text processing! 
 */
