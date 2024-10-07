import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Experiments.css';

const Experiments = () => {
  const navigate = useNavigate();

  return (
    <div className="experiments-container">
      <h1>Experiments</h1>
      <p>This is the experiments page.</p>

      <div className="flexbox-container">
        <div className="flexbox-item" onClick={() => navigate('/searching-sorting')}>Searching & Sorting</div>
        <div className="flexbox-item" onClick={() => navigate('/stacks')}>Stacks</div>
        <div className="flexbox-item" onClick={() => navigate('/queue')}>Queue</div>
        <div className="flexbox-item" onClick={() => navigate('/linked-list')}>Linked List</div>
        <div className="flexbox-item" onClick={() => navigate('/tree')}>Tree</div>
        <div className="flexbox-item" onClick={() => navigate('/graph')}>Graph</div>
      </div>
    </div>
  );
};

export default Experiments;
