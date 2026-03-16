function addWeek(date) {
  const dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'secondMonday',
    'secondTuesday',
    'secondWednesday',
    'secondThursday',
    'secondFriday',
    'secondSaturday',
    'secondSunday'
  ];

  const epoch = new Date('0001-01-01');
  const daysDiff = Math.floor((date - epoch) / (1000 * 60 * 60 * 24));
  
  return dayNames[daysDiff % 14];
}

function timeTravel({ date, hour, minute, second }) {
  const newDate = new Date(date);
  newDate.setHours(hour, minute, second);
  return newDate;
}

export { addWeek, timeTravel };

/*
 * =============================================================================
 * FUNCTION EXPLANATIONS
 * =============================================================================
 * addWeek(date): Returns the name of the day from a 14-day cycle (Monday-
 *   Sunday, then secondMonday-secondSunday). Uses modulo 14 with epoch-based
 *   day counting. Named "addWeek" because it doubles the normal 7-day cycle.
 *
 * timeTravel(options): Creates a new Date with modified time components.
 *   Takes an object with date, hour, minute, second and returns a new Date
 *   with those time values applied while keeping the date the same.
 *
 * =============================================================================
 * CONCEPTS STUDIED
 * =============================================================================
 * 1. 14-day cycle: Doubling the standard 7-day week for extended patterns
 * 2. Modular arithmetic: Using % operator to cycle through an array
 * 3. Epoch calculations: Days since reference date (0001-01-01)
 * 4. Destructuring: Extracting properties from object parameters
 * 5. Date mutation: setHours() to change time components
 * 6. Date copying: Creating new Date to avoid mutating the original
 * 7. Time component replacement: Changing hours, minutes, seconds together
 *
 * =============================================================================
 * REAL-WORLD EXAMPLES
 * =============================================================================
 * addWeek():
 *   - Bi-weekly schedules: "Team A works week 1-7, Team B works week 8-14"
 *   - Rotating shifts: "Each team rotates every 14 days"
 *   - Alternating patterns: "Maintenance happens on secondMonday of each cycle"
 *   - Calendar systems: Some cultures use 14-day (bi-weekly) cycles
 *
 * timeTravel():
 *   - Scheduling: "Keep the same date but change to 9:00 AM"
 *   - Appointment setting: "Reschedule to the same day at a different time"
 *   - Data processing: "Convert all times to standard 00:00:00"
 *   - Timezone normalization: Setting specific time for cross-timezone events
 *   - Report generation: "Generate reports ending at 23:59:59 each day"
 *
 * =============================================================================
 * BONUS CHALLENGES
 * =============================================================================
 * 1. Extend addWeek to support 21-day, 28-day, or custom cycles
 * 2. Create inverse: given day name, find all dates with that pattern
 * 3. Add timezone support to timeTravel()
 * 4. Create a nextOccurrence() to find next "secondMonday"
 * 5. Add validation to timeTravel() for invalid hour/minute/second values
 */
