import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from './Components/home';
import Work from './Components/work';
import Contact from './Components/contact';

function App() {
  
  return(
    <>

      <Router>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/work" element = {<Work/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App
