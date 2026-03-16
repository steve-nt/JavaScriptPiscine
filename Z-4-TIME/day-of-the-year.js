function dayOfTheYear(date) {
  const year = date.getFullYear();
  let jan1;
  
  // For early years, use ISO string format to avoid 2-digit year interpretation
  if (year <= 100) {
    const yearStr = String(year).padStart(4, '0');
    jan1 = new Date(`${yearStr}-01-01`);
  } else {
    jan1 = new Date(year, 0, 1);
  }
  
  const diff = date - jan1;
  return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
}

export { dayOfTheYear };

/*
 * =============================================================================
 * FUNCTION EXPLANATION
 * =============================================================================
 * dayOfTheYear() returns which day number of the year a given date is (1-366).
 * It calculates the difference in milliseconds from January 1st of the same year,
 * then converts to days. Special handling for years ≤ 100 prevents 2-digit
 * year interpretation issues in JavaScript's Date parser.
 *
 * =============================================================================
 * CONCEPTS STUDIED
 * =============================================================================
 * 1. Date subtraction: Computing time difference between two Date objects
 * 2. Millisecond-to-day conversion: 1000 * 60 * 60 * 24 = 86,400,000 ms/day
 * 3. Leap year considerations: Affects whether day 365 or 366 is the last day
 * 4. Year boundary handling: Creating Jan 1st for any given year
 * 5. ISO string formatting: Using YYYY-MM-DD format for date parsing safety
 *
 * =============================================================================
 * REAL-WORLD EXAMPLES
 * =============================================================================
 * - Weather analysis: "Day 156 of the year had record temperatures"
 * - Agricultural systems: Determining growing season progress (Day N out of 365)
 * - Fiscal calendars: "We're on day 247 of our financial year"
 * - Tax systems: Tracking "day of year" for interest calculations
 * - Sports schedules: Determining game ordinal positions in a season
 *
 * =============================================================================
 * BONUS CHALLENGES
 * =============================================================================
 * 1. Convert to return the day number as a 3-digit string with padding
 * 2. Create the inverse: given a year and day number, return the Date
 * 3. Handle edge cases for leap year transitions (Feb 28/29)
 * 4. Optimize for performance with large datasets of dates
 * 5. Create a function that returns day of year for multiple timezones
 */
