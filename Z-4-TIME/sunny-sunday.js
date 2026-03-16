function sunnySunday(date) {
  const dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  const epoch = new Date('0001-01-01');
  const daysDiff = Math.floor((date - epoch) / (1000 * 60 * 60 * 24));
  
  return dayNames[daysDiff % 6];
}

export { sunnySunday };

/*
 * =============================================================================
 * FUNCTION EXPLANATION
 * =============================================================================
 * sunnySunday() calculates which day of the week a given date falls on,
 * returning a day name from a 6-day cycle (Monday-Saturday, omitting Sunday).
 * It uses modular arithmetic with a reference epoch (year 1) to compute
 * the day of the week without relying on the Date object's built-in methods.
 *
 * =============================================================================
 * CONCEPTS STUDIED
 * =============================================================================
 * 1. Date arithmetic: Computing time differences between dates
 * 2. Modular arithmetic (modulo operator %): Cycling through a repeating pattern
 * 3. Time units conversion: Converting milliseconds to days
 * 4. Day-of-week calculation using epoch-based algorithms
 * 5. Array indexing for cyclic lookups
 *
 * =============================================================================
 * REAL-WORLD EXAMPLES
 * =============================================================================
 * - Calendar applications: Displaying day names for dates
 * - Scheduling systems: Finding which day-of-week a meeting falls on
 * - Work calendars: Determining if a date is a weekday for payroll systems
 * - Religious or cultural observances: Finding appropriate days for events
 *
 * =============================================================================
 * BONUS CHALLENGES
 * =============================================================================
 * 1. Extend the function to use all 7 days of the week (add "Sunday")
 * 2. Modify it to return a number (0-6) instead of day names
 * 3. Create a similar function that works with Julian calendar dates
 * 4. Optimize it to avoid the loop by using a mathematical formula
 * 5. Handle negative years (BC dates) correctly
 */
