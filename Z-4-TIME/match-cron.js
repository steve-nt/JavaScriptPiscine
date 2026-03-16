function matchCron(cron, date) {
  const [minute, hour, day, month, dayOfWeek] = cron.split(' ');
  
  const dateMinute = date.getMinutes();
  const dateHour = date.getHours();
  const dateDay = date.getDate();
  const dateMonth = date.getMonth() + 1;
  const dateDayOfWeek = date.getDay() === 0 ? 7 : date.getDay();
  
  const matchesField = (pattern, value) => {
    if (pattern === '*') return true;
    return parseInt(pattern) === value;
  };
  
  return (
    matchesField(minute, dateMinute) &&
    matchesField(hour, dateHour) &&
    matchesField(day, dateDay) &&
    matchesField(month, dateMonth) &&
    matchesField(dayOfWeek, dateDayOfWeek)
  );
}

export { matchCron };

/*
 * =============================================================================
 * FUNCTION EXPLANATION
 * =============================================================================
 * matchCron() determines if a given date matches a cron schedule pattern.
 * It parses a cron string (5 space-separated fields) and compares each field
 * against the corresponding date component. An asterisk (*) is a wildcard
 * matching any value; specific numbers match only that value.
 * Returns true if all 5 fields match the date.
 *
 * =============================================================================
 * CONCEPTS STUDIED
 * =============================================================================
 * 1. Cron format: Standard Unix task scheduling syntax (minute, hour, day,
 *    month, day-of-week)
 * 2. String parsing: split() to divide the cron string into fields
 * 3. Wildcard pattern matching: Using * as a "match all" token
 * 4. Day-of-week conversion: JavaScript Sunday=0, cron Sunday=7 (special case)
 * 5. Month normalization: JavaScript months 0-11, cron months 1-12
 * 6. Boolean logic: All 5 conditions must be true (AND operation)
 *
 * =============================================================================
 * REAL-WORLD EXAMPLES
 * =============================================================================
 * - Job scheduling: "0 2 * * *" runs daily at 2:00 AM
 * - Backup systems: "0 */6 * * *" runs every 6 hours
 * - Database maintenance: "0 0 * * 0" runs weekly on Sunday at midnight
 * - CI/CD pipelines: Schedule tests to run at specific times
 * - Cron jobs: Linux `crontab` uses identical format for scheduled tasks
 * - Monitoring: Alert if no logs appear in a 5-minute window
 *
 * Example cron patterns:
 *   "0 9 * * 1" = 9:00 AM every Monday
 *   "*/15 * * * *" = Every 15 minutes
 *   "0 0 1 * *" = Midnight on the 1st of each month
 *
 * =============================================================================
 * BONUS CHALLENGES
 * =============================================================================
 * 1. Add support for ranges: "0 9-17 * * *" (9 AM to 5 PM)
 * 2. Add support for lists: "0 9,14,19 * * *" (9 AM, 2 PM, 7 PM)
 * 3. Add support for step values: "*/30 * * * *" (every 30 minutes)
 * 4. Create inverse: given a date, generate possible cron patterns
 * 5. Find next execution time for a given cron pattern
 */
