import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

const TreeAnimation = () => {
  const [treeData, setTreeData] = useState(null); // Initialize with null
  const [inputValue, setInputValue] = useState("");
  const [foundNode, setFoundNode] = useState(null);
  const svgRef = useRef();

  useEffect(() => {
    if (treeData) {
      renderTree(treeData);
    }
  }, [treeData]);

  const renderTree = (data) => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous elements
    svg.attr("viewBox", "-100 -100 400 300");

    const root = d3.hierarchy(data);
    const treeLayout = d3.tree().nodeSize([60, 60]);
    treeLayout(root);

    // Render nodes
    svg
      .selectAll("g.node")
      .data(root.descendants())
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${d.x},${d.y})`)
      .append("circle")
      .attr("r", 20)
      .attr("fill", "white")
      .attr("stroke", "green")
      .attr("stroke-width", 2);

    svg
      .selectAll("g.node")
      .append("text")
      .attr("dy", 5)
      .attr("text-anchor", "middle")
      .text((d) => d.data.value);

    // Render links
    svg
      .selectAll("path.link")
      .data(root.links())
      .enter()
      .insert("path", "g")
      .attr("class", "link")
      .attr("d", d3.linkVertical().x((d) => d.x).y((d) => d.y))
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2);
  };

  const handleInsert = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      setTreeData((prevTree) => insertNode({ ...prevTree }, value));
      setInputValue("");
    }
  };

  const handleDelete = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      setTreeData((prevTree) => deleteNode({ ...prevTree }, value));
      setInputValue("");
    }
  };

  const handleFind = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      const found = findNode(treeData, value);
      setFoundNode(found ? `Found: ${found.value}` : "Not found");
    }
  };

  return (
    <div className="tree-animation-container">
      <div className="control-panel">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
        />
        <button onClick={handleInsert}>Insert</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleFind}>Find</button>
      </div>
      <p className="found-message">{foundNode}</p>
      <svg ref={svgRef} width="500" height="400" />
    </div>
  );
};

// Helper Functions for Tree Manipulation
const insertNode = (node, value) => {
  if (!node) return { value, left: null, right: null };
  if (value < node.value) node.left = insertNode(node.left, value);
  else if (value > node.value) node.right = insertNode(node.right, value);
  return node;
};

const deleteNode = (node, value) => {
  if (!node) return null;
  if (value < node.value) node.left = deleteNode(node.left, value);
  else if (value > node.value) node.right = deleteNode(node.right, value);
  else {
    if (!node.left) return node.right;
    if (!node.right) return node.left;
    let minNode = node.right;
    while (minNode.left) minNode = minNode.left;
    node.value = minNode.value;
    node.right = deleteNode(node.right, minNode.value);
  }
  return node;
};

const findNode = (node, value) => {
  if (!node) return null;
  if (value === node.value) return node;
  return value < node.value ? findNode(node.left, value) : findNode(node.right, value);
};

export default TreeAnimation;
