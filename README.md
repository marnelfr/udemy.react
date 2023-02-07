# Personal Notes

Import * as bundled from ‘utility.js’;

- Numbers, strings, and boolean are primitive types. When they are reassigned to another variable, their value is copied completely to the new variable.
- Arrays and objects are references type though. This means an array variable is just a pointer to the memory place allocated to store the array. When the variable is reassigned to another, only the pointer value is copied but the new variable still points to the same array.

````javascript
class Human {
    gender = 'male';

	printGender = () => {
		console.log(this.gender);
	}

	sortArgs = (...args) => { // Rest operator
		return args.sort()
	}

	timeTwo = (data = [1,2,3]) => { // Rest operator
		return data.map((num) => num*2) // data is not modified. It’s a new array that’s is returned
	}

	destructuring = () => {
		const [a, , b] = ['Hello', 'Nel', 'Marno', 'Ange']; // a === ‘Hello’ and b === ’Marno’
		const {name} = {name: 'Nel', age: 28} // name === ’Nel’
	}
}
````

## [Array doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
Particularly important in this course are:
* map() => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* find() => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
* findIndex() => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
* filter() => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* reduce() => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b)
* concat() => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b)
* slice() => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
* splice() => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)


The simple rule which react apply is that
- Lower case elements are built in html elements
- Elements which name start by a capital letter are custom elements

````javascript
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const year = props.date.getFullYear()
````

Adding component can also be in order to avoid code repetition even CSS code. 
That's where ``Card.js`` component comes in.

JSX under the hood:
````javascript
import Expenses from './Expenses.js'

return (
    <div>
        <Expenses items={expenses} />
    </div>
)
// stand for:
return React.createElement(
    'div',
    {},
    React.createElement(Expenses, {items: expenses})
)
````

## Quiz
- With react, we write Declarative js code: we define the "goal" (i.e. what should be shown on the screen) and let React figure out how to get there.
- "Components" are really just a way of thinking about user interfaces. React embraces that concept and gives you tools to build components that you can then combine.

## React State
React evaluate every single component and then render them in the DOM as the app is initially rendered, and it doesn't do that again.
It only reevaluates and rerender a given component when its state changes.\
The initial value gives to ``useState()`` is only considered when the state is registered. 
Next, only the last value of the state value is returned by react when rendering the component instance.

State can be updated for whatever reason we may have: upon user events, or because of a timer expired (with setTimeout()) for example.

