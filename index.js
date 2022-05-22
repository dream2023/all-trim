function allTrim(data, isTrimKey) {
    const type = Object.prototype.toString.call(data)
    if (type === '[object String]') {
        // 普通字符串
        return data.trim()
    } else if (type === '[object Array]') {
        // 数组
        return data.map(item => allTrim(item, isTrimKey))
    } else if (type === '[object Object]') {
        // 新对象
        let target = {};
        // 对象
        for (let key in data) {
            let targetKey = key;
            // 是否去除 key 的空格
            if (isTrimKey && typeof key === 'string' && key !== key.trim()) {
                targetKey = key.trim()
            }
            // 递归
            target[targetKey] = allTrim(data[key], isTrimKey)
        }
        return target;
    }
    return data
}

module.exports = allTrim
module.exports.default = allTrim
