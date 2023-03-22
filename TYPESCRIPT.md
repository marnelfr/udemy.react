# [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)

Global installation: `sudo npm install -g typescript --save-dev`
To add a project using the typescript template,
we can use the command: `npx create-react-app project_name --template typescript`


````typescript
// core primitve type
let age: number = 45
let username: string = 'marnel'
let isProgrammer: boolean = true

//More complex type
let usernames: string[] = ['Marnel', 'Ginola']
let users: {
  name: string,
  age: number
}[] = [{name: 'Marnel', age: 14}]

// Type inference
let course = 'React course'
course = 34 // will brings to an error since the type of course is therefore string.

// Union type
let car: string|number = 'Avalon'
car = 555 // won't lead to an error since car is of type string or number

// Type alias
type Person = {name: string, age: number}
let customer: Person = {name: 'Marnel', age: 23}
let accounts: Person[] = [{name: 'Marnel', age: 30}]

// Functions & types
const add = (a:number, b: number): number => {} // we could omit the return's type here since it could be inferenced
const print = (val: any): void => console.log(val) // void return's type for functions that doesn't return a value

//Generics
const preInsert = <T>(array: T[], num: T) => [num, ...array]
// the generics type T helps typescript to inference that newArray is of type number[]
const newArray = preInsert([1, 2, 3], 45)
const stringArray = preInsert<string>(['a', 'b', 'c'], 'd')

// we can explicitly set a variable type like this:
let numbers: Array<number> = [1, 2, 3];

const changeHandler: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
  setValue(event.currentTarget.value);
};
````

### [Typescript && Redux](https://react-redux.js.org/using-react-redux/usage-with-typescript#define-root-state-and-dispatch-types)
### [Type Checking Redux Thunks](https://redux.js.org/usage/usage-with-typescript#type-checking-redux-thunks)

### Should not use Model Classes
Yes. [We've always told Redux users they should not put non-serializable values in the store.](https://redux.js.org/style-guide/style-guide#do-not-put-non-serializable-values-in-state-or-actions)\
Redux Toolkit was specifically designed to help provide good defaults when setting up a Redux store, and as part of that, it includes checks to make sure you're not accidentally mutating your data and that you're not including non-serializable values.
Class instances are by definition not fully serializable, so it's correctly flagging those instances as a problem. Please rewrite your logic to not pass those in to the store.
In general, React and Redux apps should be written using only plain JS objects and arrays as data. You don't need "model classes".

