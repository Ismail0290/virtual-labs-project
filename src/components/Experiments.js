import React, { useState } from 'react';
import './Experiments.css';
import Animation from './Animation'; 
import Stacks from './Stack/Stacks';
import SearchingSorting from './Searchingsorting/SearchingSorting'; 
import Queue from './Queue/Queue';
import LinkedList from './Linkedlist/LinkedList';
import Tree from './Tree/Tree'; 
import Graph from './Graph/Graph';
import Pretest from './Pretest';  
import Posttest from './Posttest';  

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

  // Define content for each experiment's section
  const sectionContent = {
    'Searching & Sorting': {
      Aim: 'To implement various searching and sorting algorithms (e.g., linear search, insertion sort) and analyze their time and space complexity...',
      Overview: <SearchingSorting />,
      Video: 'This section contains video resources related to Searching & Sorting.',
      Pretest: <Pretest topic="Searching & Sorting" />, // Pass data structure to Pretest
      Animation: '',
      Analysis: 'This is the analysis of the results for Searching & Sorting.',
      Posttest: <Posttest topic="Searching & Sorting" />,
      'Further Readings/References': 'References and further readings for Searching & Sorting.',
      Feedback: 'Provide your feedback here for Searching & Sorting.'
    },
    Stacks: {
      Aim: 'To implement a stack data structure...',
      Overview: <Stacks />,
      Video: 'This section contains video resources related to Stacks.',
      Pretest: <Pretest topic="Stacks" />,  // Pass data structure to Pretest
      Animation: '',
      Analysis: 'This is the analysis of the results for Stacks.',
      Posttest: <Posttest topic="Stacks" />,
      'Further Readings/References': 'References and further readings for Stacks.',
      Feedback: 'Provide your feedback here for Stacks.'
    },
    Queue: {
      Aim: 'To implement a stack data structure...',
      Overview: <Queue />,
      Video: 'This section contains video resources related to Stacks.',
      Pretest: <Pretest topic="Queue" />,  // Pass data structure to Pretest
      Animation: '',
      Analysis: 'This is the analysis of the results for Stacks.',
      Posttest: <Posttest topic="Queue" />,
      'Further Readings/References': 'References and further readings for Stacks.',
      Feedback: 'Provide your feedback here for Stacks.'
    },
    LinkedList: {
      Aim: 'To implement a stack data structure...',
      Overview: <LinkedList />,
      Video: 'This section contains video resources related to Stacks.',
      Pretest: <Pretest topic="LinkedList" />,  
      Animation: '',
      Analysis: 'This is the analysis of the results for Stacks.',
      Posttest: <Posttest topic="LinkedList" />,
      'Further Readings/References': 'References and further readings for Stacks.',
      Feedback: 'Provide your feedback here for Stacks.'
    },
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
          <div className="flexbox-item" onClick={() => handleTopicClick('LinkedList')}>Linked List</div>
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
                <Animation topic={selectedTopic} />
              ) : (
                typeof sectionContent[selectedTopic][selectedSection] === 'string' ? (
                  <p>{sectionContent[selectedTopic][selectedSection]}</p>
                ) : (
                  sectionContent[selectedTopic][selectedSection]
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experiments;
