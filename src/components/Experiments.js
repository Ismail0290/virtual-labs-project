import React, { useState } from 'react';
import './Experiments.css';
import Animation from './Animation'; // Import the animation component
import Stacks from './Stacks'; // Import the Stacks component
import SearchingSorting from './SearchingSorting'; // Import the Searching & Sorting component
import Queue from './Queue'; // Import the Queue component
import LinkedList from './LinkedList'; // Import the Linked List component
import Tree from './Tree'; // Import the Tree component
import Graph from './Graph'; // Import the Graph component

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
      Aim: 'To implement various searching and sorting algorithms (e.g., linear search, insertion sort) and analyze their time and space complexity. This will help in understanding how to efficiently retrieve and arrange data in various real-world scenarios..',
      Overview: <SearchingSorting />, // Content specific to Searching & Sorting
      Video: 'This section contains video resources related to Searching & Sorting.',
      Pretest: 'This is the pretest for the Searching & Sorting experiment.',
      Animation: '', // Empty because we're displaying the animation component
      Analysis: 'This is the analysis of the results for Searching & Sorting.',
      Posttest: 'This is the posttest for the Searching & Sorting experiment.',
      'Further Readings/References': 'References and further readings for Searching & Sorting.',
      Feedback: 'Provide your feedback here for Searching & Sorting.'
    },
    Stacks: {
      Aim: 'TTo implement a stack data structure using both array and linked list representations. Perform basic operations such as push, pop, peek, and check for stack overflow/underflow. This will demonstrate how LIFO (Last In First Out) operations work in applications like expression evaluation, undo features in software, and more.',
      Overview: <Stacks />, // Content specific to Stacks
      Video: 'This section contains video resources related to Stacks.',
      Pretest: 'This is the pretest for the Stacks experiment.',
      Animation: '', // Empty because we're displaying the animation component
      Analysis: 'This is the analysis of the results for Stacks.',
      Posttest: 'This is the posttest for the Stacks experiment.',
      'Further Readings/References': 'References and further readings for Stacks.',
      Feedback: 'Provide your feedback here for Stacks.'
    },
    Queue: {
      Aim: 'To implement a queue data structure using both array and linked list representations. Perform basic operations such as enqueue, dequeue, peek, and check for queue overflow/underflow. This experiment focuses on understanding FIFO (First In First Out) operations used in scheduling algorithms, buffering, and task management.',
      Overview: <Queue />, // Content specific to Queue
      Video: 'This section contains video resources related to Queue.',
      Pretest: 'This is the pretest for the Queue experiment.',
      Animation: '', // Empty because we're displaying the animation component
      Analysis: 'This is the analysis of the results for Queue.',
      Posttest: 'This is the posttest for the Queue experiment.',
      'Further Readings/References': 'References and further readings for Queue.',
      Feedback: 'Provide your feedback here for Queue.'
    },
    'Linked List': {
      Aim: 'To implement different types of linked lists (singly linked list, doubly linked list, circular linked list) and perform basic operations such as insertion, deletion, traversal, and searching. The experiment aims to provide hands-on experience with dynamic memory allocation and pointer manipulation.',
      Overview: <LinkedList />, // Content specific to Linked List
      Video: 'This section contains video resources related to Linked List.',
      Pretest: 'This is the pretest for the Linked List experiment.',
      Animation: '', // Empty because we're displaying the animation component
      Analysis: 'This is the analysis of the results for Linked List.',
      Posttest: 'This is the posttest for the Linked List experiment.',
      'Further Readings/References': 'References and further readings for Linked List.',
      Feedback: 'Provide your feedback here for Linked List.'
    },
    Tree: {
      Aim: 'To implement a binary tree and its variants (e.g., binary search tree, AVL tree, heap) and perform basic operations such as insertion, deletion, and traversal (in-order, pre-order, post-order). This will aid in understanding hierarchical data storage and efficient searching techniques used in databases and file systems.',
      Overview: <Tree />, // Content specific to Tree
      Video: 'This section contains video resources related to Tree.',
      Pretest: 'This is the pretest for the Tree experiment.',
      Animation: '', // Empty because we're displaying the animation component
      Analysis: 'This is the analysis of the results for Tree.',
      Posttest: 'This is the posttest for the Tree experiment.',
      'Further Readings/References': 'References and further readings for Tree.',
      Feedback: 'Provide your feedback here for Tree.'
    },
    Graph: {
      Aim: 'To implement a graph data structure using adjacency matrix and adjacency list representations. Perform operations like depth-first search (DFS) and breadth-first search (BFS). This experiment helps in understanding how complex networks (like social networks, road maps, etc.) are modeled and traversed in computer science.',
      Overview: <Graph />, // Content specific to Graph
      Video: 'This section contains video resources related to Graph.',
      Pretest: 'This is the pretest for the Graph experiment.',
      Animation: '', // Empty because we're displaying the animation component
      Analysis: 'This is the analysis of the results for Graph.',
      Posttest: 'This is the posttest for the Graph experiment.',
      'Further Readings/References': 'References and further readings for Graph.',
      Feedback: 'Provide your feedback here for Graph.'
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
                // Render the component or text content for the selected section
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
