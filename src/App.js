import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
   <>   
    <Navbar title="Util" aboutText="about us"/>
    <div className="container my-4">
      <TextForm heading="Enter your text to analayze below"/>
    </div>
   </>
  );
}

export default App;
