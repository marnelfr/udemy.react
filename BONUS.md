
## Authentication
### useSearchParams hook
It gives us access to search parameters:
````javascript
// on a path locahost/auth?mode=login
const [searchParams, setSearchParams] = useSearchParams()
const isLogin = searchParams.get('mode') === 'login'
````

**Important**: ``loader/action()``s must return null or any other value\
We should make sure that we do add an extra return null statement in all if statement
branches where nothing would be returned otherwise to avoid errors or just add
an extra ``return null`` at the end of our loader
````javascript
export const checkAuthLoader = () => {
  const token = getAuthToken()
  if(!token) {
    return redirect('/auth?mode=login')
  }
  return null // very important then as I understand. But why? ☹️
}
````
In our loader or action, we can access searchParams this way:
`````javascript
const url = new URL(request.url)
const searchParams = url.searchParams
`````

## Deploying
### Lazy loading - Code optimization
It's important to implement lazy loading in our app before sending it to prod. This
is because without it, every file used by our app is downloaded while the first
page of our app is being rendered. But thanks to lazy loading, we shall henceforth
load a given file only if we need it.\
Given this code:

`````javascript
import EventsPage, {loader as EventLoader} from './pages/Events';

const route = {index: true, element: <EventsPage/>, loader: eventsLoader} 
`````
Applying lazy loading to it will give:
`````javascript
import EventsPage, {loader as EventLoader} from './pages/Events';
const EventsPage = lazy(() => import('./pages/Events')) 
const route = {
  index: true, 
  element: <Suspense fallback={<p>Loading...</p>}>
    <EventsPage />
  </Suspense>, 
  loader: (meta) => import('./pages/Events').then(module => module.loader(meta))
} 
`````

### Build for production
Command: ``npm run build``\
Once the command end executing, our code ready for production is placed in the ``//build``
folder.\
Our app can then be uploaded to production using for example Firebase hosting. To do that,
we need to create a project on our firebase console. Once done, we can click on ``Build`` then
on ``Hosting`` and then click on ``Get started`` and follow instructions.

