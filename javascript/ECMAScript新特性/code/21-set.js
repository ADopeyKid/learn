// const set = new Set([1, 2, 2, 3])
// console.log(set)


// const obj = {
//   a: 1
// }
// const set = new Set([1, 2, 2, 3, obj, obj])
// console.log(set)


// const set = new Set([1, 2, 2, 3, { a : 1 }, { a: 1 }])
// console.log(set)


// const set = new Set([1, 2, 2, 3, null, null])
// console.log(set)

// const set = new Set([1, 2, 2, 3, NaN, NaN])
// console.log(set)


// const set = new Set([1, 2, 2, 3, undefined, undefined])
// console.log(set)

// const obj = {
//   a: 1
// }
// const set = new Set([1, 1, 2, 3, '3', '3', obj, obj, { b: 1 }, { b: 1 }, undefined, undefined, NaN, NaN, null, null])
// console.log(set)


// const set = new Set()

// set.add(1).add(1)

// console.log(set.has(1)) // true


// const set = new Set()
// set.add(1).add(2)
// console.log(set.size)


// const set = new Set()
// set.add(1).add(2)
// set.delete(1)
// set.clear()
// console.log(set)


// const set = new Set()
// set.add(1).add(2)

// set.forEach(item => {
//   console.log(item)
// })

// for (const value of set) {
//   console.log(value)
// }

// const arr = [1, 3, 4, 5, 1, 2, 3]
// const set = [ ...new Set(arr) ]
// console.log(set)


const arr = [1, 3, 4, 5, 1, 2, 3]
const set = Array.from(new Set(arr))
console.log(set)