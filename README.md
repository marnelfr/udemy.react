# Personal Notes

`````javascript
import * as bundled from 'utility.js';
`````

- Numbers, strings, and boolean are primitive types. When they are reassigned to another variable, their value is copied
  completely to the new variable.
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

## [Array doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

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

\
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
It only reevaluates and rerender a given component when its state or props change.\
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
And this is where React Fragments comes is because we don't need to create the ```Wrapper``` 
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

## React Refs
Should be used rarely but let us access the DOM elements using then **uncontrolled components** 
instead of **controlled** ones where their state is managed by React thanks to **useState/value/onChange**.\
We use it thanks to ``useRef()`` hook like this:
`````javascript
import {useRef} from 'react';

const From = props => {
  const yearInpRef = useRef()

  const formHandler = event => {
    event.preventDefault()
    console.log(yearInpRef.current.value);
    yearInpRef.current.value = ''
  }

  return (
    <form className={styles.form} onSubmit={formHandler}>
      <div className={styles['form-control']}>
        <label>Age (Years)</label>
        <input type="number" ref={yearInpRef}/>
      </div>
      <Button type="submit">Add User</Button>
    </form>
  )
}
`````

## Forward refs
We talk about forwarding ref when we have a component that render a given DOM element and here,
we want to attach a reference to that DOM element from outside the component.
We then need to define a ref that we attach to the component and forward it into the component
in order to attach it to the given DOM element. Forwarded refs are received as second parameters
of our component and the component is surrounded by ```React.forwardRef()```.

If a component receives a forwarded ref, it can then expose some of its internal function that will
then be accessible from its parents thanks to its attached ref. This can be done using the
``useImperativeHandle()`` hook. Let's expose a given internal function called ``activate``:
`````javascript
useImperativeHandle(ref, () => {
  return {
    focus: activate
  }
})
`````
Above, ``ref`` is a forwarded one. So in the parent component, we could do something like ``inpRef.current.focus()``.

## Side Effects
The main job of the React library is to:
- Evaluate, and render UI
- Manage state and props
- React to users' events and input, 
- Re-evaluate component upon state and props changes

Therefore, **side effects** are everything else that happen in the application such as
- sending http request
- storing data in the browser local storage
- timers and intervals management,...

But also any action that should be executed in response to some other actions: 
they are then our dependencies here.

Side effects may lead to rendering the UI but not directly, and we may not want to execute such of effect
everytime React evaluate and render the UI. We then need to explicitly indicate they dependencies: 
what changes their execution should depend on.\
That's where the ``useEffect()`` hook comes in. It's called with two arguments:
- a function that should be executed **AFTER** every component evaluation **IF** the specified dependencies changed
- an array of dependencies of this effect

While all state variables and functions used in the effect function should be added as a dependencies,
we've got few exceptions such as:
- state updating functions,
- "built-in" APIs or functions
- variables or functions defined OUTSIDE the components

**All "things" used in the effect function must be added if those "things" could 
change because the component (or some parent component) re-rendered.**

**It's also very important to pass specific properties instead of an entire object as a dependency because this may
make our useEffect to rerun our function everytime only one property of the given object changes**

### Mount and didUnmount events
**A function F** provided to ```useEffet()``` runs at least once: when the component is mounted in the DOM.\
Without a second argument, the function is run everytime the component is rendered.\
But with an empty array as dependencies, it never runs again after the first time.\
**The function F** can return another **function B** that's run first each time the function **F should be run again**: not the first time.
With an empty array as dependencies, the **function B** only run when the component is unmounted from the DOM.

### Debouncing with useEffet
`````javascript
useEffect(() => {
  const timeOutID = setTimeout(() => setFormIsValid(
    enteredEmail.includes('@') && enteredPassword.trim().length > 6
  ), 1000)

  return () => clearTimeout(timeOutID)
}, [enteredPassword, enteredEmail])
`````

### Avoid first execution with useEffect
To avoid executing a given code at the first execution of the function managed by useEffect,
we could declare a variable outside our component that could be ``let initialExec = true``
and set it to ``false`` when it's truthy and ``return`` inside our useEffect in order to not pursue.

## useReducer hook
We shouldn't update a state based on the value of another state. 
It may not work correctly sometimes when the other state update doesn't processed in time 
resulting then in an outdated value usage.\
When we need to update a state which depends on another state, we should consider combining them in only 
one state managing an object as value or think about using the hook **useReducer**.

