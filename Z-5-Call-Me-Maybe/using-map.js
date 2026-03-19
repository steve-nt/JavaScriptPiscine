// Extract city names from array of objects
const citiesOnly = (arr) => arr.map((obj) => obj.city);

// Capitalize first letter of each word in state names
const upperCasingStates = (arr) =>
  arr.map((state) =>
    state
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ')
  );

// Convert fahrenheit to celsius (rounded down) and format as string
const fahrenheitToCelsius = (arr) =>
  arr.map((temp) => {
    const fahrenheit = parseFloat(temp);
    const celsius = Math.floor((fahrenheit - 32) * (5 / 9));
    return `${celsius}°C`;
  });

// Remove spaces from temperature strings while preserving object structure
const trimTemp = (arr) =>
  arr.map((obj) => ({
    ...obj,
    temperature: obj.temperature.replace(/\s/g, ''),
  }));

// Format weather data into readable forecast strings
const tempForecasts = (arr) =>
  arr.map((obj) => {
    const fahrenheit = parseFloat(obj.temperature);
    const celsius = Math.floor((fahrenheit - 32) * (5 / 9));
    const capitalizedState = obj.state
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');
    return `${celsius}°Celsius in ${obj.city}, ${capitalizedState}`;
  });

/*
 * USING-MAP.JS - Practical Map Applications
 * 
 * CODE EXPLANATION:
 * - citiesOnly: Extract city property from objects
 * - upperCasingStates: Capitalize first letter of each word (title case)
 * - fahrenheitToCelsius: Convert temps and format with units
 * - trimTemp: Remove spaces from temperature strings
 * - tempForecasts: Complex transformation combining multiple conversions
 * 
 * CONCEPTS STUDIED:
 * - Data extraction: Picking specific fields from objects
 * - String manipulation: split(), slice(), toUpperCase(), join()
 * - Type conversion: parseFloat() to handle numeric strings
 * - Math operations: Math.floor() for rounding
 * - Object destructuring and spreading: Updating object properties
 * - Template literals: Creating formatted output strings
 * - Transformation pipelines: Chaining multiple operations
 * 
 * REAL WORLD EXAMPLES:
 * 1. API response formatting: Extract just needed fields
 *    users.map(u => ({id: u.id, name: u.firstName + ' ' + u.lastName}))
 * 
 * 2. Data normalization: Convert units/formats
 *    temps.map(t => ({celsius: (t.fahrenheit - 32) * 5/9, time: t.timestamp}))
 * 
 * 3. Display preparation: Format data for UI rendering
 *    products.map(p => ({
 *      title: p.name.toUpperCase(),
 *      price: `$${p.cost.toFixed(2)}`,
 *      image: p.imageUrl
 *    }))
 * 
 * 4. CSV generation: Transform objects to CSV rows
 *    data.map(row => [row.id, row.name, row.date].join(','))
 * 
 * 5. Report generation: Build human-readable output
 *    sales.map(s => `${s.date}: ${s.customer} bought ${s.item} for ${s.price}`)
 * 
 * 6. Logging/monitoring: Extract relevant information
 *    logs.map(l => ({timestamp: l.t, level: l.lvl, msg: l.message}))
 * 
 * BONUS CHALLENGES:
 * 1. Create a compose helper: Combine multiple map operations
 * 2. Add async mapping: mapAsync for promises
 * 3. Implement indexed mapping: Include array position in output
 * 4. Create conditional mapping: Different transforms based on conditions
 * 5. Add memoization: Cache transformation results
 * 6. Performance test: Compare map vs manual loops
 * 7. Create mapFilter: Combine mapping and filtering in one pass
 */
