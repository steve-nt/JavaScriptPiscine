function countLeapYears(date) {
  const year = date.getFullYear();
  let count = 0;
  
  for (let y = 1; y < year; y++) {
    if ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) {
      count++;
    }
  }
  
  return count;
}

export { countLeapYears };

/*
 * =============================================================================
 * FUNCTION EXPLANATION
 * =============================================================================
 * countLeapYears() counts how many leap years have occurred from year 1 up to
 * (but not including) the given date's year. A leap year occurs every 4 years,
 * except for century years (divisible by 100), unless also divisible by 400.
 * The function iterates through each year and applies the leap year rules.
 *
 * =============================================================================
 * CONCEPTS STUDIED
 * =============================================================================
 * 1. Leap year logic: (divisible by 4 AND not by 100) OR (divisible by 400)
 * 2. Modulo operator: Using % to check divisibility
 * 3. Gregorian calendar: The modern calendar system's leap year rules
 * 4. Loop iteration: Counting occurrences matching a condition
 * 5. Historical calendar context: Why leap years are necessary
 *
 * =============================================================================
 * REAL-WORLD EXAMPLES
 * =============================================================================
 * - Calendar systems: Leap day (Feb 29) appears only in leap years
 * - Database timestamps: Ensuring correct duration calculations
 * - Business analytics: Calculating "average events per year" accounting
 *   for leap years in the dataset
 * - Astronomy: Keeping calendar aligned with Earth's actual orbit (~365.25 days)
 * - Birthday celebrations: Handling leap day birthdays (famous people born
 *   Feb 29: motivational speakers, athletes, authors)
 *
 * =============================================================================
 * BONUS CHALLENGES
 * =============================================================================
 * 1. Optimize the algorithm: Use a mathematical formula instead of a loop
 * 2. Handle dates in the Julian calendar (different leap year rules)
 * 3. Return an array of all leap years up to the given year
 * 4. Create a function to check if a specific year is a leap year
 * 5. Calculate days lost/gained due to leap year adjustments over time
 */
