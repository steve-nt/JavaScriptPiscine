function isFriday(date) {
  return date.getDay() === 5;
}

function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function isLeapYear(date) {
  const year = date.getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function isLastDayOfMonth(date) {
  const nextDay = new Date(date);
  nextDay.setDate(nextDay.getDate() + 1);
  return nextDay.getDate() === 1;
}

export { isFriday, isWeekend, isLeapYear, isLastDayOfMonth };

/*
 * =============================================================================
 * FUNCTION EXPLANATIONS
 * =============================================================================
 * isFriday(): Returns true if the given date falls on Friday (day 5, where
 *   Sunday=0, Monday=1, etc.). Reference: Rebecca Black's "Friday" song.
 *
 * isWeekend(): Returns true if the date is Saturday (6) or Sunday (0).
 *   Uses OR logic to identify both weekend days.
 *
 * isLeapYear(): Returns true if the given date's year is a leap year using
 *   the standard Gregorian rule: divisible by 4 (except centuries) unless
 *   also divisible by 400.
 *
 * isLastDayOfMonth(): Returns true if tomorrow is the 1st of the next month.
 *   Creates a new date one day in the future and checks if it rolled to day 1.
 *
 * =============================================================================
 * CONCEPTS STUDIED
 * =============================================================================
 * 1. Day-of-week enumeration: JavaScript's getDay() returns 0-6 mapping
 * 2. Boolean logic: Using AND (&&) and OR (||) for conditions
 * 3. Date mutation and comparison: Modifying dates without affecting originals
 * 4. Leap year calculations: Divisibility rules for years
 * 5. Month boundaries: Detecting when setDate() rolls to the next month
 *
 * =============================================================================
 * REAL-WORLD EXAMPLES
 * =============================================================================
 * - HR systems: Filtering payroll dates by "is it Friday?" for weekly runs
 * - Retail: Weekend pricing adjustments ("if isWeekend, apply discount")
 * - Event scheduling: "Don't schedule important meetings on weekends"
 * - Financial systems: Month-end processing ("if isLastDayOfMonth, close books")
 * - Leap year bugs: Software crashes when Feb 29 appears unexpectedly
 *
 * =============================================================================
 * BONUS CHALLENGES
 * =============================================================================
 * 1. Create isMonday(), isTuesday(), etc. for other days
 * 2. Add isWeekday() to identify Monday-Friday
 * 3. Create isMonthStart() (inverse of isLastDayOfMonth)
 * 4. Add locale support: isWeekend in different countries (Middle East has
 *    Fri-Sat weekends, others have different patterns)
 * 5. Create a function that returns the next occurrence of a given day
 */
