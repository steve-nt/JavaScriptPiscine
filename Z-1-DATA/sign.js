function sign(num) {
  if (num > 0) return 1
  if (num < 0) return -1
  return 0
}

function sameSign(a, b) {
  return sign(a) === sign(b)
}

/* 
 * 📚 WHAT YOU LEARNED:
 * - If statements for multi-branch logic
 * - Early returns for cleaner code flow
 * - Function composition (using one function inside another)
 * - Strict equality operator (===)
 * - Normalizing values (converting any number to -1, 0, or 1)
 * 
 * 🎯 PRACTICE MORE:
 * - Create a function that compares three numbers
 * - Build a function that categorizes numbers (negative, zero, positive, large, small)
 * - Make a function that checks if two numbers are both even or both odd
 * - Write a function that checks if numbers are in ascending order
 * 
 * 🌍 REAL-WORLD EXAMPLES:
 * - Stock market: Showing if stock went up (↑) or down (↓)
 * - Temperature changes: Indicating warming or cooling trends
 * - Game scoring: Tracking wins (+), losses (-), or ties (0)
 * - Financial apps: Categorizing transactions (income vs expenses)
 * - Sorting algorithms: Comparing values to determine order
 * 
 * 💡 Sign checking is fundamental to comparison and sorting logic! 
 */
