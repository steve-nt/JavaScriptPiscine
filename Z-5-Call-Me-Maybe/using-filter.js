// Filter states with name length less than 7 characters
const filterShortStateName = (arr) => arr.filter((state) => state.length < 7);

// Filter strings that start with a vowel
const filterStartVowel = (arr) =>
  arr.filter((str) => /^[aeiou]/i.test(str));

// Filter strings with at least 5 vowels
const filter5Vowels = (arr) =>
  arr.filter((str) => {
    const vowels = str.match(/[aeiou]/gi);
    return vowels && vowels.length >= 5;
  });

// Filter strings with only one distinct vowel
const filter1DistinctVowel = (arr) =>
  arr.filter((str) => {
    const vowels = new Set(str.toLowerCase().match(/[aeiou]/g));
    return vowels.size === 1;
  });

// Filter objects by multiple conditions
const multiFilter = (arr) =>
  arr.filter(
    (obj) =>
      obj.capital.length >= 8 &&
      !/^[aeiou]/i.test(obj.name) &&
      /[aeiou]/i.test(obj.tag) &&
      obj.region !== 'South'
  );

/*
 * USING-FILTER.JS - Practical Filter Applications
 * 
 * CODE EXPLANATION:
 * - filterShortStateName: Keeps states with name length < 7
 * - filterStartVowel: Keeps strings starting with vowels
 * - filter5Vowels: Keeps strings containing 5+ vowels
 * - filter1DistinctVowel: Keeps strings with only one unique vowel
 * - multiFilter: Complex filtering with AND logic (&&)
 * 
 * CONCEPTS STUDIED:
 * - Regular expressions: Pattern matching for vowels and string validation
 * - Set data structure: Counting distinct vowels efficiently
 * - Complex predicates: Combining multiple conditions with AND/OR
 * - String methods: match(), length, toLowerCase()
 * - Case-insensitive matching: /i flag in regex
 * - Object property validation: Filtering objects by multiple fields
 * 
 * REAL WORLD EXAMPLES:
 * 1. Data validation: filterStartVowel could validate IDs that follow naming rules
 * 2. Search filters: Multi-condition filtering like e-commerce product filters
 *    - Price range, category, ratings, availability all checked
 * 3. User database queries:
 *    filter(users, u => u.age >= 18 && u.verified && u.country === 'US')
 * 4. Content moderation:
 *    filter(posts, p => !p.isFlagged && p.score > 0 && p.approved)
 * 5. Data cleaning:
 *    filter(records, r => r.email && r.phone && r.verified)
 * 6. Geographic filtering:
 *    filter(restaurants, r => r.rating >= 4 && r.distance < 5 && r.type === 'vegan')
 * 
 * BONUS CHALLENGES:
 * 1. Convert multiFilter to a composable filter builder function
 * 2. Add performance optimization: Check cheapest conditions first
 * 3. Create a where() helper for cleaner multi-condition syntax
 * 4. Implement filter composition: Combine multiple filters
 * 5. Add logging/debugging: Track which conditions are being checked
 * 6. Create reverse versions: all conditions must be false (none of these)
 */
