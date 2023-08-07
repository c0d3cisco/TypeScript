
// * Basics
// run using tsc
// run using tsc -w for watch mode

let myNameFirst: string = 'max'
let myAge: number = 27
let isLoading: boolean
let anything: any

anything = 12
anything = 'twelve'
anything = { age: 12 }
anything = true

const sum = (a: number, b: string) => {
	return a + b
}

let postId: string | number
let isActive: boolean | number

let re: RegExp = /\w+/g

let stringArray = ['a', 'b', 'c']
let numberArray: (string | number)[] = [1, 2, '3']
let mixedData: (string | number | boolean | { age: number; })[] = [4, 2, '3', { age: 12 }]

// stringArray[0] = 2;
let object = { 3: 'a', 4: 'b' };
stringArray[1] = object[3];


let notTuple: (number | string)[]
notTuple = ['a', 1]
notTuple = [1, 'a']

// Tuple
let myTuple: [string, number]
myTuple = ['a', 1]
// myTuple = [1, 'a'] // - this will throw an error because order matters in tuples
// myTuple = notTuple

let myObj: object
// myObj = { name: 'max' }
myObj = [1, 2, 3]

console.log(typeof myObj)

// type User = { 
// 	name?: string 
// 	age?: number
// 	hobbies: string[] 
// }

interface UserInterface { name: string; age?: number; hobbies: string[] }

let user: UserInterface = {
	name: 'max',
	age: 27,
	hobbies: ['Sports', 'Cooking']
}

const greetUser = (user: User) => {
	return `Hi, I am ${user.name?.toLocaleLowerCase() || 'there was an error'}`
}

console.log(greetUser(user))

// Enums
// unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime

enum Grade {
	U = 1,
	D = 'test',
	C = 3,
	B,
	A,
}


console.log(Grade)

type stringOrNumArray = (string | number)[]

type User = {
	name?: string
	age?: number
	hobbies: stringOrNumArray
}

// Literal Types
let myName: 'Dave' | 'Cisco' | number
myName = 'Dave'

// functions
const add = (a: number, b: number): number => a + b

// void function
const printOutput = (a: number | string): void => console.log(a)
// OR
const printOutput2: (a: number | string) => void = output => console.log(output)
// OR
const printOutput3 = function (a: number | string): void { console.log(a) }
// OR
function printOutput4(a: number | string): void {
	console.log(a)
}

printOutput('hi')
printOutput2(add(1, 2))
printOutput3(add(1, 2))
printOutput4(add(1, 2))

type mathFunction = (a: number, b: number) => number
// interfaces are more for classes... but this would still work
// interface mathFunction{(a: number, b: number): number}

let addFunction: mathFunction = (a, b) => a + b

// optional parameters come at the end of the list
const addAll = (a: number, b: number, c?: number): number => {
	if (c) {
		return a + b + c
	}
	return a + b
}
// other solution for an optional parameter
const sumAll = (a: number, b: number, c: number = 0): number => {
	return a + b + c
}

//* rest parameters
const total = (a: number, ...numbers: number[]): number => {
	return a + numbers.reduce((prev, curr) => prev + curr, 0)
}

printOutput(total(100, 2, 7, 8, 9, 20, 10))

//function never type for Errors or infinite loops
// error nevers are okay to use
const createError = (message: string, code: number): never => {
	throw new Error(message + code)
}
// never for infinite loops is not okay to use
const infiniteLoop = (): never => {
	while (true) { }
}
//custom type guard
const isNumber = (value: any): boolean => {
	return typeof value === 'number' ? true : false
}
//weird behavior with NEVER
const numberOrString = (input: number | string): string => {
	if (isNumber(input)) {
		return `${input}`
	}
	if (typeof input === 'string') {
		return input
	}
	// need to finish with a never
	return createError('This should not be possible', 500)
}

// TYPE ASSERTIONS
type One = string
type Two = string | number
type Three = 'hello'

