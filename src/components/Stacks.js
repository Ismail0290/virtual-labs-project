import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Stacks.css';

const Stack = () => {
    const [stack, setStack] = useState([]);
    const [value, setValue] = useState('');

    const handlePush = () => {
        if (value) {
            setStack([...stack, value]);
            setValue('');
        }
    };

    const handlePop = () => {
        const newStack = [...stack];
        newStack.pop();
        setStack(newStack);
    };

    return (
        <div className="stack-container">
            <h1>Stacks</h1>
            <p>This page contains information about the Stack data structure and interactive visualization.</p>
            <div className="controls">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter value"
                />
                <button onClick={handlePush}>Push</button>
                <button onClick={handlePop}>Pop</button>
            </div>
            <div className="stack">
                {stack.map((item, index) => (
                    <animated.div key={index}>
                        <StackElement value={item} />
                    </animated.div>
                ))}
            </div>
        </div>
    );
};

const StackElement = ({ value }) => {
    const props = useSpring({ 
        to: { opacity: 1, transform: 'translateY(0)' },
        from: { opacity: 0, transform: 'translateY(-50px)' },
    });
    return (
        <animated.div style={props} className="stack-element">
            {value}
        </animated.div>
    );
};

export default Stack;
