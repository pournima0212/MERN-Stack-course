
import { useState } from "react";

function App() {
  const [name, setName] = useState()
  const [showName, setShowName] = useState(false);

  const handleOnChange = (e) => {
    console.log(e.target.value, "===")
    setName(e.target.value);
  };

  const handleSubmit = () => {
    setShowName(true);
  };
  return (
    <>

      <input name="name" placeholder="Enter Your Name" onChange={handleOnChange} />

      <button onClick={handleSubmit} >Submit</button>

      {showName && <h1>{name}</h1>}

    </>
  );
}

export default App
