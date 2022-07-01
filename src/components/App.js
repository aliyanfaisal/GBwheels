
import './App.css';
import Nav from '../components/Nav'
import Collage from '../components/assets/gallery';
import  Service from './assets/service'



function App() {
  return (
    <div>
      <Nav/>
    <div className="app">
<h1>Welcome to  GBwheels</h1>

<button id='mainb'>Learn More</button>
        
      </div>
      
    <Service/>
    <Collage/>


      
    </div>
    
  );
}

export default App;
