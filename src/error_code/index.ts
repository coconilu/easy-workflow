const myArray: number[] = []

// 示例：convert ['a', 'b', 'c'] --> {a: 0, b: 1, c: 2}
var indexMap = myArray.reduce(function (memo, item, index) {
  return (memo[item] = index)
}, {}) // Error: cannot set property 'b' of undefined
