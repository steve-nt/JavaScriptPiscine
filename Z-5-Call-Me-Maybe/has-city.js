export function hasCity(country, cities) {
  return function(city) {
    if (cities.includes(city)) {
      return `${city} is a city from ${country}`
    }
    return `${city} is not a city from ${country}`
  }
}

/*
 * HAS-CITY.JS - Curried Predicate with Context Binding
 * 
 * CODE EXPLANATION:
 * - Takes country and cities array
 * - Returns function that checks if a city is in the array
 * - Returns descriptive string about the city's location
 * 
 * CONCEPTS STUDIED:
 * - Closure: Inner function accesses country and cities from outer scope
 * - Currying: Two-stage function application
 * - Predicate function: Returns boolean-like result (string in this case)
 * - Context binding: Function "remembers" country info for repeated queries
 * - Template literals: Creating formatted strings with variables
 * 
 * REAL WORLD EXAMPLES:
 * 1. Validator factory:
 *    const validateUSState = hasCity('USA', ['NY', 'CA', 'TX'])
 *    validateUSState('NY')  // "NY is a city from USA"
 *    validateUSState('XX')  // "XX is not a city from USA"
 * 
 * 2. Permission checker:
 *    const userHasRole = (user, roles) => role => roles.includes(role)
 *    const adminChecker = userHasRole('John', ['admin', 'moderator'])
 *    adminChecker('admin')  // true
 * 
 * 3. Membership verification:
 *    const isMember = (club, members) => person => members.includes(person)
 *    const golfClub = isMember('Pebble Beach', golfers)
 *    golfClub('Tiger Woods')
 * 
 * 4. Feature availability:
 *    const hasFeature = (plan, features) => f => features.includes(f)
 *    const premiumUser = hasFeature('Premium', ['analytics', 'export', 'api'])
 * 
 * BONUS CHALLENGES:
 * 1. Add case-insensitive matching option
 * 2. Create fuzzy matching: Find similar cities (typos)
 * 3. Add distance calculation: How far is city from reference point
 * 4. Implement batch checking: Check multiple cities at once
 * 5. Create reverse lookup: Which country has this city
 */
