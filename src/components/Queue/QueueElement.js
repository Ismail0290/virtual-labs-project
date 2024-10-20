import React from 'react';
import './QueueElement.css';

const QueueElement = ({ value }) => {
    return (
        <div className="queue-element">
            {value}
        </div>
    );
};

export default QueueElement;
