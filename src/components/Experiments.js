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
import FeedbackForm from './FeedbackForm'; // Import the FeedbackForm component

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
      Pretest: <Pretest topic="Searching & Sorting" />,
      Animation: '',
      Analysis: 'This is the analysis of the results for Searching & Sorting.',
      Posttest: <Posttest topic="Searching & Sorting" />,
      'Further Readings/References': 'References and further readings for Searching & Sorting.',
      Feedback: <FeedbackForm topic="Searching & Sorting" /> // Use FeedbackForm component
    },
    Stacks: {
      Aim: 'To implement a stack data structure. Perform basic operations such as push, pop, peek, and check for stack overflow/underflow. This will demonstrate how LIFO (Last In First Out) operations work in applications like expression evaluation, undo features in software, and more.',
      Overview: <Stacks />,
      Video: 'This section contains video resources related to Stacks.',
      Pretest: <Pretest topic="Stacks" />,
      Animation: '',
      Analysis: 'This is the analysis of the results for Stacks.',
      Posttest: <Posttest topic="Stacks" />,
      'Further Readings/References': 'References and further readings for Stacks.',
      Feedback: <FeedbackForm topic="Stacks" /> // Use FeedbackForm component
    },
    Queue: {
      Aim: 'To implement a stack data structure...',
      Overview: <Queue/>,
      Video: 'This section contains video resources related to Stacks.',
      Pretest: <Pretest topic="Queue" />,  // Pass data structure to Pretest
      Animation: '',
      Analysis: 'This is the analysis of the results for Stacks.',
      Posttest: <Posttest topic="Queue" />,
      'Further Readings/References': 'References and further readings for Queue.',
      Feedback: <FeedbackForm topic="Queue" /> // Use FeedbackForm component
    },
    LinkedList: {
      Aim: 'To implement a linked list data structure.',
      Overview: <LinkedList />,
      Video: 'This section contains video resources related to Linked List.',
      Pretest: <Pretest topic="LinkedList" />,
      Animation: '',
      Analysis: 'This is the analysis of the results for Linked List.',
      Posttest: <Posttest topic="LinkedList" />,
      'Further Readings/References': 'References and further readings for Linked List.',
      Feedback: <FeedbackForm topic="LinkedList" /> // Use FeedbackForm component
    },
    Tree: {
      Aim: 'To implement a tree data structure.',
      Overview: <Tree />,
      Video: 'This section contains video resources related to Tree.',
      Pretest: <Pretest topic="Tree" />,
      Animation: '',
      Analysis: 'This is the analysis of the results for Tree.',
      Posttest: <Posttest topic="Tree" />,
      'Further Readings/References': 'References and further readings for Tree.',
      Feedback: <FeedbackForm topic="Tree" /> // Use FeedbackForm component
    },
    Graph: {
      Aim: 'To implement a graph data structure.',
      Overview: <Graph />,
      Video: 'This section contains video resources related to Graph.',
      Pretest: <Pretest topic="Graph" />,
      Animation: '',
      Analysis: 'This is the analysis of the results for Graph.',
      Posttest: <Posttest topic="Graph" />,
      'Further Readings/References': 'References and further readings for Graph.',
      Feedback: <FeedbackForm topic="Graph" /> // Use FeedbackForm component
    }
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
