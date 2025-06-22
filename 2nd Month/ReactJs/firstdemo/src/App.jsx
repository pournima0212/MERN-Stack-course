import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Card from './Card';

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

  const [cardData, setCardData] = useState(
    [
      { title: "Title - 1" },
      { title: "Title - 2" },
      { title: "Title - 3" },
      { title: "Title - 4" },
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
        <Card title={each.title} />
      ))}

    </>
  );
}

export default App

