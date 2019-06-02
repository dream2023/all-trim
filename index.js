function allTrim(data, isTrimKey) {
  if (typeof data === 'string') {
    data = data.trim()
  } else if (Array.isArray(data)) {
    data = data.map(item => allTrim(item, isTrimKey))
  } else if (Object.prototype.toString.call(data) === '[object Object]') {
    for (let key in data) {
      if (isTrimKey && typeof key === 'string' && key !== key.trim()) {
        data[key.trim()] = data[key]
        delete data[key]
        key = key.trim()
      }
      if (typeof data[key] === 'string') {
        data[key] = data[key].trim()
      } else if (Array.isArray(data)) {
        data[key] = data[key].map(item => allTrim(item, isTrimKey))
      } else if (Object.prototype.toString.call(data) === '[object Object]') {
        data[key] = allTrim(data[key], isTrimKey)
      }
    }
  }
  return data
}

module.exports = allTrim
module.exports.default = allTrim