## Animating ReactApp
We can do this by using build in CSS properties or take advantage from the [React-Transition-Group](https://reactcommunity.org/react-transition-group/)
package offered by the React community.\
Installation: ``npm install react-transition-group --save``

### Transition component
It got:
- `state` which can have four values (entering, entered, exiting, exited) that we can use to adjust our css for animating
- `in` props that receive the state related to the display of our component
- `mountOnEnter/unmountOnExit` props that can be added if we want to remove completely the element from the dom on ``state === exited``
- `timeout` props which defined the transition time in ms. It can also receive an object defining the ``enter`` and ``exit`` timing.
````javascript
<button onClick={() => setShowDiv(showDiv => !showDiv)} className="Button">Toggle</button>
<Transition in={showDiv} mountOnEnter unmountOnExit timeout={400}>
  {state => <div
    style={{
      background: 'red',
      height: 100,
      width: 100,
      margin: 'auto',
      opacity: state === 'entered' ? 1 : 0,
      transition: 'opacity 0.4s linear'
    }}
  />}
</Transition>
````
- onEnter/onEntering/onEntered/onExit/onExiting/onExited event that can be used to execute what ever function we need to execute.

### CSSTransition
Can be used in place of the **Transition** component. It doesn't receive a function as children but
a ``classNames`` props that will be used to add CSS classes dynamically to our component based on the ``state``.
So `modal-class` will give us
- `modal-class-enter` when `state === 'enter'`
- `modal-class-enter-active` when `state === 'entering'`
- `modal-class-enter-done` when `state === 'entered'`
- `modal-class-exit` when `state === 'exit'`
- `modal-class-exit-active` when `state === 'exiting' || state === 'exited'`

Another way will be to define those state classes thanks to an object having the property
enter, enterActive, exit, exitActive, appear, appearActive
`````javascript
<CSSTransition 
  in={props.show} 
  timeout={animationTiming} 
  mountOnEnter unmountOnExit 
  classNames={{enterActive: 'modalOpen', exitActive: 'modalClose'}}
>
  <div className='Modal'>
    <h1>A Modal</h1>
    <button className="Button" onClick={props.closed}>Dismiss</button>
  </div>
</CSSTransition>
`````

### TransitionGroup
Can be used to render a list of element. By default, it renders a div element, but
we can change this thanks to its ``component`` props.\
Its children should be wrapped with ``Transition`` or `CSSTransition` element.

### Other animation packages
- [React Motion](https://github.com/chenglou/react-motion)
- [React Move](https://react-move-docs.netlify.app/getting-started/installation) for more complex animations
- [React Router Transition](https://github.com/maisano/react-router-transition)

## Testing 🤓
When writing our test, we can use the `test` function available globally.\
It takes 2 arguments:
- A description of what we're testing
- An anonymous function which will contains the testing code that we should write
  by using the three `A`s: arrange, act, and assert.

### Arrange
Here, we set up the test data, test condition and test environment.
For example, we may render the component that we want to test. To do that, we may need to
- import the component we want to test
- render it thanks to the `render()` function from the testing-library that receive a JSX code
- ...

### Act
We do the thing we want to test, run logic that should be tested such
as a function execution or a button click simulation.

### Assert the result
We compare then the execution results (the output on the screen for example) with the
expected results. This can be done thanks to `screen` which give us access to the virtual dom rendered.
It gives us
- `query` functions which can be used to get an element in the vDOM
- `find` functions which returns a promise.
- `get` functions which throw error if the requested element in the vDOM is not found

They result is then passed to the globally available `expect()` function on which we've got various matches.
It may also be a good idea as our app grows, to group our test using the `describe()` function
````javascript
import {render, screen} from "@testing-library/react";
import Greeting from "./Greeting";

describe('Greeting component', () => {
  test('renders hello world as a text', () => {
    // Arrange
    render(<Greeting/>)

    // Act
    //... nothing to do here

    //Assert
    const helloWorldElement = screen.getByText('Hello World!')
    const loginElement = screen.queryByText('Login')

    expect(helloWorldElement).toBeInTheDocument()
    expect(loginElement).not.toBeInTheDocument()
  })
  
  test('renders Here is as test', () => {/*...**/})
})
````

Our test function can be async, and we can mock external function or api used by our components in order
to mack sure our tests won't fail because of them.
````javascript
test('renders listitem as expected', async () => {
  // Arrange
  window.fetch = jest.fn() // help us to create a mock function
  window.fetch.mockResolvedValueOnce({ // used to mock the returned value of our mock function
    json: async () => [{id: 'p1', title: 'First post'}]
  })
  render(<Async />)

  // Assert
  const listItemElements = await screen.findAllByRole('listitem', {})
  expect(listItemElements).not.toHaveLength(0)
})
````

More about [Jestjs](https://jestjs.io/docs/getting-started), the
[React testing library](https://testing-library.com/docs/react-testing-library/intro/),
and the [React hooks testing library](https://react-hooks-testing-library.com/installation)


## [Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
We can add an `.env` file to our project in which we can declare custom env variables that will be used in our app.
However, we shouldn't store any secrets (such as private API keys) in it because they are embedded into the build,
meaning anyone can view them by inspecting our app's files.

Custom environment variables must with ``REACT_APP_``. Any other variables except NODE_ENV will be ignored to avoid
accidentally exposing a private key on the machine.

**Changing any environment variables will require you to restart the development server if it is running.**\
These environment variables are accessible through `process.env`.
````typescript
///src/utils/config.ts
const config = {
  backendURL: process.env.REACT_APP_BACKEND_URL,
};

export default config;
````

There is also a built-in environment variable called `NODE_ENV`. It can't be overridden.
We can read it from `process.env.NODE_ENV`.
When we run `npm start`, it is always equal to '`development`', when we run `npm test` it is always equal
to '`test`', and when we run `npm run build` to make a production bundle, it is always equal to '`production`'.

Files on the left have more priority than files on the right:
- **npm start**: .env.development.local, .env.local, .env.development, .env
- **npm run build**: .env.production.local, .env.local, .env.production, .env
- **npm test**: .env.test.local, .env.test, .env (note .env.local is missing)


## Fontawesome
To use font awesome on the web, we can just access to the [font awesome page related to react](https://fontawesome.com/docs/web/use-with/react/)
or just search about **Use Font Awesome on the Web** and then search the page about the stack react
