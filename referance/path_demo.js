const path = require('path')

// Base file name
console.log(path.basename(__filename))
console.log('\n')

// Directory name
console.log(path.dirname(__filename))
console.log('\n')

// File extension
console.log(path.extname(__filename))
console.log('\n')

// Create path object
console.log(path.parse(__filename))
console.log(path.parse(__filename).base)
console.log('\n')

// Concatentae
console.log(path.join(__dirname,'test','hello.html'))