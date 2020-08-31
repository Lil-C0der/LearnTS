// 声明式
function add(x: number, y: number) {
  return x + y
}

// 函数定义
const add1: (baseVal: number, increment: number) => number = (x: number, y: number) => x + y

// 可选参数和默认参数
const add2: (baseVal: number, increment: number, defaultIncrement: number, increment2?: number) => number = (
  x: number,
  y: number,
  z: number,
  d: number = 10
) => x + y + z + d

console.log(add2(1, 2, 3))
