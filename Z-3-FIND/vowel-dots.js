const vowels = /[aeiou]/gi;

function vowelDots(str) {
  return str.replace(vowels, '$&.');
}

/*
 * EXPLANATION:
 * Replaces every vowel with itself followed by a dot using a backreference.
 * 
 * KEY CONCEPTS:
 * - Character Classes: [aeiou] matches any vowel
 * - String.replace(): Replaces matched patterns with replacement string
 * - Backreference ($&): Refers to the entire matched substring in replacement
 * - Special Replacement Patterns:
 *   $& = matched substring
 *   $` = text before match
 *   $' = text after match
 *   $1, $2... = capture groups
 * - Flags: g (global/all), i (case-insensitive)
 * 
 * HOW IT WORKS:
 * 1. Regex /[aeiou]/gi finds all vowels (case-insensitive)
 * 2. For each match, replace() calls the replacement pattern: '$&.'
 * 3. $& is the matched vowel, so "a" becomes "a."
 * 4. Results in: "hello" → "h.e.llo"
 * 
 * DETAILED EXAMPLES:
 * "hello" → "h.e.llo" (e and o replaced)
 * "HELLO" → "H.E.LLO" (E and O replaced, case preserved)
 * "aeiou" → "a.e.i.o.u." (all vowels replaced)
 * "xyz" → "xyz" (no vowels, unchanged)
 * 
 * REAL-WORLD EXAMPLE:
 * Text masking: Obfuscate vowels in sensitive data
 * "john.doe@example.com" → "j.ohn.d.o.e.@.e.x.a.mple..c.om"
 * Used for: privacy (obscure names), accessibility (visual emphasis),
 * password obfuscation, text transformation for encoding/decoding
 * 
 * ADVANCED USAGE:
 * Replace with position info: replace(vowels, (match) => match + match.charCodeAt(0))
 * → "hello" → "he101llo111"
 * 
 * BONUS CHALLENGES:
 * 1. Add numbers after each vowel (e1, a2, etc.) based on position
 * 2. Create a reverse function that removes the dots after vowels
 * 3. Replace consonants instead, or alternate vowels/consonants with different symbols
 * 4. Count total replacements and return {text, replacements: n}
 * 5. Make it case-sensitive - uppercase vowels get DIFFERENT dots (e.g., E..)
 */
