function dogYears(planet, ageInSeconds) {
  const earthYearInSeconds = 31557600
  const orbitalPeriods = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  }
  
  const earthYears = ageInSeconds / earthYearInSeconds
  const planetYears = earthYears / orbitalPeriods[planet]
  const dogAge = planetYears * 7
  
  return Math.round(dogAge * 100) / 100
}

/* 
 * 📚 WHAT YOU LEARNED:
 * - Objects as lookup tables (data dictionaries)
 * - Multi-step calculations with intermediate variables
 * - Rounding numbers to specific decimal places
 * - Converting between different units (seconds to years)
 * - Using constants for readability and maintainability
 * - Math.round() for number precision
 * 
 * 🎯 PRACTICE MORE:
 * - Create a temperature converter (Celsius, Fahrenheit, Kelvin)
 * - Build a currency exchange calculator
 * - Make a time zone converter
 * - Write a unit converter (meters, feet, miles, etc.)
 * 
 * 🌍 REAL-WORLD EXAMPLES:
 * - Space exploration apps: Calculating time on different planets
 * - Fitness trackers: Converting steps to distance or calories
 * - Finance apps: Converting currencies with exchange rates
 * - Recipe converters: Scaling ingredients for different servings
 * - Age calculators: Converting between different time units
 * 
 * 💡 Breaking complex problems into smaller steps makes them easier to solve! 
 */
