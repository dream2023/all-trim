function allTrim(data, isTrimKey) {
  if (typeof data === 'string') {
    data = data.trim()
  } else if (data instanceof Array) {
    data = data.map(item => allTrim(item))
  } else if (data instanceof Object) {
    for (let key in data) {
      if (isTrimKey && typeof key === 'string' && key !== key.trim()) {
        data[key.trim()] = data[key]
        delete data[key]
        key = key.trim()
      }
      if (typeof data[key] === 'string') {
        data[key] = data[key].trim()
      } else if (data instanceof Array) {
        data[key] = data[key].map(item => allTrim(item))
      } else if (data[key] instanceof Object) {
        data[key] = allTrim(data[key])
      }
    }
  }
  return data
}

module.exports = allTrim
module.exports.default = allTrim
