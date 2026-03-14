const normal = /hi/;

const begin = /^hi/;

const end = /hi$/;

const beginEnd = /^hi$/;

/*
 * EXPLANATION:
 * Demonstrates regex anchors that match at specific positions in a string.
 * 
 * KEY CONCEPTS:
 * - Anchors: ^ and $ specify position constraints, not characters
 * - ^ (caret): Matches at start of string (or line in multiline mode)
 * - $ (dollar): Matches at end of string (or line in multiline mode)
 * - No anchor: Pattern can match anywhere in the string
 * 
 * PATTERN BREAKDOWN:
 * 
 * normal = /hi/:
 * - Matches "hi" anywhere in the string
 * - "hi there", "say hi", "this" → all match "hi"
 * 
 * begin = /^hi/:
 * - Matches "hi" only at the START of the string
 * - "hi there" → matches, "say hi" → no match
 * 
 * end = /hi$/:
 * - Matches "hi" only at the END of the string
 * - "say hi" → matches, "hi there" → no match
 * 
 * beginEnd = /^hi$/:
 * - Matches ONLY if the entire string is exactly "hi"
 * - "hi" → matches, "hi there" → no match, "say hi" → no match
 * 
 * REAL-WORLD EXAMPLE:
 * Form validation: Ensure input meets exact requirements
 * - Username validation: /^[a-z0-9_]{3,20}$/ (only alphanumeric, underscore, 3-20 chars)
 * - Email domain check: /^.*@example\.com$/ (must end with @example.com)
 * - Exact match: /^admin$/ (must be exactly "admin", nothing more)
 * - Start detection: /^Error:/ (log filtering for errors)
 * 
 * BONUS CHALLENGES:
 * 1. Write a multiline regex that matches "hi" at start of lines: /^hi/m
 * 2. Create patterns for: start with uppercase letter, end with digit
 * 3. Validate domain format: /^([a-z0-9]+\.)*[a-z0-9]+\.[a-z]{2,}$/i
 * 4. Check if string contains ONLY the pattern (combine ^ and $)
 */
