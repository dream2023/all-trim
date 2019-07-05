const allTrim = require('./index')
const eql = require('deep-eql')
console.assert(eql(allTrim(null), null), 'null类型')
console.assert(eql(allTrim(123), 123), '数字类型')
console.assert(eql(allTrim(' 张超杰 '), '张超杰'), '字符串类型')
console.assert(eql(allTrim([' zhang ']), ['zhang']), '数组类型')
console.assert(eql(allTrim({ name: ' zhang ' }), { name: 'zhang' }), '对象类型')
console.assert(
  eql(allTrim({ ' name ': ' zhang ' }, true), { name: 'zhang' }),
  '对象去除key的空格'
)
console.assert(
  eql(allTrim([[[' zhang ']], [{ name: ' zhang ' }]]), [
    [['zhang']],
    [{ name: 'zhang' }]
  ]),
  '嵌套数组'
)
console.assert(
  eql(
    allTrim({
      friend: { name: { firstName: ' zhang ' }, food: [' orange ', ' apple '] }
    }),
    {
      friend: { name: { firstName: 'zhang' }, food: ['orange', 'apple'] }
    }
  ),
  '嵌套对象'
)
