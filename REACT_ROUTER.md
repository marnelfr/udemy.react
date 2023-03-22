# [React router](https://reactrouter.com/en/main)

## Installation
cmd: ``npm install react-router-dom``

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

We can also create our routes using ``createRouteFromElement``
````javascript
const routeDefinition = createRoutesFromElements(
  <Route>
    <Route path='/' element={<HomePage />} />
    <Route path='/products' element={<ProductsPage />} />
  </Route>
)
const router = createBrowserRouter(routeDefinition)
````
To navigate between pages, we should use the ``Link`` component provided by react-router
`````javascript
<p>Go to the <Link to={'/products'}>products page</Link></p>
`````

### Nested routes
`````javascript
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage />},
      { path: '/products', element: <ProductsPage />}
    ]
  },
])
`````
Our ``RoutLayout`` here will wrap our page component which will then replace the ``Outlet``
component inside our **RoutLayout**. We can then place in our RoutLayout, our navigation bar or things
like that.

### errorElement
On every route we add, we can define the ``errorElement`` that will be shown if some error occurs.\
It supposed to be a page element nicely styled 😅

### NavLink
Instead of using **Link** in our navigation, we should consider using **NavLink** which provides such advantages:
1. [x] className: here it's a function which receives ``({isActive})``. isActive is true is the route
   represented by the NavLink is active.
2. [x] the ``end`` props on it let us say if the route should be considered active if other including its path are.
`````javascript
const isActiveHandler = useCallback(({isActive}) => isActive ? classes.active : undefined, [])
return (
  <NavLink to={'/'} end className={isActiveHandler}>Home</NavLink>
)
`````

### Navigating programmatically
This may be needed after handling a form for example. It's done thanks to the ``useNavigate()`` hook provided
by the react-router-dom package
`````javascript
const navigate = useNavigate()
const submitHandler = (event) => {
  //...
  navigate('/products')
}
`````

### Dynamic Routes
`````javascript
//We can defined route with params like this:
const dRoute= { path: '/products/:id', element: <ProductDetailsPage />}

//Then we can access the params like this:
import {useParams} from "react-router-dom";
const ProductDetailsPage = () => {
  const { id } = useParams()
  return (/*...*/)
}
`````

### Relative vs absolute route
When ever a defined route path start by '/', the path is absolute. To define a path
which should be relative to its root component path, we should avoid the '/' at the beginning of the path.\
We've got a ``relative`` props on our ``Link`` component that can be **route** or **path**.
We've also got ``to=".."`` path which leads to the **route** path of the current one if ``relatvive="route"``
(default value) or to one path above if ``relative="path"``.
`````javascript
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '', element: <HomePage />},
      { path: 'products', element: <ProductsPage />}
    ]
  },
])
`````
Instead of having ``path: ''``, we could have ``{ index: true, element: <HomePage />}``

## The loader
`````javascript
const route = { index: true, element: <EventsPage />, loader: async () => {} } 
`````
The ``loader`` function can be used to fetch data we may need in our ``EventsPage``.
The data loaded is returned and then is available in the component page thanks to the
``useLoaderData()`` hook. The hook can be used in the current component that load the
data or in any of its child components ; and the router always wait for the data to finish
being fetched before loading the component.\
We've also got the ``useNavigation()`` hook that can help us to reflect the current navigation state.
`````javascript
const navigation = useNavigation()
navigation.state === 'loading' // the needed data is being fetching
`````
The ``useNavigation()`` hook can be used from any component currently visible on the screen.

Instead of putting the loader function code in the router definition, we may consider exporting
it from the ``EventsPage`` component file.

``loader()s`` support ``Response``type object. This means we can even do something like:
````javascript
const eventLoader = async () => {
  const response = await fetch('http://localhost:8080/events');
  if(!response.ok) {
    // We can return an object that indicate that an 
    // error occured and then handle it in our component
    return {isError: true, message: 'some message'}

    // OR
    // throw and object as error
    throw {message: 'Some error message'}
    // Or throw and error using its constructor
    throw new Error('Some message')
    // Or return an Response object
    throw new Response(JSON.stringify({/**/}), {status: statusCode})
  }
  return response
}
````
In case, we throw something, react-router will render the closest error page to our component.
in the error page, we can access the error thanks to the ``useRouteError()`` hook.\
In case we throw an object, we shall get that object. Otherwise, we could take advantage of the
status code provided by the ``Response`` object.
````javascript
//in our Error component
const response = useRouteError()
let message = 'An error occured!'
let title = 'Error'

if(response.status === 500) {
  message = JSON.parse(response.data).message
}
if(response.status === 400) {
  message = 'Page not found'
  title = 404
}
````

**Instead of throwing ``new Response``, we can ``throw json({message: ''}, {status: 500})``**. Using
the ```json()``` method from react-router-dom, we don't need to stringify our data and then no need to
``JSON.parse`` it in our Error component.

**Since loaders are not components or hooks, we can't use hooks inside them**

### Loader with dynamic routes
Our loaders functions receive automatically some data from which we can destruct ``({request, params})``.
- From ``request`` we can access the url from for example or await formData() from,
- From the ``params`` we can access every parameter in the route

