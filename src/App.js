import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Pretest from './components/Pretest';
import Posttest from './components/Posttest';
import Home from './components/Home';
import About from './components/About';
import Experiments from './components/Experiments';
import Contact from './components/Contact';
import SearchingSorting from './components/Searchingsorting/SearchingSorting';
import Stacks from './components/Stack/Stacks';
import Queue from './components/Queue/Queue';
import LinkedList from './components/Linkedlist/LinkedList';
import Tree from './components/Tree/Tree';
import Graph from './components/Graph/Graph';

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
        <Route path="/pretest" element={<Pretest />} />
        <Route path="/posttest" element={<Posttest />} />
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
