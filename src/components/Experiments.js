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
import FeedbackForm from './FeedbackForm';

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
      Animation: '',
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
            src="https://www.youtube.com/embed/WrHKixGK-eQ"
            title="Stacks Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ),
      Pretest: <Pretest topic="Stacks" />,
      Animation: '',
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
      Animation: '',
      Analysis: 'This is the analysis of the results for Queue.',
      Posttest: <Posttest topic="Queue" />,
      'Further Readings/References': 'References and further readings for Queue.',
      Feedback: <FeedbackForm topic="Queue" />
    },
    LinkedList: {
      Aim: 'To implement a linked list data structure...',
      Overview: <LinkedList />,
      Video: (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
            title="Linked List Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ),
      Pretest: <Pretest topic="LinkedList" />,
      Animation: '',
      Analysis: 'This is the analysis of the results for Linked List.',
      Posttest: <Posttest topic="LinkedList" />,
      'Further Readings/References': 'References and further readings for Linked List.',
      Feedback: <FeedbackForm topic="LinkedList" />
    },
    Tree: {
      Aim: 'To implement a tree data structure...',
      Overview: <Tree />,
      Video: (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
            title="Tree Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ),
      Pretest: <Pretest topic="Tree" />,
      Animation: '',
      Analysis: 'This is the analysis of the results for Tree.',
      Posttest: <Posttest topic="Tree" />,
      'Further Readings/References': 'References and further readings for Tree.',
      Feedback: <FeedbackForm topic="Tree" />
    },
    Graph: {
      Aim: 'To implement a graph data structure...',
      Overview: <Graph />,
      Video: (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
            title="Graph Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ),
      Pretest: <Pretest topic="Graph" />,
      Animation: '',
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
