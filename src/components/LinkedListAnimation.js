import React, { useState } from 'react';
import './LinkedListAnimation.css';

const LinkedListAnimation = () => {
  // Linked list node structure
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  // Linked list class
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    // Insert node at specific index or at the tail
    insert(value, index = this.size) {
      const newNode = new Node(value);

      if (index < 0 || index > this.size) {
        alert('Invalid index');
        return;
      }

      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        if (this.size === 0) this.tail = newNode;
      } else {
        let prev = null;
        let current = this.head;
        let count = 0;

        while (count < index) {
          prev = current;
          current = current.next;
          count++;
        }

        prev.next = newNode;
        newNode.next = current;
        if (newNode.next === null) this.tail = newNode;
      }

      this.size++;
    }

    // Delete node at specific index
    delete(index) {
      if (index < 0 || index >= this.size) {
        alert('Invalid index');
        return;
      }

      if (index === 0) {
        this.head = this.head.next;
        if (this.size === 1) this.tail = null;
      } else {
        let prev = null;
        let current = this.head;
        let count = 0;

        while (count < index) {
          prev = current;
          current = current.next;
          count++;
        }

        prev.next = current.next;
        if (prev.next === null) this.tail = prev;
      }

      this.size--;
    }

    // Search for a value and return its index
    search(value) {
      let current = this.head;
      let index = 0;

      while (current !== null) {
        if (current.value === value) {
          return index;
        }
        current = current.next;
        index++;
      }

      return -1;
    }

    // Get all nodes
    getNodes() {
      const nodes = [];
      let current = this.head;

      while (current !== null) {
        nodes.push(current);
        current = current.next;
      }

      return nodes;
    }
  }

  const [linkedList] = useState(new LinkedList());
  const [nodes, setNodes] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputIndex, setInputIndex] = useState('');

  const handleInsert = () => {
    linkedList.insert(parseInt(inputValue), parseInt(inputIndex));
    setNodes(linkedList.getNodes());
    setInputValue('');
    setInputIndex('');
  };

  const handleDelete = () => {
    linkedList.delete(parseInt(inputIndex));
    setNodes(linkedList.getNodes());
    setInputValue('');
    setInputIndex('');
  };

  const handleSearch = () => {
    const index = linkedList.search(parseInt(inputValue));
    if (index !== -1) {
      alert(`Value found at index ${index}`);
    } else {
      alert('Value not found');
    }
  };

  return (
    <div className="linked-list-container">
      <h3>Linked List Animation</h3>
      <div className="linked-list-visual">
        {nodes.map((node, index) => (
          <div key={index} className="node">
            <div>{node.value}</div>
            {node.next && <span className="arrow">→</span>}
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
        <input
          type="number"
          placeholder="Enter an index"
          value={inputIndex}
          onChange={(e) => setInputIndex(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleInsert}>Insert</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default LinkedListAnimation;