let a: One = 'test'
let b = a as Two
let c = a as Three

// THIS DOES NOT WORK IN REACT
let d = <One>'word'
let e = <String | number>'word'

const addOrContact = (a: number, b: number, c: 'add' | 'contact'): number | string => {
	if (c === 'add') {
		return a + b
	}
	return `${a}${b}`
}

let myVal: string = addOrContact(1, 2, 'contact') as string
// The one bellow is wrong
let myWrongVal: number = addOrContact(1, 2, 'contact') as number

// 10 as string
//avoid this!!!
(10 as unknown) as string

// The DOM
// const input = document.querySelector('p') ! // the ! tells TS that this will never be null
// const input2 = document.getElementById('#input') as HTMLInputElement

// input.textContent
// input2.src

console.log(a, b, c)

// CLASSES

// * one way... long, not DRY way
class Coder {
	name: string
	music: string
	age: number


	constructor(
		name: string,
		music: string,
		age: number
	) {
		this.name = name // - notice how you are assigning the parameter to the property. Without this, you get an error. Try commenting out
		this.music = music
		this.age = age
	}

}
// * one way... short, DRY way
class Coder1 {

	// name: string
	// secondLanguage: string
	//  the ! tells TS that does not need to be initialized
	secondLanguage!: string

	constructor(
		// - Visibility modifiers - protected, public, or private and readonly - : by default, all are public
		public readonly name: string,
		public music: string,
		private age: number,
		protected language: string = 'JavaScript', // - this makes this property optional and not required when creating a new instance of the class
	) {

		// this.name = name // - notice how you are assigning the parameter to the property. Without this, you get an error. Try commenting in

	}


	public getAge() {
		return 'Hello, I am ' + this.age
	}
}

const Dave = new Coder1('Dave', 'Rock', 30)
console.log(Dave.getAge())
// console.log(Dave.age)

class WebDev extends Coder1 {
	constructor(
		public computer: string,
		name: string,
		music: string,
		age: number,
	) {
		super(name, music, age) //- notice we are in the curly braces of the constructor. This is where you initiate stuff
		this.computer = computer
	}

	public getLang() {
		return 'I write in ' + this.language
	}

	// public getAge1() {
	// 	return 'Hello, I am ' + this.age
	// }

}

const Cisco = new WebDev('Mac', 'Dave', 'Rock', 30)
// console.log(Cisco.age()) // - properties are not accessible outside of the class
console.log(Cisco.getLang())
console.log(Cisco.getAge())

interface Musician {
	name: string
	instrument: string
	play(action: string): string
}

class Guitarist implements Musician {
	name: string
	instrument: string

	constructor(name: string, instrument: string) {
		this.name = name
		this.instrument = instrument
	}

	play(action: string) {
		return `${this.name} is playing ${this.instrument} by ${action}`
	}
}

const Page = new Guitarist('Dave', 'guitar')

console.log(Page.play('strumming'))

///////////////////////////

class Peeps {
	/** 
	meaning that they wont be accessible in instanced classes
	*/
	static count: number = 0

	static getCount(): number {
		return Peeps.count
	}

	public id: number

	constructor(public name: string) {
		this.name = name
		this.id = ++Peeps.count
	}
}

const Dan = new Peeps('Dan')
const Mike = new Peeps('Mike')
const Julie = new Peeps('Julie')
const Cool = new Peeps('Cool')

console.log(Peeps.getCount())

/////////////////////

class Band{
	private dataSate: string[]
	constructor(){
		this.dataSate = []
	}
	// - get is a key word
	public get data(): string[]{
		return this.dataSate
	}

	public set data(value: string[]){
		if(Array.isArray(value) && value.every(el => typeof el === 'string')){
			this.dataSate = value
			return
		} else {
			throw new Error('Not an array of strings')
		}
	}
}

const band = new Band()
band.data = ['a', 'b', 'c'] // - this is calling the setter
console.log(band.data) // - this is calling the getter