# REACT HOOKS

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

While all state/props variables and functions used in the effect function should be added as a dependencies,
we've got few exceptions such as:
- state updating functions,
- "built-in" APIs or functions
- variables or functions defined OUTSIDE components

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
An ``AuthButton`` then if we really need it in many places.\
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
state while building the new one we want to return, but we shouldn't modify directly the state.

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
So our reducer function should be pure function.

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
And with those outstanding state changes take in account, the value of ```count``` would actually be ``9``.

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
It sends GET request by default. But we can also use it to send POST/.../DELETE request this way:
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

However, instead of making complicate validation that may cost a lot of resources,
we can just use some references for our inputs with a state of object registering if each
input is valid or not. Then using the state, once the user submit the form, we can show
errors about invalid inputs.

**Never trust client side validation: always validate users input on server side as well**

