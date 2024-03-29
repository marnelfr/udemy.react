# Personal Notes

`````javascript
import * as bundled from 'utility.js';
`````

- Numbers, strings, and boolean are primitive types. When they are reassigned to another variable, their value is completely copied
  to the new variable.
- Arrays and objects are references type though. This means an array variable is just a pointer to the memory place
  allocated to store the array. When the variable is reassigned to another, only the pointer value is copied but the new
  variable still points to the same array.

````javascript
class Human {
  gender = 'male';

  printGender = () => {
    console.log(this.gender);
  }

  sortArgs = (...args) => { // Rest operator
    return args.sort()
  }

  timesTwo = (data = [1, 2, 3]) => {
    return data.map((num) => num * 2) // data is not modified. It’s a new array which is is returned
  }

  destructuring = () => {
    const [a, , b] = ['Hello', 'Nel', 'Marno', 'Ange']; // a === ‘Hello’ and b === ’Marno’
    const {name} = {name: 'Nel', age: 28} // name === ’Nel’
  }
}
````
<details>
<summary>
<h2 style="display: inline"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array doc</a></h2>
</summary>

Particularly important in this course are:

* map()
  => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* find()
  => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
* findIndex()
  => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
* filter()
  => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* reduce()
  => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b)
* concat()
  => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b)
* slice()
  => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
* splice()
  => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
</details>

The simple rule which react apply is that

- Lower case elements are built in html elements
- Elements which name starts by a capital letter are custom elements

````javascript
const month = props.date.toLocaleString('en-US', {month: 'long'})
const day = props.date.toLocaleString('en-US', {day: '2-digit'})
const year = props.date.getFullYear()
````

Adding component can also be in order to avoid repeating our code even CSS code.
That's why we can end up with a component like ``Card.js``; just to avoid repeating some css code.

JSX under the hood:

````javascript
import Expenses from './Expenses'

return (
  <div>
    <Expenses items={expenses}/>
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

- With react, we write Declarative js code: we define the "goal" (i.e. what should be shown on the screen) and let React
  figure out how to get there.
- "Components" are really just a way of thinking about user interfaces. React embraces that concept and gives us tools
  to build components that we can then combine.

## React State

React evaluate every single component and then render them in the DOM as the app is initially rendered, and it doesn't
do that again.
It only reevaluates and rerender a given component when one of its state or props change.\
The initial value gives to ``useState()`` is only considered when the state is registered.
Next, only the last value of the state value is returned by react when rendering the component instance.

State can be updated for whatever reason we may have: upon user events, or because of a timer expired (with
setTimeout()) for example.

While updating the state that depends on the previous state value, we should always refer to that previous state in order to
make sure
that we're operating on the latest state snapshot.

### Lifting state up

It's about moving data from a child component to some parent component to either use it there or to pass it down to some
other child component.\
In JavaScript, functions are just objects (i.e. regular values) and hence we can pass them as values via props to a
component.
If that component then calls that function, it executes - and that's how we can trigger a function defined in a parent
component from inside a child component.

### Tips

- We use for..of to loop over an array's elements
- We use for..in to loop over an object's elements
- To convert a number of type string to digit, we can use '+'
````javascript
const num = '-1992' //works for positive num as well
console.log(+num) //print -1992 as digit, not string
````
- The ```bind()``` function called on a function's pointer allow us to set a value to ``this``
  inside it and predefine the value of arguments it should be called with
`````javascript
//inside a component:
const clickHandler = (id) => {/*...*/}
return (
  /*the function will be called with id=5*/
  <button onClick={clickHandler.bind(null, 5)}>Click me, please ((</button>
)
`````

## [Styled-component](https://styled-components.com/)

Very useful to avoid that styles applied to a given component affect others.

````javascript
const FormControl = styled.div`
  margin: 0.5rem 0;
  
  & label {
    display: block;
    color: ${props => props.invalid ? 'red' : 'black'}
  }
  
  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
    background-color: ${props => props.invalid ? '#f3b3b3' : 'transparent'}
  }
  
  & input:focus {
    background: #fad0ec;
    border-color: #8b005d;
  }
`

const CourseInput = props => {
  return (
    <FormControl invalid={!isValid}>
      <label>Course Goal</label>
      <input type="text" value={enteredValue} onChange={goalInputChangeHandler}/>
    </FormControl>
  );
};

export default CourseInput;
````

## [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)

Instead of using **styled-components**, we can use **CSS Modules** which is directly available in our
React projects.\
To use it, we simply need to name our css files with the extension ``.module.css``.
So ```button.css``` becomes ```button.module.css```and then we have to import it
in our component

`````javascript
import styles from './Button.module.css'

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
`````

```styles``` here is an object containing our css classes and then can be used as above.

## Debugging React Apps

In the dev tools of Chrome browser, we have the Source tab that contains most of the time our
written code under the ```Users/username/.../project-dir``` directory. We can then add some breakpoint
there to try to understand our bug using actions such as:

- Step into next function call: jump to the next function call even if it's a function called
  from the current file or another one.
- Step over next function call: jump to the next line in the same file
- Resume script execution

We can also install the React debug tools in chrome ; very useful

## React fragments
As every React component must have one root element, we may end up wrapping
our components with a div and this can lead to such thing in a very big app:

`````html
<div>
  <div>
    <div>
      <div>
        <div>Only one real content rendered</div>
      </div>
    </div>
  </div>
</div>
`````
To avoid this and write semantic more correct html code, we may use such of component:
`````javascript
const Wrapper = props => {
  return (
    props.children
  )
}
export default Wrapper
`````
Using this to wrap our components can make us avoid useless html tags in our final DOM code.
And this is where React Fragment comes in because we don't need to create the ```Wrapper```
component ourselves. It's already provided by React and can be used with the tags
```<React.Fragment></React.Fragment>``` or simply ```<></>```.

## React Portals
Using React Portals, we can render our components (such as modals,...) exactly where we need them
to be rendered in the DOM in order to write semantic more correct html code.\
To achieve that, we'll need ReactDOM.
`````javascript
import ReactDOM from "react-dom"; //we don't import from "react-dom/client" but "react-dom"

const ModalOverlay = props => {
  return (
    <div className={styles.modal}>
      ...
    </div>
  )
}

const Modal = ({message, onClose}) => {
  const clickHandler = () => onClose()

  return <>
    {ReactDOM.createPortal(<ModalOverlay message={message} onConfirm={clickHandler}/>, document.body)}
  </>
}
`````
Using all of this certainly make us look more like a developer who knows what he's doing 😎😎😎








## React Hooks
Let's continue with Hooks [here](https://github.com/marnelfr/udemy.react/blob/main/HOOKS.md)