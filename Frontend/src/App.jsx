import Login from "./Register&Login/Login";
import Register from "./Register&Login/Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";


function App() {  
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>   
      <Route element={ <Register />} path="/register" />   
      <Route element={ <Login />} path="/login" />   
    </Routes>
    </BrowserRouter>
  )
}

export default App;
