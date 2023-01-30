import React  from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import './App.css';
import { Login } from "./components/Login.jsx";
import { Register } from "./components/Register.jsx";
import Welcome from "./components/Welcome";

function App() {
  // const [currentForm, setcurrentForm] = useState('Login')
  // const toggleForm = (formName)=>{
  //   setcurrentForm(formName);
  // }

  return(
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path='/' element={<Login/>} /> 
      <Route path="/signup" element={<Register />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
    
     {/* <div className="App">
      {
        currentForm === "Login"?  <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />
      }
     
    </div>  */}
    </div>
    </BrowserRouter>
  );
  }

  
export default App;