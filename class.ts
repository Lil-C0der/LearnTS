class Animal {
  // name: string
  // private name: string
  // protected name: string
  // readonly name: string
  // protected constructor(name: string) {
  public constructor(readonly name: string) {
    // this.name = name
  }
  static categories: string[] = ['mammal']

  static isAnimal(instance) {
    return instance instanceof Animal
  }

  public run() {
    return `${this.name} is running`
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name)
  }
  // 通过 super.run 来调用父类的 run 方法
  run() {
    return `Meow, ` + super.run()
  }
}

let horse = new Animal('horse')
// horse.name = 'horse1'
// console.log(horse.run())

console.log(Animal.isAnimal(horse))

let cat = new Cat('cat1')
// cat.name = 'cat2'
console.log(cat.run())

interface Radio {
  switchRadio(): void
}

interface RadioWithBattery extends Radio {
  checkBatteryStatus()
}

class Car implements Radio {
  switchRadio() {}
}

class CellPhone implements RadioWithBattery {
  switchRadio() {}
  checkBatteryStatus() {}
}
