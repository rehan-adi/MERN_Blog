import Login from "./Register&Login/Login";
import Register from "./Register&Login/Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";


function App() {  
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>   
      <Route element={ <Login />} path="/" />   
      <Route element={ <Register />} path="/register" />   
      <Route element={ <Home />} path="/home" />   
    </Routes>
    </BrowserRouter>
  )
}

export default App;
