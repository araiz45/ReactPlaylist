import './App.css';
// import { About } from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
   <>   
    <Navbar title="Util" aboutText="about us"/>
    <div className="container my-4">
      <TextForm heading="Enter your text to analayze below"/>
      {/* <About/> */}
    </div>
   </>
  );
}

export default App;
