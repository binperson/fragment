type Point = { x: number, y: number }

function tsDemo(data: Point) {
  return Math.sqrt(data.x ** 2 + data.y ** 2)
}

tsDemo({
  x: 1,
  y: 2
})

//

interface Point { x: number, y: number }

function tsDemo(data: Point) {
  return Math.sqrt(data.x ** 2 + data.y ** 2)
}

tsDemo({
  x: 1,
  y: 2
})


interface Person {
  readonly id: number;
  name: string;
  age?: number;
}
let viking: Person = {
  id: 1234,
  name: 'viking',
}

interface Person {
  name: string;
  [propName: string]: any;
  say(): string;
}

interface Teacher extends Person {
  teach(): string;
}

class User implements Person {
  name: 'dell';
  say() {
    return 'hello'
  }
}

type Person1 = string



interface SayHi {
  (word: string): string
}

const say: SayHi = (word: string) => {
  return word
}
