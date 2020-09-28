// private, protected, public 访问类型
// public 允许我在类的内外被调用
// private 允许在类内被使用
// protected 允许在类内

class Animal {
  name: string;
  static categoies: string[] = ['mammal', 'bird']
  static isAnimal(a) {
    return a instanceof Animal
  }
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}

console.log(Animal.categoies)
const snake = new Animal('lily')
console.log(Animal.isAnimal(snake))

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const xiaobao = new Dog('xiaobao')

class Cat extends Animal {
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  run() {
    return 'Meow, ' + super.run() 
  }
}

const maomao = new Cat('maomao')

interface Radio {
  switchRadio(): void;
}

interface Battery {
  checkBatteryStatus();
}
interface RadioWithBattery extends Radio {
  checkBatteryStatus();
}
class Car implements Radio{
  switchRadio() {

  }
}

class Cellphone implements RadioWithBattery {
  switchRadio() {

  }
  checkBatteryStatus() {

  }
}

class Person {
  name = 'dell'
  getName() {
    return this.name;
  }
}

class Teacher extends Person {
  name = 'dell1'
  getTeacherName() {
    return 'Teacher'
  }
  getName() {
    return super.getName() + this.name;
  }
}

new Teacher().getName()

class Person {
  // 传统写法
  // public name: string;
  // constructor(name: string) {
  //   this.name = name
  // }
  // 简化写法
  constructor(public name: string) {
    this.name = name
  }
}

class Teacher extends Person {
  constructor(public age: number) {
    super('dell')
  }
}

class Teacher extends Person {
  constructor(public age: number) {
    super('dell');
  }
}

const teacher = new Teacher(28);
console.log(teacher.age);
console.log(teacher.name);
