import React, { useState } from 'react';
import './Experiments.css';
import Animation from './Animation'; // Import the animation component

const Experiments = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSection, setSelectedSection] = useState('Aim');

  const sectionNavItems = [
    'Aim',
    'Overview',
    'Video',
    'Pretest',
    'Animation',
    'Analysis',
    'Posttest',
    'Further Readings/References',
    'Feedback'
  ];

  const sectionContent = {
    Aim: 'This is the aim of the experiment.',
    Overview: 'This is the overview of the experiment.',
    Video: 'This section contains video resources related to the experiment.',
    Pretest: 'This is the pretest for the experiment.',
    Animation: '', // Empty because we're displaying the animation component
    Analysis: 'This is the analysis of the results.',
    Posttest: 'This is the posttest for the experiment.',
    'Further Readings/References': 'References and further readings.',
    Feedback: 'Provide your feedback here.'
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setSelectedSection('Aim');
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="experiments-container">
      <h1>Experiments</h1>

      {!selectedTopic && (
        <div className="flexbox-container">
          <div className="flexbox-item" onClick={() => handleTopicClick('Searching & Sorting')}>Searching & Sorting</div>
          <div className="flexbox-item" onClick={() => handleTopicClick('Stacks')}>Stacks</div>
          <div className="flexbox-item" onClick={() => handleTopicClick('Queue')}>Queue</div>
          <div className="flexbox-item" onClick={() => handleTopicClick('Linked List')}>Linked List</div>
          <div className="flexbox-item" onClick={() => handleTopicClick('Tree')}>Tree</div>
          <div className="flexbox-item" onClick={() => handleTopicClick('Graph')}>Graph</div>
        </div>
      )}

      {selectedTopic && (
        <div className="experiment-details">
          <h2>{selectedTopic} Experiment</h2>

          <div className="experiment-layout">
            <div className="experiment-nav">
              {sectionNavItems.map((section) => (
                <button
                  key={section}
                  className={`nav-item ${selectedSection === section ? 'active' : ''}`}
                  onClick={() => handleSectionClick(section)}
                >
                  {section}
                </button>
              ))}
            </div>

            <div className="experiment-content">
              <h3>{selectedSection}</h3>
              
              {selectedSection === 'Animation' ? (
                <Animation topic={selectedTopic} /> // Pass selectedTopic as a prop to Animation component
              ) : (
                <p>{sectionContent[selectedSection]}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experiments;
  
