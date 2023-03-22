# REDUX

## Understanding Redux
Redux is a state management system for cross-component or app-wide state. It's then an alternative
for the build in feature **React Context**. However, we're not obliged to choose one of them because
we can use both in the same application.

**So why should we use Redux instead of React Context ?** Here are some React context potential
disadvantages:
- We can have a complex setup, and managing state with React context can become quite complex because
  in very large application, using context, we can end up with codes like this:
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
  frequency changes state management: **it's not ready for flux like state management while Redux do.**
- **Once only one property of the state managed by a context change, every component that subscribed to it
  are reloaded even if they don't use that particular property, so not directly affected by that change.**


### How Redux works?
Redux only has one **Central Data Store (State)** and components subscribe to a given part of that state.
However, they can't change that state directly. Instead, they can **dispatch** actions.\
**An action** is just a really javascript object which describes the kind of operation that
the reducer function that manipulate the Redux state should perform.\
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
Installation: ``npm install @reduxjs/toolkit react-redux``: we can then avoid installing redux itself.\
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
And then, in our ``//store/index.js``, we can have such of thing:
````javascript
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter'
import authReducer from './auth'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
})

export default store
````

We can also export ``counterSlice.actions`` as ``counterActions`` from our slice
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
So such side effects can be added
- inside our components (thanks to **useEffect** for example), ignoring then redux at this point,
- inside **action creators** that allow us to write async codes or side effects code generally.

**NEVER MUTATE REDUX STATE OUTSIDE THE REDUCERS**\
This will be firstly, a very bad code and will change the object represented by the redux state in
memory without making redux aware of it.

### Where should our logic (code) go?
- When talking about **synchronous, side effect free code (i.e. data transformations)**,
  we should **prefer** reducers and **avoid** action creators or components.
- and when it comes to **async code or code with side effects**, we should **prefer** action
  creators or components and **NEVER use** reducers.

### Action creator function: Thunks
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
// in the cart-slice.js or in cart-actions.js if we want
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

// can be dispatched this way in our components
const dispatch = useDispatch()
dispatch(sendCartData(items))
`````







## React Router
Let's continue with React Router [here](https://github.com/marnelfr/udemy.react/blob/main/REACT_ROUTER.md)

