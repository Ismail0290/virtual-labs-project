import React, { useState } from 'react';
import './Experiments.css';

const Experiments = () => {
  const [selectedTopic, setSelectedTopic] = useState(null); // Topic selected from flexbox
  const [selectedSection, setSelectedSection] = useState('Aim'); // Section selected within the experiment

  // Updated list of sections to display in the experiment
  const sectionNavItems = [
    'Aim',
    'Overview',
    'Video', // Changed from Recap to Video
    'Pretest',
    'Animation', // Changed from Code Assessment to Animation
    'Analysis',
    'Posttest',
    'Further Readings/References',
    'Feedback'
  ];

  // Content for each section
  const sectionContent = {
    Aim: 'This is the aim of the experiment.',
    Overview: 'This is the overview of the experiment.',
    Video: 'This section contains video resources related to the experiment.', // Updated content
    Pretest: 'This is the pretest for the experiment.',
    Animation: 'This section explains the animation related to the experiment.', // Updated content
    Analysis: 'This is the analysis of the results.',
    Posttest: 'This is the posttest for the experiment.',
    'Further Readings/References': 'References and further readings.',
    Feedback: 'Provide your feedback here.'
  };

  // Handle flexbox topic click
  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setSelectedSection('Aim'); // Default section when a topic is clicked
  };

  // Handle section click within the experiment
  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="experiments-container">
      <h1>Experiments</h1>

      {/* Flexbox container to show topics */}
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

      {/* Conditionally render the selected experiment's sections */}
      {selectedTopic && (
        <div className="experiment-details">
          <h2>{selectedTopic} Experiment</h2>

          <div className="experiment-layout">
            {/* Section navigation (rendered vertically on the left) */}
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

            {/* Content area for the selected section */}
            <div className="experiment-content">
              <h3>{selectedSection}</h3>
              <p>{sectionContent[selectedSection]}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experiments;
