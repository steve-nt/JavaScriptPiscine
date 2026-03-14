export function groupPrice(str) {
  const regex = /[A-Za-z$]+(\d+)\.(\d+)/g;
  const matches = Array.from(str.matchAll(regex));
  return matches.map(match => [match[0], match[1], match[2]]);
}

/*
 * EXPLANATION:
 * Extracts prices from a string and returns structured data with currency, integer, and decimal parts.
 * 
 * KEY CONCEPTS:
 * - Capturing Groups: Parentheses () capture substrings for later extraction
 * - matchAll() vs match(): matchAll returns all matches with capture group details
 * - Array.from(): Converts iterator to array
 * - Character Classes: [A-Za-z$]+ matches currency symbols or codes
 * 
 * HOW IT WORKS:
 * 1. Regex /[A-Za-z$]+(\d+)\.(\d+)/g searches for patterns:
 *    - [A-Za-z$]+ : Currency letters or dollar sign (at least 1)
 *    - (\d+) : Capture group 1 - integer part (1+ digits)
 *    - \. : Literal dot
 *    - (\d+) : Capture group 2 - decimal part (1+ digits)
 * 
 * 2. matchAll() returns match objects with:
 *    - match[0] : Full match (e.g., "USD12.31")
 *    - match[1] : Capture group 1 (e.g., "12")
 *    - match[2] : Capture group 2 (e.g., "31")
 * 
 * 3. Array.from() converts iterator to array, map() extracts [full, int, dec]
 * 
 * REAL-WORLD EXAMPLE:
 * E-commerce product scraper: Extract prices from text
 * Input: "Buy now USD12.99 or EUR15.50"
 * Output: [["USD12.99", "12", "99"], ["EUR15.50", "15", "50"]]
 * Used for price comparison sites, currency conversion, inventory management
 * 
 * BONUS CHALLENGES:
 * 1. Add validation to reject prices starting with 0 (leading zeros)
 * 2. Return objects instead: {currency, integer, decimal, total: number}
 * 3. Support different price formats: $12.99, 12,99 (European), £12.99p
 * 4. Sum all prices and convert to a target currency
 */

