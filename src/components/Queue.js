import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import QueueElement from './QueueElement'; // Make sure to import QueueElement
import './Queue.css';

const Queue = () => {
    const [queue, setQueue] = useState([]);
    const [value, setValue] = useState('');

    const transitions = useTransition(queue, {
        from: { transform: 'translateX(-100%)', opacity: 0 },
        enter: { transform: 'translateX(0)', opacity: 1 },
        leave: { transform: 'translateX(100%)', opacity: 0 },
        keys: queue.map((_, index) => index),
    });

    const handleEnqueue = () => {
        if (value) {
            setQueue([...queue, value]);
            setValue('');
        }
    };

    const handleDequeue = () => {
        const newQueue = [...queue];
        newQueue.shift();
        setQueue(newQueue);
    };

    return (
        <div className="queue-container">
            <h1>Queue</h1>
            <p>This page contains information about the Queue data structure and interactive visualization.</p>
            <div className="controls">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter value"
                />
                <button onClick={handleEnqueue}>Enqueue</button>
                <button onClick={handleDequeue}>Dequeue</button>
            </div>
            <div className="queue">
                {transitions((style, item) => (
                    <animated.div style={style} key={item}>
                        <QueueElement value={item} />
                    </animated.div>
                ))}
            </div>
        </div>
    );
};

export default Queue;
