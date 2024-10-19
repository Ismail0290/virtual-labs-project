import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Alm from './components/Alm';
import Theory from './components/Theory';
import Pretest from './components/Pretest';
import Procedure from './components/Procedure';
import Posttest from './components/Posttest';
import Reference from './components/Reference';
import Feedback from './components/Feedback';
import Home from './components/Home';
import About from './components/About';
import Experiments from './components/Experiments';
import Contact from './components/Contact';
import SearchingSorting from './components/SearchingSorting';
import Stacks from './components/Stacks';
import Queue from './components/Queue';
import LinkedList from './components/LinkedList';
import Tree from './components/Tree';
import Graph from './components/Graph';

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
        <Route path="/alm" element={<Alm />} />
        <Route path="/theory" element={<Theory />} />
        <Route path="/pretest" element={<Pretest />} />
        <Route path="/procedure" element={<Procedure />} />
        <Route path="/posttest" element={<Posttest />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/feedback" element={<Feedback />} />
        {/* New routes for each flexbox item */}
        <Route path="/searching-sorting" element={<SearchingSorting />} />
        <Route path="/stacks" element={<Stacks />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/linked-list" element={<LinkedList />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/graph" element={<Graph />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
