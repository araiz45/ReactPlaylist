import './App.css';
// import { About } from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'
function App() {
  const [mode, setMode] = useState("light")
  const toggleModeFunc = () =>{
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212529";

    }
  }
  return (
   <>   
    <Navbar title="Util" aboutText="about us" mode={mode} toggleMode={toggleModeFunc}/>
    <div className={`container my-4`}>
      <TextForm heading="Enter your text to analyze below" mode={mode}/>
      {/* <About/> */}
    </div>
   </>
  );
}

export default App;
