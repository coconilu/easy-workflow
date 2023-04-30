import { readFile } from 'fs'

const foo = Promise.resolve(async (resolve, reject) => {
  readFile('foo.txt', function (err, result) {
    if (err) {
      reject(err)
    } else {
      resolve(result)
    }
  })
}).catch(err => {
  console.log(err)
})

console.log(foo)
