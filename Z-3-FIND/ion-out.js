export function ionOut(str) {
  return str.match(/\w+tion\b/g)?.map(word => word.slice(0, -3)) || [];
}

/*
 * EXPLANATION:
 * This function extracts words ending in "tion" and removes the "tion" suffix.
 * 
 * KEY CONCEPTS:
 * - Word Boundaries: \b matches the boundary between a word character and non-word character
 * - Character Classes: \w matches [a-zA-Z0-9_]
 * - Optional Chaining: ?. safely calls map() only if match() returns an array
 * - String.slice(): Removes the last 3 characters from each matched word
 * 
 * HOW IT WORKS:
 * 1. Regex /\w+tion\b/g finds all words ending with "tion"
 * 2. Optional chaining ?.map() prevents errors if no matches exist
 * 3. slice(0, -3) removes the last 3 characters ("ion")
 * 4. Returns empty array if no matches found
 * 
 * REAL-WORLD EXAMPLE:
 * Natural language processing: Extract root words from inflected forms
 * "creation station information" → ["creat", "stat", "informat"]
 * Used in search engines to normalize word variations
 * 
 * BONUS CHALLENGES:
 * 1. Modify to preserve the "t": return words ending in "t" before "tion"
 * 2. Create a function that returns original words + processed words
 * 3. Handle words ending in "-sion" or "-ation" separately
 */
