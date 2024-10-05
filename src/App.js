import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Alm from './components/Alm';
import Theory from './components/Theory';
import Pretest from './components/Pretest';
import Procedure from './components/Procedure';
import Posttest from './components/Posttest';
import Reference from './components/Reference';
import Feedback from './components/Feedback';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Experiments from './components/Experiments';
import Contact from './components/Contact';

function App() {
  return (
    <>
         <Header />
      <NavBar />
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/alm' element={<Alm />} />
        <Route path='/theory' element={<Theory />} />
        <Route path='/pretest' element={<Pretest />} />
        <Route path='/procedure' element={<Procedure />} />
        <Route path='/posttest' exact element={<Posttest />} />
        <Route path='/reference' exact element={<Reference />} />
        <Route path='/feedback' exact element={<Feedback />} />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;