function echo<T>(arg: T): T {
  return arg
}

// const echo: <T>(x: T) => T = (arg) => arg

const result = echo<number>(123)

// const str = echo('string')

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const tuple: [string, number] = ['hello', 123]
const newTuple = swap(tuple)

function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
// let arr = echoWithArr([1, 2, 3, 4])

interface IWithLength {
  length: number
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

// let arr1 = echoWithLength([1, 2, 3, 4])
// let str1 = echoWithLength('test111')
// let obj = echoWithLength({ length: 10 })

class Queue<T> {
  private data: Array<T> = []

  push(item: T) {
    return this.data.push(item)
  }

  pop(): T {
    return this.data.shift()
  }
}

const queue1 = new Queue<number>()
queue1.push(1)
console.log(queue1.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('c')
console.log(queue2.pop().length)

interface KeyPair<T, U> {
  key: T
  value: U
}

let kp1: KeyPair<number, string> = { key: 1, value: 'kp1' }
let kp2: KeyPair<string, number> = { key: 'test', value: 123 }

interface IPlus<T> {
  (a: T, b: T): T
}

function plus(a: number, b: number) {
  return a + b
}

function connect(a: string, b: string) {
  return a + b
}

const a: IPlus<number> = plus
const b: IPlus<string> = connect
