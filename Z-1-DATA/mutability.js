const clone1 = { ...person }

const clone2 = Object.assign({}, person)

const samePerson = person

person.age = 78
person.country = 'FR'

/* 
 * 📚 WHAT YOU LEARNED:
 * - Object cloning vs object referencing
 * - Spread operator (...) for shallow copying
 * - Object.assign() for copying properties
 * - Reference vs value: Variables can point to the same object
 * - Mutability: Changing an object affects all references to it
 * 
 * 🎯 PRACTICE MORE:
 * - Create a deep clone function for nested objects
 * - Experiment with freezing objects (Object.freeze())
 * - Build a function that merges multiple objects
 * - Try modifying clone1 and see if person changes (it won't!)
 * 
 * 🌍 REAL-WORLD EXAMPLES:
 * - Undo/Redo: Saving object states before modifications
 * - Form drafts: Cloning original data to allow cancel
 * - State management (Redux, Vuex): Creating new state instead of mutating
 * - Configuration: Cloning default settings for customization
 * - Database records: Creating copies before updates
 * 
 * 💡 Understanding references vs copies prevents many common bugs! 
 */
