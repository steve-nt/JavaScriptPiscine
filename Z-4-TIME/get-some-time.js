function firstDayWeek(week, year) {
  const y = parseInt(year);
  const yearPadded = String(y).padStart(4, '0');
  
  // Create date differently for year 1 to avoid 2-digit year interpretation
  let jan1;
  if (y <= 100) {
    // Use ISO string format for years <= 100
    jan1 = new Date(`${yearPadded}-01-01`);
  } else {
    jan1 = new Date(y, 0, 1);
  }
  
  const dayOfWeek = jan1.getDay(); // 0 = Sunday, 1 = Monday, etc.
  
  // Calculate days back to Monday from January 1
  const daysBack = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  
  // Get the Monday of the week containing Jan 1
  let monday1 = new Date(jan1);
  monday1.setDate(1 - daysBack);
  
  // Calculate the date for the requested week
  let resultDate = new Date(monday1);
  resultDate.setDate(resultDate.getDate() + (week - 1) * 7);
  
  // If the result is in the previous year, return Jan 1 instead
  if (resultDate.getFullYear() < y) {
    resultDate = new Date(`${yearPadded}-01-01`);
  }
  
  // Format as dd-mm-yyyy (with padding for years <= 100)
  const day = String(resultDate.getDate()).padStart(2, '0');
  const month = String(resultDate.getMonth() + 1).padStart(2, '0');
  const resultYear = resultDate.getFullYear();
  const resultYearStr = String(resultYear).padStart(4, '0');
  
  return `${day}-${month}-${resultYearStr}`;
}

export { firstDayWeek };

/*
 * =============================================================================
 * FUNCTION EXPLANATION
 * =============================================================================
 * firstDayWeek() returns the Monday (first day) of a specified week in a given
 * year, formatted as "dd-mm-yyyy". It calculates which Monday falls at the start
 * of the requested ISO week. Special handling for years ≤ 100 avoids 2-digit
 * year parsing issues. If the calculated date falls in the previous year, it
 * returns January 1st of the requested year instead.
 *
 * =============================================================================
 * CONCEPTS STUDIED
 * =============================================================================
 * 1. ISO week numbering: Week 1 contains Jan 4 (related to ISO 8601 standard)
 * 2. Day-of-week calculation: Finding Monday from January 1st
 * 3. Date offset calculation: Using setDate() to add/subtract days
 * 4. Year boundary handling: Detecting when calculations cross year borders
 * 5. String formatting: Padding and formatting dates as dd-mm-yyyy
 * 6. Date arithmetic: Computing dates relative to a reference point
 *
 * =============================================================================
 * REAL-WORLD EXAMPLES
 * =============================================================================
 * - Payroll systems: "All employees in week 15 get paid on the Monday"
 * - Project management: "Sprint 3 starts on the Monday of week 12"
 * - Financial reporting: ISO weeks align with standard business reporting
 * - Scheduling: "Meeting is every Monday of week N"
 * - Calendar systems: ISO 8601 date format uses week numbers for scheduling
 * - Manufacturing: "Production batch for week 23"
 *
 * ISO Week numbering note:
 *   Week 1 = the week with January 4 (or the first Thursday)
 *   Weeks are Mon-Sun in ISO standard
 *   Some years have 53 weeks, most have 52
 *
 * =============================================================================
 * BONUS CHALLENGES
 * =============================================================================
 * 1. Return an object with start (Monday) and end (Sunday) of the week
 * 2. Create inverse: given a date, return its ISO week number
 * 3. Add locale parameter: Different cultures define week differently
 * 4. Create lastDayWeek() for the Sunday of a given week
 * 5. Generate an entire year's week schedule in one call
 */