## React Context API
Help us avoid forwarding props through multiple components while we only need them in few ones.
To use it, we need to define our context with a default value:
`````javascript
///src/store/auth-context.js
import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false
})

export default AuthContext
`````
In the parent that have children components which need the defined context, 
we need to provide it:
`````javascript
///src/App.js
const isAuthenticatedUser = true
const logoutHandler = () => {/*...*/}
return (
  <AuthContext.Provider value={{isLoggedIn: isAuthenticatedUser, onLogout: logoutHandler}}>
    /*our component jsx code*/
  </AuthContext.Provider>
)
`````
While providing our context, we can also set a value to the state as bellow.\
Then everywhere we need to consume it, we can do:
`````javascript
const Navigation = props => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={ctx.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        )
      }}
    </AuthContext.Consumer>
  )
}
`````
Or simply use the ``useContext()`` hook:
`````javascript
const Navigation = (props) => {
  const ctx = useContext(AuthContext)

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
};
`````

**Now, while it's possible to consume a context in a component not having a parent providing 
it (we shall then end up having a context with its default values), having a parent provider is 
always a good idea because it helps us to make our context dynamic.**

While defining our context, we can also define a contextProvider that will directly manage 
the state define by the context:
`````javascript
import React, {useEffect, useState} from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  loginHandler: (email, password) => {},
  logoutHandler: () => {}
})

export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const isAlreadyLoggedIn = localStorage.getItem('IsLoggedIn') === '1'
    if (isAlreadyLoggedIn) {
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password. But it's just a dummy/demo anyway
    localStorage.setItem('IsLoggedIn', '1')
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem('IsLoggedIn')
    setIsLoggedIn(false)
  }

  return <AuthContext.Provider value={{isLoggedIn, logoutHandler, loginHandler}}>
    {props.children}
  </AuthContext.Provider>
}

export default AuthContext
`````
Now, we can surround our ``App`` (which won't manage anything about authentication anymore) 
component with our ``AuthContextProvider`` directly in ``index.js``:
`````javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import {AuthContextProvider} from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
`````

### Context limitation
**React Context is **NOT** optimized for high frequency changes**\
We should then avoid using it to manage state which may change multiple time per second for example.

### Avoid too custom components 
We shouldn't lose the north because of all of these possibilities:
- contexts should only be used to state management across the app
- props for components configuration.

React Context shouldn't be used to replace ALL component communications and props.
We shouldn't end up using it in a giving (let's say...) UI component.\
For example, instead of using our ``AuthContext`` in a ``Button`` component, 
we may have beside another component using our ``Button`` component and the ``AuthContext``. 
An ``AuthButton`` then if we really need it.\
But we shouldn't use the ``AuthContext`` in ``Button`` 
component which can be used in many other places for other purposes.

## Rules of Hooks
- Only call React Hooks in React Functions
  - React Component Functions
  - Custom Hooks
- Only call React Hooks at the Top Level
  - Don’t call them in nested functions
  - Don’t call them in any block statements


## Bug in useReducer's reducer function
While working in the reducer of the ``useReducer`` hook, thanks to a ``console.log``
in the reducer, we can notice that it runs twice.\
So it's important to not modify directly the state inside it. We can get data from the
state while building the new we want to return, but we shouldn't modify directly the state.

This code for example leads to an error:
`````javascript
state.items[existingItemIndex] = updatedItem
const items = [...state.items]
return {items, totalPrice}
`````
While this code doesn't produce any error:
`````javascript
const items = [...state.items]
items[existingItemIndex] = updatedItem
return {items, totalPrice}
`````

## React.memo
If we have a component which is going to change or its props values are going to change
with pretty much every re-evaluation of the parent component anyway, then it
doesn't make a lot of sense to use ``memo`` because its result is that the component will re-render anyway,
then we can also save that extra comparison of the props values. That then just brings some 
overhead cost, which is not worth it.

For larger apps where we can cut off entire branches of unnecessary re-evaluations, it might 
very well be worth it. We just don't want to wrap every component with ```React.memo```, instead
we want to pick some key parts in our component tree which allows us to cut off an entire branch 
of child components. That's way more effective than doing this on every child component.

Using ```React.memo``` be like:
`````javascript
const MyComponent = (props) => {
  return (
    <>...</>
  )
}

export default React.memo(MyComponent)
`````

However, using ```React.memo``` doesn't change anything for components that receive reference type
variables as props such as arrays, objects, functions. Those props always change event if their value doesn't.
And this is because they are pointers, not value. 
- In order solve this problem about components that receive function as props, 
we can use another hook, the ``useCallback()``.
- To solve this problem about components that receive arrays, objects as props,
we can use another hook, the ``useMemo()``.


## Deeper look
States (from useState or useReducer) are only updated (the default value is no longer used) after the first initialisation unless 
the component was unmounted in meantime.\
When we call a useState setter, it doesn't set the new value instantly but schedule that change. 
It may then come that we have multiple state change scheduled at the same time maybe because 
React is busy by another intensive work such as listening to a controlled input (ahoooo 😅).\
Because multiple updates of the state can be scheduled at the same time, it important to
change our states value using the previous one if the new value depends on it.

