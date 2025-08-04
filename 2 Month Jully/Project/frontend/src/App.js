import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./pages/auth/Login";
import Birthday from "./pages/auth/Birthday";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/"element={<Login/>}/>
    <Route path="/birthday"element={<Birthday/>}/>
    <Route path="/register"element={<Register/>}/>
    //<Route path="/home"element={<Home/>}/>
 
    </Routes>
    </BrowserRouter>
  )}

  export default App;