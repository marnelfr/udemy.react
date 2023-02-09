import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ExpenseApp from './components/ExpenseApp/App';
import reportWebVitals from './reportWebVitals';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*todo: add a first page with two btn that let choose the app we wanna use between those two*/}
    {/*<ExpenseApp/>*/}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
