// src/components/Animation.js
import React, { useState } from 'react';
import './StackAnimation.css';

const StackSimulation = () => {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Push a new item to the top of the stack
  const handlePush = () => {
    if (inputValue) {
      setStack([inputValue, ...stack]); // Add new value at the beginning of the array
      setInputValue("");
    }
  };

  // Pop the top item from the stack
  const handlePop = () => {
    if (stack.length > 0) {
      const newStack = stack.slice(1); // Remove the first element (top of the stack)
      setStack(newStack);
    } else {
      alert("The stack is empty!");
    }
  };

  // Peek at the top item of the stack
  const handlePeek = () => {
    if (stack.length > 0) {
      alert(`The top element is ${stack[0]}`);
    } else {
      alert("The stack is empty!");
    }
  };

  return (
    <div className="stack-container">
      <h3>Stack Simulation</h3>
      
      <div className="stack">
        {stack.map((item, index) => (
          <div key={index} className="stack-item">
            {item}
          </div>
        ))}
      </div>
      
      <div className="controls">
        <input
          type="number"
          placeholder="Enter a value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
        <button onClick={handlePeek}>Peek</button>
      </div>
    </div>
  );
};


export default StackSimulation;
