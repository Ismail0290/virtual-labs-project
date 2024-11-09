// QueueAnimation.js

import React, { useState } from 'react';
import './QueueAnimation.css'; // Assuming you have a global CSS file for animations

const QueueAnimation = () => {
  const [queue, setQueue] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const enqueue = () => {
    if (!inputValue) return;
    const newQueue = [...queue, inputValue];
    setQueue(newQueue);
    setInputValue('');
  };

  const dequeue = () => {
    if (queue.length === 0) return;
    const newQueue = queue.slice(1); // Remove the first element
    setQueue(newQueue);
  };

  const startOver = () => {
    setQueue([]);
  };

  return (
    <div className="queue-container">
      <div className="queue-display">
        <div className="queue-line">
          {queue.map((item, index) => (
            <div key={index} className="queue-item">
              {item}
            </div>
          ))}
        </div>
        {queue.length > 0 && (
          <div className="queue-labels">
            <span className="queue-head">head</span>
            <span className="queue-tail">tail</span>
          </div>
        )}
      </div>

      <div className="queue-controls">
        <label>
          Enter a value: 
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button onClick={enqueue}>Enqueue</button>
        <button onClick={dequeue}>Dequeue</button>
        <button onClick={startOver}>Start Over</button>
      </div>
    </div>
  );
};

export default QueueAnimation;
