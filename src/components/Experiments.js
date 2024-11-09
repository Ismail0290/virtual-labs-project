import React, { useState } from 'react';
import './Experiments.css';
import StackAnimation from './StackAnimation'; // Import the stack animation component
import QueueAnimation from './QueueAnimation'; 

import LinkedListAnimation from './LinkedListAnimation';
import Stacks from './Stack/Stacks';
import SearchingSorting from './Searchingsorting/SearchingSorting';

import Queue from './Queue/Queue';
import LinkedList from './Linkedlist/LinkedList';
import Tree from './Tree/Tree';
import Graph from './Graph/Graph';
import Pretest from './Pretest';
import Posttest from './Posttest';
import FeedbackForm from './FeedbackForm';
import TreeAnimation from './TreeAnimation';

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
    'Searching & Sorting': {
      Aim: 'To implement various searching and sorting algorithms (e.g., linear search, insertion sort) and analyze their time and space complexity...',
      Overview: <SearchingSorting />,
      Video: (
        <div className="video-container">
          <h4>Linear Search</h4>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZvmkOmJsSGc"
            title="Linear Search Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div style={{ height: '50px' }}></div> {/* Spacer */}
          <h4>Insertion Sort</h4>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7cbU21sTGEU"
            title="Insertion Sort Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ),
      Pretest: <Pretest topic="Searching & Sorting" />,
      Animation: <div>No animation available for Searching & Sorting yet</div>,
      Analysis: 'This is the analysis of the results for Searching & Sorting.',
      Posttest: <Posttest topic="Searching & Sorting" />,
      'Further Readings/References': 'References and further readings for Searching & Sorting.',
      Feedback: <FeedbackForm topic="Searching & Sorting" />
    },
    Stacks: {
      Aim: 'To implement a stack data structure...',
      Overview: <Stacks />,
      Video: (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/y4ANxMXER58"
            title="Stack Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ),
      Pretest: <Pretest topic="Stacks" />,
      Animation: <StackAnimation />, // Use StackAnimation for the animation
      Analysis: 'This is the analysis of the results for Stacks.',
      Posttest: <Posttest topic="Stacks" />,
      'Further Readings/References': 'References and further readings for Stacks.',
      Feedback: <FeedbackForm topic="Stacks" />
    },
    Queue: {
      Aim: 'To implement a queue data structure...',
      Overview: <Queue />,
      Video: (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HqeeQQryi3s"
            title="Queue Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ),
      Pretest: <Pretest topic="Queue" />,
      Animation: <QueueAnimation />, // Use QueueAnimation for the animation
      Analysis: 'This is the analysis of the results for Queue.',
      Posttest: <Posttest topic="Queue" />,
      'Further Readings/References': 'References and further readings for Queue.',
      Feedback: <FeedbackForm topic="Queue" />
    },
    LinkedList: {
      Aim: 'To implement a linked list data structure...',
      Overview: <LinkedList />,
      Video: <p>Video content for Linked List is not available at the moment.</p>,
      Pretest: <Pretest topic="LinkedList" />,
      Animation: <LinkedListAnimation />, // Use LinkedListAnimation for the animation
      Analysis: 'This is the analysis of the results for Linked List.',
      Posttest: <Posttest topic="LinkedList" />,
      'Further Readings/References': 'References and further readings for Linked List.',
      Feedback: <FeedbackForm topic="LinkedList" />
    },
    Tree: {
      Aim: 'To implement a tree data structure...',
      Overview: <Tree />,
      Video: <p>Video content for Tree is not available at the moment.</p>,
      Pretest: <Pretest topic="Tree" />,
      Animation: <TreeAnimation/>,
      Analysis: 'This is the analysis of the results for Tree.',
      Posttest: <Posttest topic="Tree" />,
      'Further Readings/References': 'References and further readings for Tree.',
      Feedback: <FeedbackForm topic="Tree" />
    },
    Graph: {
      Aim: 'To implement a graph data structure...',
      Overview: <Graph />,
      Video: <p>Video content for Graph is not available at the moment.</p>,
      Pretest: <Pretest topic="Graph" />,
      Animation: <div>No animation available for Graph yet</div>,
      Analysis: 'This is the analysis of the results for Graph.',
      Posttest: <Posttest topic="Graph" />,
      'Further Readings/References': 'References and further readings for Graph.',
      Feedback: <FeedbackForm topic="Graph" />
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
                sectionContent[selectedTopic].Animation // Directly show the animation component based on the topic
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
