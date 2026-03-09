const escapeStr = '`\\/"\''

const arr = [4, '2']

const obj = {
  str: 'string value',
  num: 123,
  bool: false,
  undef: undefined
}

const nested = Object.freeze({
  arr: Object.freeze([4, undefined, '2']),
  obj: Object.freeze({
    str: 'nested string',
    num: 456,
    bool: true
  })
})

/* 
 * 📚 WHAT YOU LEARNED:
 * - JavaScript primitive types: string, number, boolean, undefined
 * - Escape sequences for special characters (\, ', ", `)
 * - Arrays can hold mixed types (numbers and strings)
 * - Objects store key-value pairs
 * - Nested data structures (objects within objects, arrays within objects)
 * - Object.freeze() makes objects immutable (can't be changed)
 * - Constants with const keyword
 * 
 * 🎯 PRACTICE MORE:
 * - Create objects representing real things (car, book, person)
 * - Build nested structures for a family tree
 * - Try to modify frozen objects and see what happens
 * - Practice with other escape sequences (\n, \t, \\)
 * 
 * 🌍 REAL-WORLD EXAMPLES:
 * - User profiles: Storing name, age, preferences in objects
 * - Shopping carts: Arrays of product objects
 * - Configuration files: Nested settings objects
 * - JSON APIs: Data structures exactly like this
 * - Database records: Each row as an object with properties
 * 
 * 💡 Understanding data structures is fundamental to all programming! 
 */
