import SimpleInput from './Form/SimpleInput';
import BasicForm from "./Form/BasicForm";

import './App.css'

function FormApp() {
  return (
    <>
      <div className="app">
        <SimpleInput />
      </div>
      <div className="app">
        <BasicForm />
      </div>
    </>
  );
}

export default FormApp;
