function allTrim(data, isTrimKey) {
  const type = Object.prototype.toString.call(data)
  if (type === '[object String]') {
    // 普通字符串
    data = data.trim()
  } else if (type === '[object Array]') {
    // 数组
    data = data.map(item => allTrim(item, isTrimKey))
  } else if (type === '[object Object]') {
    // 对象
    for (let key in data) {
      // 是否去除 key 的空格
      if (isTrimKey && typeof key === 'string' && key !== key.trim()) {
        data[key.trim()] = data[key]
        delete data[key]
        key = key.trim()
      }
      // 递归
      data[key] = allTrim(data[key], isTrimKey)
    }
  }

  return data
}

module.exports = allTrim
module.exports.default = allTrim
