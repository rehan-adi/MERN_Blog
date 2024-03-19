import Login from "./Register&Login/Login";
import Register from "./Register&Login/Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {  
  return (
    <BrowserRouter>
    <Routes>   
      <Route element={ <Register />} path="/register" />   
      <Route element={ <Login />} path="/login" />   
    </Routes>
    </BrowserRouter>
  )
}

export default App;
