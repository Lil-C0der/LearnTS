let isDone: boolean = false
let num: number = 123
let binNum: number = 0b111
let str: string = 'ts'
let undef: undefined = undefined
let n: null = null

// str = n
// str = num

let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false

// Union Types
let numOrStr: number | string = 123
numOrStr = 'abc'

// let arr: number[] = [1, 2, 3];
let arr: Array<number> = [1, 2, 3]

// 元组
let x: [string, number] = ['hello', 10]

// x = ['tuple', 'tuple']

x.push('world')

// console.log(x) // 数组能看见新增的元素
// console.log(x[2]) // 编辑器报错，但是能够正常输出
