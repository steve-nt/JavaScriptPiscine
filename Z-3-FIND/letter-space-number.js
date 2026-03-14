function letterSpaceNumber(str) {
  const matches = str.match(/[a-z] \d(?![a-z\d])/gi);
  return matches || [];
}

/*
 * EXPLANATION:
 * Finds sequences of "letter-space-digit" where the digit is NOT followed by another letter/digit.
 * 
 * KEY CONCEPTS:
 * - Character Classes: [a-z] matches any lowercase letter, \d matches any digit
 * - Negative Lookahead: (?!...) asserts that the pattern is NOT followed by specified chars
 * - Flags: g (global/all matches), i (case-insensitive)
 * - Word Characters: \d is [0-9], \w is [a-zA-Z0-9_]
 * 
 * PATTERN BREAKDOWN: /[a-z] \d(?![a-z\d])/gi
 * - [a-z]     : Matches any letter A-Z (case-insensitive due to i flag)
 * - (space)   : Literal space character
 * - \d        : Matches any digit 0-9
 * - (?![a-z\d]) : Negative lookahead - next character must NOT be a letter or digit
 * - /gi       : Global flag (all matches), case-Insensitive
 * 
 * HOW IT WORKS:
 * "A 1 B" → ["A 1", "B"] (no, only "A 1" matches; "B" has no digit)
 * "A 1B" → [] (no matches; digit followed by letter fails lookahead)
 * "A 1, B 2!" → ["A 1", "B 2"] (both match; followed by punctuation, not letters/digits)
 * "X 5-Y" → ["X 5"] ("Y" is after hyphen, not immediately after digit)
 * 
 * REAL-WORLD EXAMPLE:
 * License plate parsing: Extract vehicle registration patterns
 * "AB12CD AB1 CD12 AB1!" → Match patterns like "AB 1" that appear in registration numbers
 * Document indexing: Find references like "Fig 3" or "Eq 7" that don't run into other text
 * Data validation: Ensure formatted sequences are properly bounded
 * 
 * BONUS CHALLENGES:
 * 1. Modify to capture the letter and digit separately
 * 2. Create a version that matches digit-space-letter instead
 * 3. Match multi-digit sequences: letter followed by space and 2+ digits
 * 4. Find "word boundaries" patterns: ensure isolated occurrences using \b
 */
