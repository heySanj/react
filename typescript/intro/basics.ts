// Primitives: number, string, boolean
// Data structures: arrays, objects
// Functions, parameters

// ======= PRIMITIVES =======
let age: number;
age = 12;

let username: string;
username = 'Sanj'

let isCool: boolean = true;
isCool = false;

// ======= DATA STRUCTURES =======
let hobbies: string[]
hobbies = ["footy", "gaming", "golf"]

// Define your object structure. (Anything outside of this structure will produce an error)
let aPerson: {
    name: string,
    age: number
}

// ========== TYPE ALIASES ==========
// A typescript feature that lets you define data structures to avoid repetitve code
type Person = {
    name: string,
    age: number
}

let person: Person

person = {name: "Bob", age: 23}

// An array of objects
let people:  Person[]


// ========= TYPE INFERENCE =========
let course = "Learning Typescript 101" // Without declaring the type, TS already assumes that 'course' will always be string

// Union types allow variables to be of multiple types!
let unionCourse: string | number;
unionCourse = "A new course"
unionCourse = 101


// ======== FUNCTIONS & TYPES ==========
function add(a: number, b: number): number // What type the return should be
{
    return a+b
}

const printMe = (value: any) => {
    console.log(value)
}


// ========== GENERICS =============

// If the input is any[], then the output will be inferred to be any[]
// So we use <T> to say that the values input will always be of the same type, whatever it may be (more strict than just saying 'any')
const insertAtBeginning = <T>(array: T[], value: T) => {
    const newArray = [value, ...array]
    return newArray;
}

const demoArray = [1,2,3]

// updatedArray is inferred to be any[], as insertAtBeginning() ouputs any[]
// UNLESS we use Generic type <T> -- Then it infers that it is a number
const updatedArray = insertAtBeginning(demoArray, -1)

// Lets test it with strings!
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'x')