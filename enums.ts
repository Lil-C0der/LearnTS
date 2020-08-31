// enum Direction {
//   Up,
//   Down = 2,
//   Left,
//   Right
// }

// console.log(Direction.Up)
// console.log(Direction.Down)
// console.log(Direction[0])

const enum DirectionStr {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Righit = 'RIGHT'
}

let val = 'UP'
if (val === DirectionStr.Up) {
  console.log('go up!')
}
