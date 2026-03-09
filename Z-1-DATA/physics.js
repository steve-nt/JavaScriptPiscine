function getAcceleration(obj) {
  if (obj.f != null && obj.m != null) {
    return obj.f / obj.m
  }
  
  if (obj.Δv != null && obj.Δt != null) {
    return obj.Δv / obj.Δt
  }
  
  if (obj.d != null && obj.t != null) {
    return (2 * obj.d) / (obj.t ** 2)
  }
  
  return "impossible"
}

/* 
 * 📚 WHAT YOU LEARNED:
 * - Multiple conditional checks (if statements)
 * - Null/undefined checking with != null
 * - Mathematical formulas in code
 * - Exponentiation operator (**)
 * - Early return pattern for cleaner code
 * - Handling edge cases (impossible scenarios)
 * 
 * 🎯 PRACTICE MORE:
 * - Implement other physics formulas (velocity, force, energy)
 * - Create a triangle area calculator with multiple formulas
 * - Build a BMI calculator with metric and imperial units
 * - Make a compound interest calculator
 * 
 * 🌍 REAL-WORLD EXAMPLES:
 * - Physics simulations: Game engines calculating motion
 * - Fitness apps: Calculating calories burned, distance traveled
 * - Navigation apps: Computing arrival times based on speed
 * - Engineering software: Structural calculations
 * - Scientific research: Data analysis and modeling
 * 
 * 💡 Translating real-world formulas into code is a valuable skill! 
 */
