const allTrim = require('./index')

console.log(allTrim(null) === null)
const test = allTrim({ a: null })
console.log(test.a === null)
console.log(allTrim([' name ', { ' age ': ' 20 ', date: new Date() }], true))
