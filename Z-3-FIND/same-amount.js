export function sameAmount(str, regex1, regex2) {
  const matches1 = (str.match(regex1.global ? regex1 : new RegExp(regex1.source, regex1.flags + 'g')) || []).length;
  const matches2 = (str.match(regex2.global ? regex2 : new RegExp(regex2.source, regex2.flags + 'g')) || []).length;
  return matches1 === matches2;
}

/*
 * EXPLANATION:
 * This function compares how many times two regular expressions match within a string.
 * 
 * KEY CONCEPTS:
 * - Regular Expression Flags: The 'g' (global) flag finds all matches, not just the first
 * - Ternary Operator: Used to check if a regex already has the global flag
 * - String.match(): Returns an array of all matches, or null if no matches
 * 
 * HOW IT WORKS:
 * 1. Ensures both regexes have the 'g' flag by creating new RegExp if needed
 * 2. Uses match() to get all matches for each regex
 * 3. Counts the length of each match array
 * 4. Returns true if counts are equal, false otherwise
 * 
 * REAL-WORLD EXAMPLE:
 * Spam detection: sameAmount(emailText, /viagra/gi, /casino/gi)
 * Checks if an email mentions suspicious words equally often
 * 
 * BONUS CHALLENGES:
 * 1. Create a function that returns which regex matched more
 * 2. Add a parameter to check if matches are within a specific distance
 * 3. Extend to work with 3+ regexes using variadic arguments
 */