### The useRouteLoaderData hook
We could have such of defined route:
`````javascript
const route = {
  path: ':eventId',
  id: 'event-detail',
  loader: eventItemLoader,
  children: [
    { index: true, element: <EventDetailPage /> },
    { path: 'edit', element: <EditEventPage /> },
  ]
}
`````
This allows us to get access to the ```eventItemLoader``` in both ```EventDetailPage``` and
```EditEventPage``` components.
For that, we shall use the ``useRouteLoaderData('event-detail')`` that receive the route id as parameter.

### Form from react-router
React router help us to handle our forms' submission. For that, we need to
- use the ``Form`` component from 'react-router-dom' package and then specify the correct method among
  get, post, patch, put and delete
- define the ``action`` property on our component route. It value is a function that should be exported from
  our component file. The function receive automatically the ``({request, params})``
- On ``request``, we can await the ``request.formData()`` and ``get('input-name')`` our input data using their name
- Once we've done handling/saving our data, we can ``return redirect(path)`` our users to where ever we want.
``````javascript
export const newEventAction = async ({request}) => {
  const data = await request.formData()
  const event = {title: data.get('title')}

  const response = await fetch(/*...*/)

  if(!response.ok) {
    throw json({message: 'Could not save event data'}, {
      status: 500
    })
  }
  return redirect('/events')
}
``````

useNavigation can also help us to update the UI state based on our submission status
`````javascript
// in our EventForm component
const navigation = useNavigation()
const isSubmitting = navigation.state === 'submitting'
return (
  <form>
    /*....*/
    <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
  </form>
)
`````

### Form error handling
In case we've got some error in the backend, we can return the response in our action and then access
its data thanks to the ``useActionData()`` hook:
`````javascript
// in our action:
if(response.status === 422) { // a status code defined and returned by this server in case of server side validation error
  return response;
}

// in our EventForm component
const errorData = useActionData();
return (
  <Form method="POST" className={classes.form}>
    {errorData && errorData.errors && <ul>
      {Object.values(errorData.errors).map(error => <li key={error}>{error}</li>)}
    </ul>}
    /*...*/
  </Form>
)
`````

### useSubmit hook
Can be used to call an action programmatically, thus to submit a given form programmatically.
`````javascript
// submitting a FormData
let formData = new FormData();
formData.append("cheese", "gouda");
submit(formData); // with no action provided, the current route action is trigged
// we can also submit a simple object or null if no data is
// needed for delete route for example
submit(null, {action: "/events/" + eventId, method: 'DELETE'});
submit(null, {action: "/logout", method: "post"})
`````

### useFetcher hook
The useFetcher hook (without 's' at its end) is the tool we should use if we want to trigger a
loader/action without actually loading the page/route to which this loader/action belongs to.
Perfect then to do some work behind-the-scenes.\
It brings a particular ``Form`` component that we should use if we want to work with it.
````javascript
const NewsletterSignup = () => {
  const {Form, data, state} = useFetcher()

  const isSubmitting = state === 'submitting'

  useEffect(() => {
    console.log(data, state);
    if(state === 'idle' && data && data.message) {
      alert(data.message)
    }
  }, [data, state])

  return (
    <Form method="post" action="/newsletter" className={classes.newsletter}>
      <input
        type="email"
        name="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>{isSubmitting ? 'Submitting...' : 'Sign up'}</button>
    </Form>
  );
}
````
Here, we're using it to submit a newsletter form which is a shared component (may appear in multiple part
of our app) without actually loading the route it's action for.
- ``data`` contains the data returns by the loader/action used
- ``state`` here tell us whether the fetcher behind-the-scene, completed its loader/action that was triggered.

### Deferring data fetching with defer()
We may end up with some component which need data that take time to load.
We can and should then defer those data fetching.\
Important to notice that while using ``defer()``, we shouldn't therefore return a response
after loading our data.

````javascript
import { Suspense } from 'react'
import EventsList from "../../components/Section20.2/EventsList";
import {Await, defer, json, useLoaderData} from "react-router-dom";

const dataLoader = async () => {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    throw json({message: 'Could not fetch events'}, {status: 500})
  } else {
    // If we want to use defer, we can't return a response anymore
    const data = await response.json()
    return data.events
  }
}

export const eventLoader = () => {
  return defer({
    events: dataLoader()
  })
}

function EventsPage() {
  const { events } = useLoaderData() // we get here the object gave to defer() in eventLoader()

  // We must wrap Await by Suspense 
  // Supsense here, is used to show a fallback while the data needed is been loading
  return <Suspense fallback={<p>Loading...</p>}>
    {/*Await receive one of our defered values as resolver, 
     will wait to the data to be there 
     and then call the function it receives as children with the loaded data*/}
    <Await resolve={events}>
      { loadedEvents => <EventsList events={loadedEvents} /> }
    </Await>
  </Suspense>
}

export default EventsPage;
````
We can even have multiple deferred data loading on the same page.
````javascript
export const eventItemLoader = async ({params}) => {
  return defer({
    event: await loadEventItem(params.eventId),
    events: loadEvents()
  })
}
````
Here, we are deferring the load of ``eventItem`` and ``events``. However, since we
made async the ``eventItemLoader``, we could await the loading of the ``eventItem``.
Then, event detail will be loaded before the page rendering.\
For every single deferred data usage, we have to use the ``Suspense`` component. We could wrap
all of their component rendering in one ``Suspense`` component but it will lead to a single fallback
showing.

