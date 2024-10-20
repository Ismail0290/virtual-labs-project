import React, { useState } from 'react';

const Posttest = ({ topic }) => {
    const questions = {
        'Searching & Sorting': [
          { question: 'Which of the following accurately describes the merge step in the algorithm (assume ascending order sort)?', 
            options: [' We directly merge with 1 sub-array after the other.', 
                      'We iterate through each of the concerned sub-arrays simultaneously where we add the smaller of the elements under consideration at that point to the merged array and advance the index for the array from which the element was selected.',
                      'We alternate between the elements of the two sub-arrays, i.e, first we pick one element from the 1st sub-array and then pick another element at the same index in the other sub-array',
                      'None of the above'], 
            answer: 'We iterate through each of the concerned sub-arrays simultaneously where we add the smaller of the elements under consideration at that point to the merged array and advance the index for the array from which the element was selected.' },

          { question: 'Binary Search is an example of _______ algorithm.',
            options: ['Greedy', 'Dynamic Programming', 'Backtracking', 'None of the above'], 
            answer: 'None of the above' },

          { question: 'What is the space complexity of binary search implemented using recursion?',
            options: ['O(1)','O(N)','O(N log N)','O(log N)'], 
            answer: 'O(log N)' },

          { question: 'In an array, what would be the time complexity to find the closest upper bound of a given number?',
                options: ['O(log N)','O(N log N)','O(1)','O(N)'], 
                answer: 'O(N)' },
        ],
        Stacks: [
          { question: 'What is the advantage of using linked list implementation of stack over array implementation?', 
            options: [' Pushing into the stack is faster in linked list implementation', 
                      'Popping from the stack is faster in linked list implementation.', 
                      'Linked list has a variable size, unlike an array.', 
                      'None of the above'], 
            answer: 'Linked list has a variable size, unlike an array.' },

          { question: ' In a stack, if a user tries to remove an element from an empty stack it is called _________', 
            options: ['Underflow', 'Empty collection', 'Overflow', 'Garbage Collection'], 
            answer: 'Underflow' },

          { question: 'The result of evaluating the postfix expression 5, 4, 6, +, *, 4, 9, 3, /, +, * is?', 
            options: ['600', '350', '650', '588'], 
            answer: '350' },

          { question: 'Convert the following infix expressions into its equivalent postfix expressions. (A + B ⋀ D)/(E - F)+G', 
                options: ['(A B D ⋀ + E F - / G +)', 
                          '(A B D +⋀ E F - / G +)', 
                          '(A B D ⋀ + E F/- G +)', 
                          ' (A B D E F + ⋀ / - G +)'], 
                answer: '(A B D ⋀ + E F - / G +)' },
        ],
        Queue: [
          { question: 'What would be the time complexity to pop an element from the stack and dequeue an element from the queue ?', 
            options: [' O(n) and O(1)', 
                      'O(1) and O(n)', 
                      'O(1) and O(1)', 
                      ' O(n) and O(n)'], 
            answer: 'O(1) and O(1)' },

          { question: 'Which of the following is the best to implement a priority queue?', 
            options: ['Heap', 'Array', 'Linked List', 'Tree'], 
            answer: 'overflow' },

          { question: 'What is the minimum number of stacks needed to implement a queue?', 
            options: ['1','2','3' ,'None'], 
            answer: '2' },

        { question: 'What will be the front and rear of an initially empty queue after the following operations - enqueue(2), enqueue(11), enqueue(3), dequeue(), enqueue(8), dequeue(), enqueue(5), dequeue()', 
            options: ['11,8', 
                      '3,11', 
                      '8,5', 
                      '5,8'], 
            answer: '8,5' },
        ],
        LinkedList: [
          { question: 'What would be the time complexity to pop an element from the stack and dequeue an element from the queue ?', 
            options: [' O(n) and O(1)', 
                      'O(1) and O(n)', 
                      'O(1) and O(1)', 
                      ' O(n) and O(n)'], 
            answer: 'O(1) and O(1)' },

          { question: 'Which of the following is the best to implement a priority queue?', 
            options: ['Heap', 'Array', 'Linked List', 'Tree'], 
            answer: 'overflow' },

          { question: 'What is the minimum number of stacks needed to implement a queue?', 
            options: ['1','2','3' ,'None'], 
            answer: '2' },

        { question: 'What will be the front and rear of an initially empty queue after the following operations - enqueue(2), enqueue(11), enqueue(3), dequeue(), enqueue(8), dequeue(), enqueue(5), dequeue()', 
            options: ['11,8', 
                      '3,11', 
                      '8,5', 
                      '5,8'], 
            answer: '8,5' },
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
    <div className="posttest">
      <h3>Posttest for {topic}</h3>

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

      <button onClick={handleSubmit}>Submit Posttest</button>

      {score !== null && (
        <div className="score">
          <h4>Your Score: {score}/{questions[topic].length}</h4>
        </div>
      )}
    </div>
  );
};

export default Posttest;
