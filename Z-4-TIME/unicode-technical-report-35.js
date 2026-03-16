function format(date, formatStr) {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const monthAbbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayAbbr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const year = Math.abs(date.getFullYear());
  const month = date.getMonth();
  const day = date.getDate();
  const hour24 = date.getHours();
  const hour12 = hour24 % 12 || 12;
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const dayOfWeek = date.getDay();
  const era = date.getFullYear() > 0 ? 'AD' : 'BC';

  const pad = (n) => String(n).padStart(2, '0');

  let result = '';
  let i = 0;

  while (i < formatStr.length) {
    // Try to match 4-letter patterns first
    if (i + 4 <= formatStr.length) {
      const four = formatStr.substr(i, 4);
      if (four === 'GGGG') {
        result += era === 'AD' ? 'Anno Domini' : 'Before Christ';
        i += 4;
        continue;
      }
      if (four === 'MMMM') {
        result += monthNames[month];
        i += 4;
        continue;
      }
      if (four === 'EEEE') {
        result += dayNames[dayOfWeek];
        i += 4;
        continue;
      }
      if (four === 'yyyy') {
        result += String(year).padStart(4, '0');
        i += 4;
        continue;
      }
    }

    // Try to match 3-letter patterns
    if (i + 3 <= formatStr.length) {
      const three = formatStr.substr(i, 3);
      if (three === 'MMM') {
        result += monthAbbr[month];
        i += 3;
        continue;
      }
      if (three === 'hh' || three === 'mm' || three === 'ss') {
        // Will handle these with 2-letter check below
      }
    }

    // Try to match 2-letter patterns
    if (i + 2 <= formatStr.length) {
      const two = formatStr.substr(i, 2);
      if (two === 'MM') {
        result += pad(month + 1);
        i += 2;
        continue;
      }
      if (two === 'dd') {
        result += pad(day);
        i += 2;
        continue;
      }
      if (two === 'HH') {
        result += pad(hour24);
        i += 2;
        continue;
      }
      if (two === 'hh') {
        result += pad(hour12);
        i += 2;
        continue;
      }
      if (two === 'mm') {
        result += pad(minute);
        i += 2;
        continue;
      }
      if (two === 'ss') {
        result += pad(second);
        i += 2;
        continue;
      }
    }

    // Try to match 1-letter patterns
    const char = formatStr[i];
    if (char === 'G') {
      result += era;
      i++;
      continue;
    }
    if (char === 'M') {
      result += String(month + 1);
      i++;
      continue;
    }
    if (char === 'E') {
      result += dayAbbr[dayOfWeek];
      i++;
      continue;
    }
    if (char === 'y') {
      result += String(year);
      i++;
      continue;
    }
    if (char === 'd') {
      result += String(day);
      i++;
      continue;
    }
    if (char === 'H') {
      result += String(hour24);
      i++;
      continue;
    }
    if (char === 'h') {
      result += String(hour12);
      i++;
      continue;
    }
    if (char === 'm') {
      result += String(minute);
      i++;
      continue;
    }
    if (char === 's') {
      result += String(second);
      i++;
      continue;
    }
    if (char === 'a') {
      result += hour24 < 12 ? 'AM' : 'PM';
      i++;
      continue;
    }

    // Not a format token, just add the character
    result += char;
    i++;
  }

  return result;
}

export { format };

