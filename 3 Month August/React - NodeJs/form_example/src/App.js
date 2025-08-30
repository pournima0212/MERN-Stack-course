import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ExampleCustomHook from './AllHooks/ExampleCustomHook';
import { useState } from 'react';
import ExampleUseMemo from './AllHooks/ExampleUseMemo';

function App() {
  
const [showCustomHook, setShowCustomHook] = useState(false)
const [showUseMemo, setShowUseMemo] = useState(false)
const handleCustomHook = () => {
  try {
    setShowUseMemo(false)
    setShowCustomHook(true)
  } catch (error) {
    console.log(error)
  }
}

const handleUseMemo = () => {
  try {
    setShowCustomHook(false)
    setShowUseMemo(true)
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
        </div>
      </div>
      {showCustomHook && <ExampleCustomHook /> }
      {showUseMemo && <ExampleUseMemo/>}
    </div>
  );
}

export default App;
