import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ExampleCustomHook from './AllHooks/ExampleCustomHook';
import { useState } from 'react';
import ExampleUseMemo from './AllHooks/ExampleUseMemo';
import ExampleUseReducer from './AllHooks/ExampleUseReducer';
import ExampleUseRefHook from './AllHooks/ExampleUseRefHook';

function App() {
  
const [showCustomHook, setShowCustomHook] = useState(false)
const [showUseMemo, setShowUseMemo] = useState(false)
const [showUseReducer, setShowUseReducer] = useState(false);
const [showUseRef, setShowUseRef] = useState(false);

const handleCustomHook = () => {
  try {
    setShowUseMemo(false)
    setShowUseReducer(false)
    setShowUseRef(false)
    setShowCustomHook(true)
  } catch (error) {
    console.log(error)
  }
}

const handleUseMemo = () => {
  try {
    setShowCustomHook(false)
    setShowUseReducer(false)
    setShowUseRef(false)
    setShowUseMemo(true)
  } catch (error) {
   console.log(error) 
  }
}

const handleUseReducer = () => {
  try {
    setShowCustomHook(false)
    setShowUseMemo(false)
    setShowUseRef(false)
    setShowUseReducer(true)
  } catch (error) {
    console.log(error)
  }
}

const handleUseRef = () => {
  try {
    setShowCustomHook(false)
    setShowUseMemo(false)
    setShowUseReducer(false)
    setShowUseRef(true)
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className="">
      <div className='container'>
        <div className='row'>
          <div className='col-md-1 mx-2'>
            <button className='btn btn-primary'onClick={handleCustomHook}>customHook</button>
          </div>
          <div className='col-md-1 mx-2'>
            <button className='btn btn-primary' onClick={handleUseMemo}>useMemo</button>
          </div>
          <div className='col-md-1 mx-2'>
            <button className='btn btn-primary' onClick={handleUseReducer}>useReducer</button>
          </div>
          <div className='col-md-1 mx-2'>
            <button className='btn btn-primary' onClick={handleUseRef}>useRef</button>
          </div>
        </div>
      </div>
      {showCustomHook && <ExampleCustomHook /> }
      {showUseMemo && <ExampleUseMemo/>}
      {showUseReducer && <ExampleUseReducer/>}
      {showUseRef && <ExampleUseRefHook/>}
    </div>
  );
}

export default App;
