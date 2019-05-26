# all-trim

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg)](https://opensource.org/licenses/mit-license.php)
[![npm](https://img.shields.io/npm/v/all-trim.svg)](https://www.npmjs.com/package/all-trim)
[![size](https://img.shields.io/bundlephobia/minzip/all-trim.svg)](https://www.npmjs.com/package/all-trim)
[![download](https://img.shields.io/npm/dw/all-trim.svg)](https://npmcharts.com/compare/all-trim?minimal=true)

## 说明

极少代码(22 行)实现字符串、数组、对象、嵌套数组等类型的去除空格

## 安装 & 使用

```bash
npm install all-trim
```

```js
const allTrim = require('all-trim')
```

## 示例

```js
// 字符串
let str = ' apple '

console.log(allTrim(str)) // 'apple'
```

```js
// 数组
let arr = [' apple ', ' orange ']

console.log(allTrim(arr)) // ['apple', 'orange']
```

```js
// 对象
let obj = {
  name: ' zhang ',
  age: 19,
  hobbies: [' programming ', ' badminton ']
}

console.log(allTrim(obj)) // { name: 'zhang', age: 19, hobbies: ['programming', 'badminton'] }
```

```js
// 嵌套数组
let arr = [
  { city: [' 河南 ', ' 广东 '] },
  { food: [[' 烩面 ', ' 胡辣汤 '], [' 煲仔饭 ', ' 肠粉 ']] }
]

console.log(allTrim(arr)) // [{ city: ['河南 ', '广东']}, {food: [['烩面', '胡辣汤'], ['煲仔饭', '肠粉']]}]
```
