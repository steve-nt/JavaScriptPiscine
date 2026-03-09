const circular = {}
circular.circular = circular

/* 
 * 📚 WHAT YOU LEARNED:
 * - Self-referencing objects (circular references)
 * - Objects can contain references to themselves
 * - The difference between object creation and property assignment
 * - How JavaScript handles object references in memory
 * 
 * 🎯 PRACTICE MORE:
 * - Create a doubly-linked list where nodes reference each other
 * - Build a tree structure where children reference parents
 * - Experiment with JSON.stringify() on circular objects (it will throw an error!)
 * - Create a graph data structure with interconnected nodes
 * 
 * 🌍 REAL-WORLD EXAMPLES:
 * - DOM manipulation: HTML elements reference their parent and children
 * - Social networks: Users can follow each other (bidirectional relationships)
 * - File systems: Folders can contain shortcuts to parent folders
 * - Game development: Game objects that reference each other (player ↔ inventory)
 * - React components: Parent and child components referencing each other
 * 
 * 💡 Circular references are powerful but watch out for infinite loops! 
 */
