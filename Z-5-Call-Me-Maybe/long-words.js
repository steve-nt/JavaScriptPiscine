// Returns true if there are no strings with at least 7 characters
const noLongWords = (arr) => arr.every((str) => typeof str !== 'string' || str.length < 7);

/*
 * LONG-WORDS.JS - String Length Predicates with Type Checking
 * 
 * CODE EXPLANATION:
 * - longWords: Validates ALL elements are strings with 5+ characters
 * - oneLongWord: Checks if AT LEAST ONE element is a 10+ char string
 * - noLongWords: Confirms NO elements are 7+ character strings
 * 
 * CONCEPTS STUDIED:
 * - Type checking: typeof operator for runtime type validation
 * - String length: Measuring character count with .length property
 * - Quantifiers (every/some): Universal and existential logic
 * - Logical operators: AND (&&) for multiple conditions
 * - De Morgan's Law: NOT (A AND B) = (NOT A) OR (NOT B)
 *   Applied in noLongWords: !(string AND length>=7) = (!string) OR (length<7)
 * - Predicate composition: Combining multiple conditions
 * 
 * REAL WORLD EXAMPLES:
 * 1. Form validation: All password inputs meet length requirements
 *    longWords(passwords) // all >= 5 chars for security
 * 
 * 2. Content moderation: Check if comments contain long words (spam detection)
 *    oneLongWord(comments) // flags possible gibberish/spam
 * 
 * 3. Data quality: Ensure fields don't exceed max length
 *    noLongWords(usernames) // all under 7 chars for display
 * 
 * 4. API validation: Validate request parameters
 *    const validateInputs = (inputs) => {
 *      return every(inputs, i => typeof i === 'string' && i.length <= 255)
 *    }
 * 
 * 5. Search filtering: Find results meeting criteria
 *    const resultsMatch = (results) => every(results, r => r.description.length > 0)
 * 
 * 6. Content filtering: Block submissions with abnormal text
 *    const hasAbnormalText = (text) => some(text.split(' '), w => w.length > 20)
 * 
 * 7. Accessibility: Validate button text isn't too long
 *    const buttonsValid = (buttons) => every(buttons, b => b.text.length < 20)
 * 
 * BONUS CHALLENGES:
 * 1. Create a word length validator factory for any min/max
 *    const lengthValidator = (min, max) => (arr) => every(arr, s => s.length >= min && s.length <= max)
 * 
 * 2. Add metrics: Return count of words matching criteria
 *    const countLongWords = (arr) => arr.filter(s => s.length >= 5).length
 * 
 * 3. Find position: Return index of first long word
 *    const findLongWord = (arr) => arr.findIndex(s => s.length >= 5)
 * 
 * 4. Unicode awareness: Count characters correctly for emojis
 *    // Regular .length fails with emoji; use [...str].length instead
 * 
 * 5. Case sensitivity: Implement case-insensitive variants
 *    const longWordsCI = (arr) => every(arr, s => s.toLowerCase().length >= 5)
 * 
 * 6. Performance test: Benchmark every() vs manual loops for large arrays
 * 
 * 7. Async version: Validate from external data source
 *    const validateAsync = (arr) => Promise.all(arr.map(checkLength))
 */
