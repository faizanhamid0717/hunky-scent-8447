// import { LandingPage } from './Body/LandingPage';
import './App.css';
import Navbar from './components/Navebar';
import { AllRoutes } from './components/AllRoutes';
// import { Cartpage } from './components/Cartpage';

import Fotter from './Body/FotterPage';

function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <AllRoutes/>
      <Fotter/>
       
    </div>
  );
}

export default App;
