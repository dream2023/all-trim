const allTrim = require('./index')

console.log(allTrim(null) === null)
const test = allTrim({ a: null })
console.log(test.a === null)
