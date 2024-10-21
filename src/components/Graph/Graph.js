// src/components/Graph.js
import React from 'react';
//import './Graph.css';

const Graph = () => {
    return (
        <div>
            <h1>Graphs – Definitions, Types, Representations, and Algorithms</h1>
            <section>
                <h2>Chapter: Graphs – Definitions, Types, Representations, and Algorithms</h2>
                <div>
                    <div>
                        <h4><strong>1. Introduction to Graphs</strong></h4>
                    </div>
                    <p>
                        Graphs are one of the most fundamental data structures in computer science. They are used to model relationships between objects, which makes them applicable in a wide variety of domains, including networking, social media, biological systems, logistics, and more.
                    </p>
                    <p>
                        In this chapter, we will explore the concept of <strong>graphs</strong>, their various types, methods of representation, and algorithms used for traversing and searching graphs. The goal is to understand both the theory behind graphs and their practical applications.
                    </p>

                    <div>
                        <h4><strong>2. Definition of a Graph</strong></h4>
                        <p>
                            A <strong>graph</strong> is a collection of vertices (also called nodes) and edges (also called arcs) that connect pairs of vertices. A graph can be formally defined as:
                        </p>
                        <pre>
{`Graph G = (V, E)`}</pre>
                        <p>
                            Where:
                            <ul>
                                <li><strong>V</strong> is the set of vertices.</li>
                                <li><strong>E</strong> is the set of edges, where each edge connects two vertices.</li>
                            </ul>
                        </p>

                        <h5><strong>2.1. Components of a Graph</strong></h5>
                        <ul>
                            <li><strong>Vertices (Nodes)</strong>: The fundamental units of the graph representing entities or objects.</li>
                            <li><strong>Edges (Arcs)</strong>: The connections between the vertices, representing relationships between entities.</li>
                        </ul>

                        <h5><strong>2.2. Types of Edges</strong></h5>
                        <ul>
                            <li><strong>Directed Edge</strong>: In a directed graph, the edges have a direction.</li>
                            <li><strong>Undirected Edge</strong>: In an undirected graph, the edges do not have a direction.</li>
                        </ul>

                        <h5><strong>2.3. Graph Notation</strong></h5>
                        <pre>
{`V = {A, B, C, D}
E = {(A, B), (B, C), (C, D), (A, D)}`}</pre>
                    </div>

                    <div>
                        <h4><strong>3. Types of Graphs</strong></h4>
                        <h5><strong>3.1. Directed and Undirected Graphs</strong></h5>
                        <p>
                            <strong>Directed Graph</strong>: Each edge has a direction. Example: A web link from one website to another. <br />
                            <strong>Undirected Graph</strong>: No direction in the edges. Example: Friendship in social networks.
                        </p>

                        <h5><strong>3.2. Weighted and Unweighted Graphs</strong></h5>
                        <p>
                            <strong>Weighted Graph</strong>: Each edge has a weight or cost. Example: Road network where edges represent distances. <br />
                            <strong>Unweighted Graph</strong>: All edges are considered to have equal weight.
                        </p>

                        <h5><strong>3.3. Cyclic and Acyclic Graphs</strong></h5>
                        <p>
                            <strong>Cyclic Graph</strong>: A graph with at least one cycle. <br />
                            <strong>Acyclic Graph</strong>: No cycles in the graph. Example: A tree.
                        </p>

                        <h5><strong>3.4. Simple Graph vs. Multigraph</strong></h5>
                        <p>
                            <strong>Simple Graph</strong>: No loops or multiple edges between the same vertices. <br />
                            <strong>Multigraph</strong>: Allows multiple edges between the same vertices.
                        </p>

                        <h5><strong>3.5. Connected vs. Disconnected Graphs</strong></h5>
                        <p>
                            <strong>Connected Graph</strong>: There is a path between every pair of vertices. <br />
                            <strong>Disconnected Graph</strong>: Some vertices are not connected by any path.
                        </p>
                    </div>

                    <div>
                        <h4><strong>4. Representation of Graphs</strong></h4>
                        <h5><strong>4.1. Adjacency Matrix</strong></h5>
                        <p>
                            An adjacency matrix is a 2D array that represents a graph. For a graph with <strong>n</strong> vertices, the matrix is of size <strong>n × n</strong>.
                        </p>
                        <pre>
{`    A  B  C  D
A [ 0  1  0  1 ]
B [ 1  0  1  0 ]
C [ 0  1  0  0 ]
D [ 1  0  0  0 ]`}
                        </pre>

                        <h5><strong>4.2. Adjacency List</strong></h5>
                        <p>
                            An adjacency list represents the graph as an array of lists. Each vertex has a list of its adjacent vertices.
                        </p>
                        <pre>
{`A -> B, D
B -> A, C
C -> B
D -> A`}
                        </pre>

                        <h5><strong>4.3. Incidence Matrix</strong></h5>
                        <p>
                            An incidence matrix represents the edges and vertices of a graph. The matrix has one row for each vertex and one column for each edge.
                        </p>
                    </div>

                    <div>
                        <h4><strong>5. Graph Traversal Algorithms</strong></h4>
                        <h5><strong>5.1. Breadth-First Search (BFS)</strong></h5>
                        <p>
                            BFS explores the vertices level by level, using a queue to process vertices. It starts at the source and explores all vertices at the current level before moving on to the next level.
                        </p>

                        <h5><strong>5.2. Depth-First Search (DFS)</strong></h5>
                        <p>
                            DFS explores as far along each branch as possible before backtracking. It uses a stack (or recursion) for its implementation.
                        </p>
                    </div>

                    <div>
                        <h4><strong>6. Graph Algorithms</strong></h4>
                        <h5><strong>6.1. Dijkstra’s Algorithm (Shortest Path Algorithm)</strong></h5>
                        <p>
                            Dijkstra’s Algorithm finds the shortest path from a source vertex to all other vertices in a weighted graph with non-negative edge weights. It uses a priority queue to select the vertex with the smallest known distance.
                        </p>

                        <h5><strong>6.2. Topological Sort</strong></h5>
                        <p>
                            Topological sort is a linear ordering of vertices in a directed acyclic graph (DAG). It ensures that for every directed edge \( (u \to v) \), vertex <strong>u</strong> comes before vertex <strong>v</strong>.
                        </p>
                    </div>

                    <div>
                        <h4><strong>7. Real-World Applications of Graphs</strong></h4>
                        <ul>
                            <li><strong>Social Networks</strong>: Represent relationships between people as vertices and connections as edges.</li>
                            <li><strong>Web Pages and Hyperlinks</strong>: The web can be modeled as a directed graph, where web pages are vertices and hyperlinks are directed edges.</li>
                            <li><strong>Transport Networks</strong>: Represent cities or junctions as vertices and roads, railways, or flight paths as edges.</li>
                            <li><strong>Communication Networks</strong>: Represent routers or devices as vertices and communication links as edges.</li>
                        </ul>
                    </div>

                    <div>
                        <h4><strong>8. Conclusion</strong></h4>
                        <p>
                            Graphs are a versatile and powerful data structure that models relationships between entities. They are foundational in solving real-world problems in various fields, such as networking, transportation, social networks, and more. Understanding graph types, representations, and traversal algorithms is essential for solving complex problems efficiently.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Graph;
