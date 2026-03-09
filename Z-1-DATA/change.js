function get(key) {
  return sourceObject[key]
}

function set(key, value) {
  sourceObject[key] = value
  return value
}

/* 
 * 📚 WHAT YOU LEARNED:
 * - Bracket notation for accessing object properties dynamically
 * - Setting object properties programmatically
 * - Functions that modify external state (side effects)
 * - The difference between reading and writing data
 * 
 * 🎯 PRACTICE MORE:
 * - Create a function that deletes a property from an object
 * - Build a simple key-value store with get, set, and delete
 * - Make a function that checks if a key exists before getting it
 * - Create a function that updates nested object properties
 * 
 * 🌍 REAL-WORLD EXAMPLES:
 * - User settings: Getting and setting preferences (theme, language)
 * - Shopping cart: Adding/updating item quantities
 * - Form handling: Updating user input fields dynamically
 * - Configuration management: Reading and writing app settings
 * - LocalStorage API: Browsers use get/set pattern for storing data
 * 
 * 💡 Getter and setter patterns are fundamental in object-oriented programming! 
 */
