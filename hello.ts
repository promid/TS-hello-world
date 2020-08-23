import { emit } from "process"

let myName = "dbq"
myName = "bei"
console.log('hello ' + myName)

let oneString: any = "this is a string"
let stringLength: number = (<string>oneString).length

let oneString2: any = "this is another string"
let stringLength2: number = (oneString2 as string).length

function hello(arg: number): number {
    return arg
}

console.log(hello(123))

function hello2<T>(arg: T): T {
    return arg
}

console.log(hello2<string>("hey"))
console.log(hello2("hey"))
console.log(hello2<number>(123))

function hello3<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}

hello3([1, 2, 3])

function hello4<T>(arg: Array<T>): Array<T> {
    console.log(arg.length)
    return arg
}

hello4([1, 2, 3, 4])

enum Status {
    Start, // 0
    InProgress, // 1
    End, // 2
    Haha = 4,
    HowAreYou // 5
}

console.log(Status.Start)
console.log(Status.InProgress)
console.log(Status.End)
console.log(Status.HowAreYou)

console.log(Status[5]) // 反向映射, 但字符串枚举中没有反向映射

const symbol1 = Symbol("hello")
const symbol2 = Symbol("hello")

// symbol1 === symbol2 // false

const symbol = Symbol()
const obj = {
    [symbol]: 'value'
}
console.log(obj[symbol])

function* infinitelist() {
    let i = 0
    while (i < 3) {
        yield i++
    }
}
var iterator = infinitelist()
console.log(iterator.next()); // value: 0, done: false
console.log(iterator.next()); // value: 1, done: false
console.log(iterator.next()); // value: 2, done: false
console.log(iterator.next()); // value: undefined, done: true

function* generator1() {
    console.log("started")
    yield 0
    console.log('resumed')
    yield 1
    console.log('end')
}

const iterator1 = generator1()
console.log(iterator1.next()) // started { value: 0, done: false }
console.log(iterator1.next()) // resumed { value: 1, done: false }
console.log(iterator1.next()) // end     { value: undefined, done: true }
console.log(iterator1.next()) //         { value: undefined, done: true }

function* generator2() {
    const who = yield
    console.log('hello ' + who)
}

const iterator2 = generator2()
console.log(iterator2.next())      // { value: undefined, done: false }
console.log(iterator2.next('ts'))  // hello ts { value: undefined, done: false }

function* generator3() {
    try {
        yield 1
    } catch(error) {
        console.log(error.message)
    }
}

const iterator3 = generator3()
iterator3.next()                     // { value: undefined, done: true }
iterator3.throw(new Error('wrong'))  // wrong