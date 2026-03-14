export function getURL(dataSet) {
  return dataSet.match(/https?:\/\/[^\s]+/g) || [];
}

export function greedyQuery(dataSet) {
  return dataSet.match(/https?:\/\/[^\s?]*\?[^&\s]+=(?:[^&\s])*&[^&\s]+=(?:[^&\s])*&[^&=\s]+=(?:[^&\s])*(?:&[^&=\s]+=(?:[^&\s])*)*(?=\s|$)/g) || [];
}

export function notSoGreedy(dataSet) {
  return dataSet.match(/https?:\/\/[^\s?]*\?[^&\s]+=(?:[^&\s])*&[^&\s]+=(?:[^&\s])*(?:&[^&=\s]+=(?:[^&\s])*)?(?=\s|$)/g) || [];
}

/*
 * EXPLANATION:
 * Three functions to extract URLs with varying levels of query parameter complexity.
 * 
 * KEY CONCEPTS:
 * - Greedy vs Non-Greedy Quantifiers: * and + are greedy, *? and +? are non-greedy
 * - Character Classes Negation: [^\s] means "any non-whitespace character"
 * - Positive Lookahead: (?=\s|$) asserts position before whitespace or end
 * - Non-Capturing Groups: (?:...) groups without creating a capture group
 * 
 * FUNCTION DETAILS:
 * 
 * getURL(dataSet):
 * - /https?:\/\/[^\s]+/g matches http or https URLs
 * - [^\s]+ greedily captures everything until whitespace
 * - Simple but may capture too much (punctuation, etc.)
 * 
 * greedyQuery(dataSet):
 * - Matches URLs with 3+ query parameters
 * - Counts by number of '&' separators: two '&' = three parameters
 * - (?:&...)*  after third param allows unlimited additional parameters
 * 
 * notSoGreedy(dataSet):
 * - Matches URLs with 2-3 query parameters
 * - (?:&...)?  makes the third parameter optional (0 or 1 occurrence)
 * - Bounded quantifier prevents matching URLs with 4+ parameters
 * 
 * REAL-WORLD EXAMPLE:
 * Web scraper filtering: Extract URLs by complexity
 * - Simple analytics: getURL() finds all tracking URLs
 * - Complex tracking: greedyQuery() finds URLs with many parameters
 * - Moderate tracking: notSoGreedy() filters by parameter count
 * 
 * BONUS CHALLENGES:
 * 1. Add support for URLs with fragments (#) and keep them
 * 2. Create a function that extracts and decodes query parameters
 * 3. Handle URLs without protocol (www.example.com)
 * 4. Filter by specific parameter names (e.g., only URLs with "utm_" params)
 */

