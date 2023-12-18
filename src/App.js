import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footersec from './Assets/components/Footer';
import HeaderSec from './Assets/components/Header';  
import SearchLocation from './Assets/components/search';
import { Route, Routes } from 'react-router-dom';
import Infosec from './Assets/components/Info';

function App() {
  return (
    <div>
      <HeaderSec/> 
      <Routes>
        <Route path="/" element={<SearchLocation />} /> 
        <Route path="/redirected" element={<Infosec />} />
      </Routes>  
      <Footersec/> 
    </div>
  );
}

export default App;