/*
 * =============================================================================
 * FUNCTION EXPLANATION
 * =============================================================================
 * format() converts a Date object to a formatted string using a format pattern
 * similar to Unicode CLDR standards (Unicode Technical Report #35).
 * It parses the format string character-by-character, matching patterns of
 * 1-4 consecutive characters to format tokens (yyyy, MMMM, dd, HH, ss, etc.)
 * and replacing them with appropriate date components. Non-matching characters
 * pass through unchanged (e.g., hyphens, colons, spaces).
 *
 * Pattern matching hierarchy:
 *   1. Try 4-letter patterns (GGGG, MMMM, EEEE, yyyy)
 *   2. Try 3-letter patterns (MMM)
 *   3. Try 2-letter patterns (MM, dd, HH, hh, mm, ss)
 *   4. Try 1-letter patterns (G, M, E, y, d, H, h, m, s, a)
 *   5. Copy literal characters to output
 *
 * =============================================================================
 * CONCEPTS STUDIED
 * =============================================================================
 * 1. String parsing algorithms: Character-by-character processing with
 *    lookahead for multi-character patterns
 * 2. Pattern matching: Hierarchical matching (longest first) to avoid conflicts
 * 3. Date component extraction: getFullYear(), getMonth(), getHours(), etc.
 * 4. Zero-padding: Using padStart(2, '0') for consistent formatting
 * 5. 12-hour vs 24-hour time: Modulo arithmetic (% 12) for 12-hour conversion
 * 6. Locale considerations: Month/day names in English
 * 7. Era handling: BC/AD dates with year arithmetic (Math.abs)
 * 8. Edge cases: Negative years, year 0, leading zeros
 *
 * =============================================================================
 * REAL-WORLD EXAMPLES
 * =============================================================================
 * - Date display: format(now, 'MMMM dd, yyyy') → "March 16, 2026"
 * - Timestamps: format(date, 'yyyy-MM-dd HH:mm:ss') → "2026-03-16 22:31:53"
 * - Time display: format(date, 'h:mm a') → "10:31 PM"
 * - File naming: format(date, 'yyyy-MM-dd_HH-mm-ss') for backup files
 * - Invoice dating: format(date, 'dd/MM/yyyy') → "16/03/2026"
 * - Email headers: format(date, 'EEEE, MMMM dd, yyyy') → "Monday, March 16, 2026"
 * - Historical dates: format(date, 'GGGG yyyy') → "Anno Domini 0476" or "Before Christ 100"
 * - Log formatting: format(date, 'yyyy-MM-dd\'T\'HH:mm:ss\'Z\'') for ISO 8601
 *
 * Format token reference:
 *   GGGG = "Anno Domini" / "Before Christ" (full era)
 *   G = "AD" / "BC" (short era)
 *   yyyy = 4-digit year (e.g., "2026")
 *   y = year without padding
 *   MMMM = full month name (e.g., "March")
 *   MMM = 3-letter month (e.g., "Mar")
 *   MM = 2-digit month (e.g., "03")
 *   M = month without padding
 *   dd = 2-digit day of month (e.g., "16")
 *   d = day without padding
 *   EEEE = full day name (e.g., "Monday")
 *   E = 3-letter day (e.g., "Mon")
 *   HH = 2-digit 24-hour format (e.g., "22")
 *   H = hour without padding (24-hour)
 *   hh = 2-digit 12-hour format (e.g., "10")
 *   h = hour without padding (12-hour)
 *   mm = 2-digit minutes (e.g., "31")
 *   m = minutes without padding
 *   ss = 2-digit seconds (e.g., "53")
 *   s = seconds without padding
 *   a = AM / PM
 *
 * =============================================================================
 * BONUS CHALLENGES
 * =============================================================================
 * 1. Add escape sequences: Treat quoted text literally (e.g., 'yyyy\')'
 * 2. Support quarter format: Q for quarter (Q1-Q4)
 * 3. Add week-of-year: 'w' for ISO week number
 * 4. Support dayOfWeek offset: 'u' for Monday=1, Sunday=7
 * 5. Add fractional seconds: 'SSS' for milliseconds
 * 6. Implement locale support: Different month/day names for languages
 * 7. Add timezone offset: 'Z' for UTC offset (e.g., "+05:30")
 * 8. Support relative dates: "today", "tomorrow", "yesterday" special cases
 * 9. Add caching: Memoize format strings to improve performance
 * 10. Reverse operation: Create a parse() function to convert string back to Date
 */
