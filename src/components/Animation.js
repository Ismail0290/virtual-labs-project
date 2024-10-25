import React, { useEffect, useRef } from 'react';

const Animation = ({ topic }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Clear the canvas for each animation
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (topic === 'Searching & Sorting') {
      // Example animation for Searching & Sorting
      let x = 0;
      const animateSorting = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#0095DD';
        context.fillRect(x, 50, 50, 50);
        x += 2;
        if (x < canvas.width) {
          requestAnimationFrame(animateSorting);
        }
      };
      animateSorting();
    } else if (topic === 'Stacks') {
      // Example animation for Stacks
      let y = 0;
      const animateStack = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#FF4500';
        context.fillRect(50, y, 50, 50);
        y += 2;
        if (y < canvas.height) {
          requestAnimationFrame(animateStack);
        }
      };
      animateStack();
    } else if (topic === 'Queue') {
      // Example animation for Queue
      let x = 0;
      let y = 100;
      const animateQueue = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#32CD32';
        context.fillRect(x, y, 50, 50);
        x += 2;
        if (x < canvas.width) {
          requestAnimationFrame(animateQueue);
        }
      };
      animateQueue();
    } else if (topic === 'Linked List') {
      // Example animation for Linked List
      let x = 0;
      const animateLinkedList = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#FFD700';
        context.beginPath();
        context.arc(x, canvas.height / 2, 20, 0, Math.PI * 2, true);
        context.fill();
        x += 2;
        if (x < canvas.width) {
          requestAnimationFrame(animateLinkedList);
        }
      };
      animateLinkedList();
    } else if (topic === 'Tree') {
      // Example animation for Tree
      context.fillStyle = '#8B4513';
      context.fillRect(canvas.width / 2 - 25, canvas.height - 100, 50, 100); // Tree trunk
      context.fillStyle = '#228B22';
      context.beginPath();
      context.arc(canvas.width / 2, canvas.height - 120, 60, 0, Math.PI * 2);
      context.fill(); // Tree leaves
    } else if (topic === 'Graph') {
      // Example animation for Graph
      context.fillStyle = '#0000FF';
      const drawGraph = () => {
        context.beginPath();
        context.moveTo(50, 50);
        context.lineTo(200, 100);
        context.lineTo(150, 200);
        context.lineTo(50, 50);
        context.stroke();
      };
      drawGraph();
    }
  }, [topic]);

  return <canvas ref={canvasRef} width={480} height={320} />;
};

export default Animation;