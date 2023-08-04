"use strict";
// * Basics
// run using tsc
// run using tsc -w for watch mode
let myNameFirst = 'max';
let myAge = 27;
let isLoading;
let anything;
anything = 12;
anything = 'twelve';
anything = { age: 12 };
anything = true;
const sum = (a, b) => {
    return a + b;
};
let postId;
let isActive;
let re = /\w+/g;
let stringArray = ['a', 'b', 'c'];
let numberArray = [1, 2, '3'];
let mixedData = [4, 2, '3', { age: 12 }];
// stringArray[0] = 2;
let object = { 3: 'a', 4: 'b' };
stringArray[1] = object[3];
let notTuple;
notTuple = ['a', 1];
notTuple = [1, 'a'];
// Tuple
let myTuple;
myTuple = ['a', 1];
// myTuple = [1, 'a'] // - this will throw an error because order matters in tuples
// myTuple = notTuple
let myObj;
// myObj = { name: 'max' }
myObj = [1, 2, 3];
console.log(typeof myObj);
let user = {
    name: 'max',
    age: 27,
    hobbies: ['Sports', 'Cooking']
};
const greetUser = (user) => {
    var _a;
    return `Hi, I am ${((_a = user.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) || 'there was an error'}`;
};
console.log(greetUser(user));
// Enums
// unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade["D"] = "test";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade);
// Literal Types
let myName;
myName = 'Dave';
// functions
const add = (a, b) => a + b;
// void function
const printOutput = (a) => console.log(a);
// OR
const printOutput2 = output => console.log(output);
// OR
const printOutput3 = function (a) { console.log(a); };
// OR
function printOutput4(a) {
    console.log(a);
}
printOutput('hi');
printOutput2(add(1, 2));
printOutput3(add(1, 2));
printOutput4(add(1, 2));
// interfaces are more for classes... but this would still work
// interface mathFunction{(a: number, b: number): number}
let addFunction = (a, b) => a + b;
// optional parameters come at the end of the list
const addAll = (a, b, c) => {
    if (c) {
        return a + b + c;
    }
    return a + b;
};
// other solution for an optional parameter
const sumAll = (a, b, c = 0) => {
    return a + b + c;
};
//* rest parameters
const total = (a, ...numbers) => {
    return a + numbers.reduce((prev, curr) => prev + curr, 0);
};
printOutput(total(100, 2, 7, 8, 9, 20, 10));
//function never type for Errors or infinite loops
// error nevers are okay to use
const createError = (message, code) => {
    throw new Error(message + code);
};
// never for infinite loops is not okay to use
const infiniteLoop = () => {
    while (true) { }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//weird behavior with NEVER
const numberOrString = (input) => {
    if (isNumber(input)) {
        return `${input}`;
    }
    if (typeof input === 'string') {
        return input;
    }
    // need to finish with a never
    return createError('This should not be possible', 500);
};
let a = 'test';
let b = a;
let c = a;
// THIS DOES NOT WORK IN REACT
let d = 'word';
let e = 'word';
const addOrContact = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return `${a}${b}`;
};
let myVal = addOrContact(1, 2, 'contact');
// The one bellow is wrong
let myWrongVal = addOrContact(1, 2, 'contact');
// 10 as string
//avoid this!!!
10;
// The DOM
// const input = document.querySelector('p') ! // the ! tells TS that this will never be null
// const input2 = document.getElementById('#input') as HTMLInputElement
// input.textContent
// input2.src
console.log(a, b, c);
// CLASSES
// * one way... long, not DRY way
class Coder {
    constructor(name, music, age) {
        this.name = name; // - notice how you are assigning the parameter to the property. Without this, you get an error. Try commenting out
        this.music = music;
        this.age = age;
    }
}
// * one way... short, DRY way
class Coder1 {
    constructor(
    // - Visibility modifiers - protected, public, or private and readonly - : by default, all are public
    name, music, age, language = 'JavaScript') {
        // this.name = name // - Try commenting in
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
    }
    getAge() {
        return 'Hello, I am ' + this.age;
    }
}
const Dave = new Coder1('Dave', 'Rock', 30);
console.log(Dave.getAge());
// console.log(Dave.age)
class WebDev extends Coder1 {
    constructor(computer, name, music, age) {
        super(name, music, age); //- notice we are in the curly braces of the constructor. This is where you initiate stuff
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return 'I write in ' + this.language;
    }
}
const Cisco = new WebDev('Mac', 'Dave', 'Rock', 30);
// console.log(Cisco.age()) // - properties are not accessible outside of the class
console.log(Cisco.getLang());
console.log(Cisco.getAge());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is playing ${this.instrument} by ${action}`;
    }
}
const Page = new Guitarist('Dave', 'guitar');
console.log(Page.play('strumming'));
///////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
/**
meaning that they wont be accessible in instanced classes
*/
Peeps.count = 0;
const Dan = new Peeps('Dan');
const Mike = new Peeps('Mike');
const Julie = new Peeps('Julie');
const Cool = new Peeps('Cool');
console.log(Peeps.getCount());
/////////////////////
class Band {
    constructor() {
        this.dataSate = [];
    }
    // - get is a key word
    get data() {
        return this.dataSate;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataSate = value;
            return;
        }
        else {
            throw new Error('Not an array of strings');
        }
    }
}
const band = new Band();
band.data = ['a', 'b', 'c']; // - this is calling the setter
console.log(band.data); // - this is calling the getter
const todaysTransactions = {
    Pizza: -10,
    Books: -20,
    Jobs: 30,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let net = 0;
    for (const t in transactions) {
        net += transactions[t];
    }
    return net;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: 'Cisco',
    GPA: 3.5,
    classes: [101, 201, 302]
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
    // console.log(`${key}: ${student[key]}`)
}
//////////
Object.keys(student).forEach(key => {
    console.log(`${key}: ${student[key]}`);
});
/////////////
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 1000,
    bonus: 200,
    sideHustle: 300
};
for (const revenue in monthlyIncomes) {
    console.log(revenue, ': ', monthlyIncomes[revenue]);
}
