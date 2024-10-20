import React, { useState } from 'react';
import './Pretest.css';
import LinkedList from './Linkedlist/LinkedList';
const Pretest = ({ topic }) => {
    const questions = {
        'Searching & Sorting': [
          { question: ' How do you describe an array?', 
            options: [' Data structure having linear access time', 
                      'Data structure containing elements of similar types in contiguous storage',
                      ' A container of unique elements of similar types', 
                      'Data structure containing elements located in various locations memory which may or may not be contiguous'], 
            answer: 'Data structure containing elements of similar types in contiguous storage' },

          { question: 'What is the time complexity of traversing through all the elements in an array?',
            options: ['O(N^2)', 'O(1)', 'O(N)', 'O(log N)'], 
            answer: 'O(N)' },

          { question: ' If for large inputs, X is a better choice than Y, then',
            options: ['Y is asymptotically more efficient than X', 
                      'X is asymptotically more efficient than Y',
                      'X and Y are equivalently efficient',
                      'None of the above'], 
            answer: 'X is asymptotically more efficient than Y' },

          { question: 'What is the prerequisite to perform Binary Search ?',
                options: ['The values in the array have a maximum bound value they can take', 
                          'Array must be sorted either in ascending or descending order',
                          'Array must be broken into sub-arrays',
                          'None of the above'], 
                answer: 'Array must be sorted either in ascending or descending order' },
        ],
        Stacks: [
          { question: 'What is the principle of Stack?', 
            options: ['FIFO', 'LIFO', 'LILO', 'FILO'], 
            answer: 'LIFO' },

          { question: 'Which operation is used to insert an element into the stack?', 
            options: ['Insert', 'Append', 'Push', 'Enqueue'], 
            answer: 'Push' },

          { question: ' Which among the following represents a stack?', 
            options: ['People waiting at a counter, where the action of popping is when someone has been served at the counter', 
                          'A hand of bangles where pushing is wearing a new bangle', 
                          'A pile of plates at a dinner party', 
                          'People going around a merry-go-round'], 
            answer: 'A pile of plates at a dinner party' },

        { question: 'Consider these operations on an empty stack: push(3), push(5), pop(), push(10), push(11), pop(), push(100). What will be the stack configuration (first number is top of the stack, last is the bottom)', 
            options: ['100,10,3', 
                      '3,5,10,11,100', 
                      '3,10,100', 
                      'None of the above'], 
            answer: '100,10,3' },
        ],
        Queue: [
          { question: 'Which of the following properties is associated with a queue?', 
            options: ['First In Last Out', 
                      'First In First Out', 
                      'Last In First Out', 
                      'Last in Last Out'], 
            answer: 'First In First Out' },

          { question: 'What is the term for inserting into a full queue known as?', 
            options: ['overflow', 'underflow', 'null pointer exception', 'program won’t be compiled'], 
            answer: 'overflow' },

          { question: 'What is a dequeue?', 
            options: ['A queue with insert/delete defined for both front and rear ends of the queue', 
                          'A queue implemented with a doubly linked list', 
                          'A queue implemented with both singly and doubly linked lists', 
                          'A queue with insert/delete defined for front side of the queue'], 
            answer: 'A queue with insert/delete defined for both front and rear ends of the queue' },

        { question: ' In linked list implementation of queue, if only front pointer is maintained, which of the following operation take worst case linear time?', 
            options: ['Insertion', 
                      'Deletion', 
                      'To empty a queue', 
                      'Both Insertion and To empty a queue'], 
            answer: 'Both Insertion and To empty a queue' },
        ],
        LinkedList: [
          { question: 'A linear collection of data elements where the linear node is given by means of pointer is called?', 
            options: ['Linked list', 
                      'Node list', 
                      'Primitive list', 
                      'Unordered list'], 
            answer: 'Linked list' },

          { question: 'In linked list each node contains a minimum of two fields. One field is data field to store the data second field is?', 
            options: ['Pointer to character', 'Pointer to integer', 'Pointer to node', 'Node'], 
            answer: 'Pointer to node' },

          { question: ' The concatenation of two lists can be performed in O(1) time. Which of the following variation of the linked list can be used?', 
            options: ['Singly linked list', 
                      'Doubly linked list', 
                      'Circular doubly linked list', 
                      'Array implementation of list'], 
            answer: 'Circular doubly linked list' },

        { question: ' In linked list implementation of queue, if only front pointer is maintained, which of the following operation take worst case linear time?', 
            options: ['Insertion', 
                      'Deletion', 
                      'To empty a queue', 
                      'Both Insertion and To empty a queue'], 
            answer: 'Both Insertion and To empty a queue' },
        ],
        Tree: [
          { question: 'Which of the following properties is associated with a queue?', 
            options: ['First In Last Out', 
                      'First In First Out', 
                      'Last In First Out', 
                      'Last in Last Out'], 
            answer: 'First In First Out' },

          { question: 'What is the term for inserting into a full queue known as?', 
            options: ['overflow', 'underflow', 'null pointer exception', 'program won’t be compiled'], 
            answer: 'overflow' },

          { question: 'What is a dequeue?', 
            options: ['A queue with insert/delete defined for both front and rear ends of the queue', 
                          'A queue implemented with a doubly linked list', 
                          'A queue implemented with both singly and doubly linked lists', 
                          'A queue with insert/delete defined for front side of the queue'], 
            answer: 'A queue with insert/delete defined for both front and rear ends of the queue' },

        { question: ' In linked list implementation of queue, if only front pointer is maintained, which of the following operation take worst case linear time?', 
            options: ['Insertion', 
                      'Deletion', 
                      'To empty a queue', 
                      'Both Insertion and To empty a queue'], 
            answer: 'Both Insertion and To empty a queue' },
        ],
        Graph: [
          { question: 'Which of the following properties is associated with a queue?', 
            options: ['First In Last Out', 
                      'First In First Out', 
                      'Last In First Out', 
                      'Last in Last Out'], 
            answer: 'First In First Out' },

          { question: 'What is the term for inserting into a full queue known as?', 
            options: ['overflow', 'underflow', 'null pointer exception', 'program won’t be compiled'], 
            answer: 'overflow' },

          { question: 'What is a dequeue?', 
            options: ['A queue with insert/delete defined for both front and rear ends of the queue', 
                          'A queue implemented with a doubly linked list', 
                          'A queue implemented with both singly and doubly linked lists', 
                          'A queue with insert/delete defined for front side of the queue'], 
            answer: 'A queue with insert/delete defined for both front and rear ends of the queue' },

        { question: ' In linked list implementation of queue, if only front pointer is maintained, which of the following operation take worst case linear time?', 
            options: ['Insertion', 
                      'Deletion', 
                      'To empty a queue', 
                      'Both Insertion and To empty a queue'], 
            answer: 'Both Insertion and To empty a queue' },
        ],
        // Add other topics
      };

  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    const correctAnswers = questions[topic].filter(
      (q, i) => q.answer === userAnswers[i]
    );
    setScore(correctAnswers.length);
  };

  return (
    <div className="pretest">
      <h3>Pretest for {topic}</h3>

      {questions[topic].map((q, index) => (
        <div key={index} className="question-block">
          <h5>{q.question}</h5>
          <div>
            {q.options.map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  onChange={() => handleAnswerChange(index, option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button onClick={handleSubmit}>Submit Pretest</button>

      {score !== null && (
        <div className="score">
          <h4>Your Score: {score}/{questions[topic].length}</h4>
        </div>
      )}
    </div>
  );
};

export default Pretest;
