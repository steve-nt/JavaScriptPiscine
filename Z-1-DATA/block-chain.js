function blockChain(data, prev) {
  const previousBlock = prev || { index: 0, hash: '0' }
  
  const block = {
    index: previousBlock.index + 1,
    data: data,
    prev: previousBlock,
    hash: '',
    chain: function(newData) {
      return blockChain(newData, block)
    }
  }
  
  block.hash = hashCode(block.index + previousBlock.hash + JSON.stringify(data))
  
  return block
}

/* 
 * 📚 WHAT YOU LEARNED:
 * - Recursion: A function calling itself (blockChain calls itself)
 * - Object methods: Functions as object properties
 * - JSON.stringify(): Converting objects to strings
 * - Hashing: Creating unique identifiers from data
 * - Linked data structures: Each block references the previous one
 * - Default parameters using OR operator (||)
 * 
 * 🎯 PRACTICE MORE:
 * - Build a linked list with similar recursive structure
 * - Create a family tree with parent-child relationships
 * - Implement undo/redo functionality using chained states
 * - Build a simple version control system
 * 
 * 🌍 REAL-WORLD EXAMPLES:
 * - Cryptocurrency: Bitcoin and Ethereum use blockchain technology
 * - Supply chain tracking: Recording product journey from factory to customer
 * - Medical records: Secure, tamper-proof patient history
 * - Digital voting systems: Transparent and verifiable election records
 * - Smart contracts: Automated agreements that execute when conditions are met
 * 
 * 💡 You just built the foundation of blockchain technology - that's impressive! 
 */
