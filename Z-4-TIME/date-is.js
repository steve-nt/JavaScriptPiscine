function isValid(date) {
  if (date instanceof Date) {
    return !isNaN(date.getTime());
  }
  if (typeof date === 'number') {
    return !isNaN(date) && isFinite(date);
  }
  return false;
}

function isAfter(date1, date2) {
  return date1 > date2;
}

function isBefore(date1, date2) {
  return date2 > date1;
}

function isFuture(date) {
  return isValid(date) && date > new Date();
}

function isPast(date) {
  return isValid(date) && date < new Date();
}

export { isValid, isAfter, isBefore, isFuture, isPast };

/*
 * =============================================================================
 * FUNCTION EXPLANATIONS
 * =============================================================================
 * isValid(date): Checks if input is a valid Date or number. For Date objects,
 *   validates using getTime() (NaN indicates invalid). For numbers, checks
 *   for NaN and infinity. Rejects other types.
 *
 * isAfter(date1, date2): Returns true if date1 > date2 in chronological order.
 *   Uses JavaScript's automatic Date-to-timestamp comparison.
 *
 * isBefore(date1, date2): Returns true if date1 < date2. Note: parameter
 *   order may seem reversed; compares date2 > date1 (same as date1 < date2).
 *
 * isFuture(date): Returns true if the date is in the future (after now).
 *   First validates the input, then compares with current time.
 *
 * isPast(date): Returns true if the date is in the past (before now).
 *   Validates input and compares with current time.
 *
 * =============================================================================
 * CONCEPTS STUDIED
 * =============================================================================
 * 1. Date validation: Distinguishing valid from invalid Date objects
 * 2. Type checking: Testing multiple input types (Date, number, etc.)
 * 3. Temporal comparisons: Using < > operators on Date objects
 * 4. Timestamp conversion: JavaScript auto-converts Date to milliseconds
 * 5. NaN and Infinity checking: Using isNaN() and isFinite()
 * 6. Current time reference: new Date() for real-time comparisons
 *
 * =============================================================================
 * REAL-WORLD EXAMPLES
 * =============================================================================
 * - Form validation: Check if user-entered date is valid before processing
 * - Timeline sorting: Arrange events chronologically using isAfter/isBefore
 * - Deadline tracking: "if (isPast(deadline)) alert('overdue')"
 * - Event filtering: Show only future concerts (isFuture)
 * - Data cleanup: Reject invalid timestamps in database imports
 * - Travel booking: "Can only book flights in the future (isFuture)"
 *
 * =============================================================================
 * BONUS CHALLENGES
 * =============================================================================
 * 1. Add a tolerance parameter: isAfter(d1, d2, toleranceMs)?
 * 2. Create isSameDay(), isSameMonth(), isSameYear()
 * 3. Add isToday() to check if date is today
 * 4. Create aboolean function returning "past" | "now" | "future" status
 * 5. Handle timezone differences: isPast(date, timezone)
 */