Otherwise, you might just get the latest state when the component function was executed last, 
which is not necessarily the same state as if the state changes are executed in order.
Because if you have multiple outstanding state changes, they all come from the same last 
re-render cycle of that app component. They all come from the last component snapshot, but of course
if they were processed, the component would re-render in between but since they're all already scheduled, 
all outstanding states changes don't take that new in-between component result into account.
That's why this function form is helpful because there React will actually ensure that for every 
outstanding state change, it looks into the latest state and gives you that and doesn't use the latest 
state value from the last time the component was re-rendered. That's an important difference between when the 
component was re-rendered and when a state change was scheduled. You can have multiple outstanding state 
changes from one and the same component re-evaluation. That's the key takeaway here and that's why the function 
update form matters. 👇

### Explanation 👇
Given the following state:
`````javascript
const [count, setCount] = useState(0)
const updateState = () => setCount(count +1)
`````
With this mechanism of scheduling state change, we may end up with this code having ``count === 5`` when 
actually, we should have ``count === 10`` just because we may have 5 outstanding state changes and our 
``updateState`` function will register a ``setCount(4+1)`` because at the time ``updateState`` was run, the 
value of ```count``` was ``4`` but with 5 outstanding state changes.\
And with those outstanding state changes take in account, the value of ```count``` would actually be ``9``.\

So to take in account every outstanding state, our updateState function should be written this way:
````javascript
const updateState = () => setCount(count => count+1)
````

It gives us some advantage we also get from useEffet that ensure us to surely rerun our function it receives
everytime its dependencies changes.


## States batching
In case we have 2 state updates in the same synchronous code snippet after each other. 
So not in a promise in different blocks but in the same function, for example, where nothing in 
between would cause a time delay or anything like that, React will batch those state updates together.

In one long synchronous process, so for example, in one function that executes start to end without
any callbacks or promises in between, in such cases, React will take all the state updates that are
produces by that function, and it will batch them together into one state update.


## Fetch
It sends GET request by default. But we can also use it to send POST request this way:
`````javascript
const response = await fetch('https://url/movies.json', {
  method: 'POST',
  body: JSON.stringify(movie),
  headers: {
    'Content-Type': 'application/json'
  }
})
if(!response.ok) {
  //handle error
}
const responseData = await response.json()
`````

## Input validation
If the user submit the form, all inputs are treated as touched. Even if the user didn't edit them,
it submitted the form meaning he confirmed the whole form.\
An input should be validated when the user access to it and then blur.

However, instead of making complicating validation that may cost a lot of resources,
we can just use some references for our input with a state of object registering if each
input is valid or not. then using the state, once the user submit the form, we can show
errors about invalid inputs.

**Never trust client side validation: always validate users input on server side as well**


## Understanding Redux
Redux is a state management system for cross-component or app-wide state. It's then an alternative
for the build in feature React Context. However, we're not obliged to choose one of them because
we can use both in the same application.

**So why should we use Redux instead of React Context ?** Here are some React context potential
disadvantages:
- We can have a complex setup and managing state with React context can become quite complex because
  in very large application, using context, we can end up with code like this:
`````javascript
return (
        <AuthContextProvider>
          <ThemeContextProvider>
            <UIIteractionContextProvider>
              <MutiLanguageContextProvider>
                <UserRegistration />
              </MutiLanguageContextProvider>
            </UIIteractionContextProvider>
          </ThemeContextProvider>
        </AuthContextProvider>
)
`````
- Surely, we can instead use a single context that manage a big state about everything we need in our application
  but this may become quite complicate to maintain.
- We can have **performance issue** while using context because it's not recommended for high
  frequency changes state management: **it's not ready for flux like state management but Redux do.**


### How Redux works?
Redux only has one **Central Data Store (State)** and components subscribe to that state.
However, they can't change that state directly. Instead, they can **dispatch** an action.
**An action** is just a really javascript object which describe the kind of operation that
the reducer function that can manipulate the Redux state should perform.\
Once the Redux state is updated, components that subscribed to it are re-rendered.

### Working with Redux
To add redux, we can run the command: ``npm install redux``
To use redux, we should then start by creating the store
`````javascript
const defaultState = {}
const reducerFunction = (state = defaultState, action) => {
  if(action.type === 'action1') {/*...*/}
  if(action.type === 'action2') {/*...*/}
  return state
}
const store = redux.createStore(reducerFunction)
`````

The reducer function must always return a new state object, and should be a **pure function**.\
This means that the **same input should always produce the same output**, and we should not
have a side effect inside it: no http request, no call to localStorage.

We should subscribe to our store created:
````javascript
const counterSubscriber = () => {
  const state = store.getState()
}

