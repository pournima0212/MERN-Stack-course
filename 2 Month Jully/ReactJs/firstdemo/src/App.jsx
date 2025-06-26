import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Buttons from './Buttons';

function App() {
  const [name, setName] = useState(); //Hooks

  const [showName, setShowName] = useState(false);

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleSubmit = () => {
    setShowName(true);
  };

  const [ButtonsData, setButtonsData] = useState(
    [
      { title: "Button - 1" },
      { title: "Button - 2" },
      { title: "Button - 3" },
      { title: "Button - 4" },
    ]
  );


  return (
    <> 
      <input
        name="name"
        placeholder="Enter Your Name"
        onChange={handleOnChange}
      />

      <button onClick={handleSubmit}>Submit</button>
      {showName && <h1>{name}</h1>}

      {cardData.map((each) => (
        <Buttons title={each.title} />
      ))}

    </>
  );
}



export default App

