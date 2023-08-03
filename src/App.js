import './App.css';
import Alert from './Components/Alert';
import { About } from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("#ffff")
  const settingColor = () =>{
      let color1 = document.getElementById("color").value;
      setColor(color1);
  }
  setInterval(() => {
      settingColor()        
  }, 1000);
  
  const showAlert = (message, type) =>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
          setAlert(null)
        }, 1500);
    }
  const toggleModeFunc = () =>{
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      showAlert("Dark Mode Enable", "success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212529";
      showAlert("Dark Mode Disabled", "success")
    }
  }
  const router = createBrowserRouter([{
    path: "/",
    element: (
      <>
      <Navbar title="Util" aboutText="about us" mode={mode} toggleMode={toggleModeFunc} color={color}/>
      <Alert alert={alert}/>
      <div className={`container my-4`}>
        <TextForm heading="Enter your text to analyze below" mode={mode} showAlert={showAlert} color={color}/>
      </div>
      </>
    )
  }, {
    path: "/about",
    element: (
      <>
        <Navbar title="Util" aboutText="about us" mode={mode} toggleMode={toggleModeFunc} color={color}/>
        <Alert alert={alert}/>
        <div className={`container my-4`}>
            <About/>
        </div>
      </>
    )
  }])
  return (
    <RouterProvider exact router={router}/>
  );
}

export default App;
