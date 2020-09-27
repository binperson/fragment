let isDone: boolean = false

let age: number = 20
let binaryNumber: number = 0b1111

let firstName: string = 'viking'
let message: string = `Hello, ${firstName}, age is ${age}`

let u: undefined = undefined
let n: null = null

let num: number = undefined

let notSure: any = 4
notSure = 'maybe it is a string'
notSure = true

notSure.myName
notSure.getName()

let numberOrString: number | string = 234
numberOrString = 'abc'

let arrOfNumbers: number[] = [1, 2, 3, 4]
arrOfNumbers.push(5)

function test() {
  console.log(arguments)
}

// 数组
const arr: (number | string)[] = [1, '2', 3]

let user: [string, number] = ['viking', 1]

// type alias 类型别名
type User = {name: string, age: number}

const objectArr: User[] = [{
  name: 'dell',
  age: 28
}]

class Teacher {name: string; age: number}

const objectArr: Teacher[] = [
  new Teacher(),
  {
    name: 'dell',
    age: 28
  }
]

// 元组 tuple
const teacherInfo: [string, string, number] = ['Dell', 'male', 18]
// csv
const teacherList: [string, string, number][] = [
  ['Dell', 'male', 18],
  ['Dell1', 'male', 18],
  ['Dell2', 'male', 18]
]