store.subscribe(counterSubscriber)
````
Then, we can dispatch some action and this will execute all subscribed functions such as
``counterSubscriber`` with the lastest value of ``state``:
`````javascript
store.dispatch({type: 'increment'})
`````

### Use Redux in our React app
We need to install react-redux: ``npm install redux react-redux``
Now, as our store is created, we can provide it thanks to the ``react-redux``'s Provider:
`````javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
`````

Then using the hooks ``useStore()`` from **react-redux**, we can access our whole store (state)
value or a part of it thanks to the ``useSelector()`` hook. It receives a function that return from 
the ``state``, the part of it that we want to use and then subscribe our component to that part of the 
store for us.\
When our component is removed from the DOM, **react-redux also automatically clear the subscription**.\
The hook ``useDispatch()`` let us access to the ``dispatcher``.
`````javascript
import {useDispatch, useSelector} from "react-redux";

const dispatch = useDispatch()
const counter = useSelector(state => state.counter)
`````

**While working with reduce, the existing state should never be mutated (changed).
Instead, always override it by returning a brand new state object**

### [@Reduxjs/Toolkit](https://redux-toolkit.js.org/)
Installation: ``npm install @reduxjs/toolkit``. We can then avoid installing redux itself.\
Then we can create our ``Slices`` thanks to it:
`````javascript
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
  showCounter: true
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action) {
      state.counter += action.step
    },
    decrement(state) {
      state.counter--
    },
    toggle(state) {
      state.showCounter = !state.showCounter
    }
  }
})
`````
- **In slices' reducers, we are allow to mutate the state** because redux
toolkit internally uses the package [immerjs/immer](https://github.com/immerjs/immer)
which detect mutation and automatically create a new object from the one we mutated.
- **createSlice** automatically create unique action identifiers for our different
reducers. They can be accessed through ``counterSlice.actions`` which has keys that
matches our different reducer's function defined in the slice. 
- **I don't know if it's a bug from my side but overriding the state here seems to not work 🤒**

Once the slice is defined, we can export its reducer that will be used to config our store:
`````javascript
export default counterSlice.reducer
`````
And then, in our ``index.js``, we can have such of thing:
````javascript
import counterReducer from './counter'
import authReducer from './auth'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
})

export default store
````

We could also export ``counterSlice.actions`` as ``counterActions`` from our slice
and use it in our components:
`````javascript
const counterActions = counterSlice.actions
counterActions.increment(5) //=> {type: SOME_UNIQUE_KEY, payload: 5}
`````
So we can do
`````javascript
const dispatch = useDispatch()
dispatch(counterActions.increment(5))
`````

## Redux & Async code
**Reducers must be pure, side effect free, synchronous functions**: we should never perform
side effect inside our reducers no matter it's sync or async side effect! And even never write
async code in reducers in general!!\
So such side effects, they can be added 
- inside our components (thanks to **useEffect** for example), ignoring then redux at this point,
- inside **action creators** that allow us to write async codes or side effects code generally.

**NEVER MUTATE REDUX STATE OUTSIDE THE REDUCERS**\
This will first be a very bad code and will change the object represented by the redux state in 
memory without making redux aware of it. 

### Where should our logic (code) go?
- When talking about **synchronous, side effect free code (i.e. data transformations)**, 
we should **prefer** reducers and **avoid** action creators or components.
- and when it comes to **async code or code with side effects**, we should **prefer** action
creators or components and **NEVER use** reducers.

### Action creator function
We can add custom action creator function to create so-called **Thunk**.\
A thunk is a function that delays an action until later, until something finish.

They are functions (that can receive parameters)
that return another function that receive the dispatcher as parameter.\
The advantage here is that 
- we can perform side effect inside our custom action creator function
- we can make the function they return ``async``
- thanks to the dispatcher it receives, we can dispatch as many actions as we want
- we can dispatch them as other action creator using the dispatch function.
`````javascript
// in the cart-slice.js
export const sendCartData = (data) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data)
      })
      if(!response.ok) {
        throw new Error("Can't send data")
      }
    }
    try {
      await sendRequest()
    } catch (error) {}
  }
}

// can be dispatched this way
const dispatch = useDispatch()
dispatch(sendCartData(items))
`````

## [React router](https://reactrouter.com/en/main)
installation: ``npm install react-router-dom``
Adding routing to our app is a multistep process:
1. we must define the routes (urls) we want to support and which components should be loaded to these paths.
2. we have to activate the router and load the routes definition defined in the first step.
3. we want to make sure that we have all these components we want to load and provide some means of navigating 
between those pages to allow our users to move smoothly between pages.
````javascript
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css'
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

const router = createBrowserRouter([
  { path: '/', element: <HomePage />},
  { path: '/products', element: <ProductsPage />}
])

const App = () => {
  return <RouterProvider router={router} />;
}
````















