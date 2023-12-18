import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import HeaderSec from './Assets/components/Header';   
import FooterSec from './Assets/components/Footer';
import HeroSec from './Assets/components/Herosection';

function App() {
  return (
    <div>
      <HeaderSec/>  
      <HeroSec/>
      <FooterSec/>
    </div>
  );
}

export default App;
