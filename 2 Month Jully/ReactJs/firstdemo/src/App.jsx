import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavBar from './components/MainNavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './assets/pages/Home';
import AboutUs from './assets/pages/AboutUs';
import Career from './assets/pages/Career';
// import { useState } from "react";
// import Buttons from './Buttons';

// function App() {
//   const [name, setName] = useState(); //Hooks

//   const [showName, setShowName] = useState(false);

//   const handleOnChange = (e) => {
//     console.log(e.target.value);
//     setName(e.target.value);
//   };

//   const handleSubmit = () => {
//     setShowName(true);
//   };

//   const [ButtonsData, setButtonsData] = useState(
//     [
//       { title: "Button - 1" },
//       { title: "Button - 2" },
//       { title: "Button - 3" },
//       { title: "Button - 4" },
//     ]
//   );


//   return (
//     <> 
//       <input
//         name="name"
//         placeholder="Enter Your Name"
//         onChange={handleOnChange}
//       />

//       <button onClick={handleSubmit}>Submit</button>
//       {showName && <h1>{name}</h1>}

//       {cardData.map((each) => (
//         <Buttons title={each.title} />
//       ))}

//     </>
//   );
// }

const App = () => {
  return (
    <BrowserRouter>
      <MainNavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/career' element={<Career />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )}

export default App

