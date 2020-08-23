import { emit } from "process"

let myName = "dbq"
myName = "bei"
console.log('hello ' + myName)

let oneString: any = "this is a string"
let stringLength: number = (<string>oneString).length

let oneString2: any = "this is another string"
let stringLength2: number = (oneString2 as string).length

function hello(arg: number) :number {
    return arg
}

console.log(hello(123))

function hello2<T>(arg: T):T {
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
    [symbol]:'value'
}
console.log(obj[symbol])