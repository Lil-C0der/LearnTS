interface Person {
  readonly id: number
  name: string
  age: number
  gender?: string
}

let p: Person = {
  id: 1,
  name: 'test',
  age: 20
}

p.name = 'interface'
// p.name = 123

// p.id = 2
