import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

// import ExpenseApp from './components/ExpenseApp/App';
import reportWebVitals from './reportWebVitals';
// import FormApp from "./components/Section16/App";
// import GoalApp from "./components/CourseGoals/App";
// import Section8App from "./components/Section8/App";
// import LoginApp from "./components/section10/App"
// import {AuthContextProvider} from "./store/Section10/auth-context";
// import FoodApp from "./components/Section11Jsx/App";
// import MovieApp from "./components/Section14/App";
// import CounterApp from "./components/Section15/App";
// import HttpApp from "./components/Section15.2/App";
import App from "./App";
import store from './store/Section18/index'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*todo: add a first page with two btn that let choose the app we wanna use between those two*/}
    {/*<ExpenseApp/>*/}
    {/*<GoalApp/>*/}
    {/*<Section8App />*/}
    {/*<AuthContextProvider><LoginApp /></AuthContextProvider>*/}
    {/*<FoodApp />*/}
    {/*<MovieApp />*/}
    {/*<CounterApp/>*/}
    {/*<HttpApp />*/}
    {/*<FormApp/>*/}
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
