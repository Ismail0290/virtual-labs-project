// src/components/LinkedList.js
import React from 'react';
//import './LinkedList.css';

const LinkedList = () => {
    return (
        <div>
            <h1>Linked Lists – Definitions, Types, Operations, and Algorithms</h1>
            <section>
                <h2>Chapter: Linked Lists – Definitions, Types, Operations, and Algorithms</h2>
                <div>
                    <div>
                        <h4><strong>1. Introduction to Linked Lists</strong></h4>
                    </div>
                    <p>
                        A <strong>linked list</strong> is one of the most fundamental and versatile data structures used in computer science. Unlike arrays, linked lists store data elements in nodes, where each node points to the next node in the sequence, thus forming a chain. Linked lists are dynamic and efficient when it comes to inserting or deleting elements, making them particularly useful in various scenarios such as memory management, dynamic storage allocation, and implementing complex data structures like stacks, queues, and graphs.
                    </p>
                    <p>
                        In this chapter, we will cover the basics of linked lists, their different types, methods for manipulating linked lists, and common algorithms.
                    </p>

                    <div>
                        <h4><strong>2. Definition of a Linked List</strong></h4>
                        <p>
                            A <strong>linked list</strong> is a linear data structure where elements, known as nodes, are connected through pointers. Each node contains two main components:
                        </p>
                        <ul>
                            <li><strong>Data</strong>: The actual value stored in the node.</li>
                            <li><strong>Pointer</strong>: A reference to the next node in the list.</li>
                        </ul>
                        <pre>
{`Node {
    data: Data
    next: Pointer to the next node
}`}
                        </pre>

                        <h5><strong>2.1. Components of a Linked List</strong></h5>
                        <ul>
                            <li><strong>Node</strong>: A node is the basic building block of a linked list. Each node contains a data field and a pointer field that points to the next node.</li>
                            <li><strong>Head</strong>: The first node in a linked list, containing the reference to the start of the list.</li>
                            <li><strong>Tail</strong>: The last node in a linked list, where the pointer to the next node is NULL.</li>
                        </ul>
                    </div>

                    <div>
                        <h4><strong>3. Types of Linked Lists</strong></h4>
                        <h5><strong>3.1. Singly Linked List</strong></h5>
                        <p>
                            A singly linked list is a type of linked list where each node points to the next node in the sequence, and the last node points to NULL.
                        </p>
                        <pre>
{`10 -> 20 -> 30 -> NULL`}
                        </pre>

                        <h5><strong>3.2. Doubly Linked List</strong></h5>
                        <p>
                            A doubly linked list is a linked list where each node contains two pointers: one pointing to the next node and another pointing to the previous node.
                        </p>
                        <pre>
{`NULL <- 10 <-> 20 <-> 30 -> NULL`}
                        </pre>

                        <h5><strong>3.3. Circular Linked List</strong></h5>
                        <p>
                            A circular linked list is a variation of a singly or doubly linked list where the last node points back to the first node.
                        </p>
                        <pre>
{`10 -> 20 -> 30 -> (back to 10)`}
                        </pre>
                    </div>

                    <div>
                        <h4><strong>4. Basic Operations on Linked Lists</strong></h4>
                        <h5><strong>4.1. Insertion</strong></h5>
                        <p>
                            Inserting nodes can happen at the beginning, end, or middle of the list. For example, inserting a node at the beginning of a singly linked list involves pointing the new node to the current head and updating the head to the new node.
                        </p>
                        <pre>
{`Before: head -> 10 -> 20 -> 30 -> NULL
Insert 5 at the beginning.
After: head -> 5 -> 10 -> 20 -> 30 -> NULL`}
                        </pre>

                        <h5><strong>4.2. Deletion</strong></h5>
                        <p>
                            Deleting a node can be done at the beginning, end, or middle of the list. For example, to delete the first node, simply update the head to point to the next node.
                        </p>
                        <pre>
{`Before: head -> 10 -> 20 -> 30 -> NULL
Delete 10 (head node).
After: head -> 20 -> 30 -> NULL`}
                        </pre>

                        <h5><strong>4.3. Traversal</strong></h5>
                        <p>
                            Traversal refers to visiting each node to access its data. In a singly linked list, you start at the head and move through the nodes until you reach the end.
                        </p>
                    </div>

                    <div>
                        <h4><strong>5. Advanced Operations on Linked Lists</strong></h4>
                        <h5><strong>5.1. Reversing a Linked List</strong></h5>
                        <p>
                            Reversing a linked list involves changing the direction of the pointers so that the last node becomes the head.
                        </p>
                        <pre>
{`Before: head -> 10 -> 20 -> 30 -> NULL
After: head -> 30 -> 20 -> 10 -> NULL`}
                        </pre>

                        <h5><strong>5.2. Detecting a Cycle in a Linked List</strong></h5>
                        <p>
                            A cycle in a linked list occurs when a node points back to a previous node. The Floyd’s Cycle-Finding Algorithm (Tortoise and Hare) is commonly used to detect cycles.
                        </p>
                    </div>

                    <div>
                        <h4><strong>6. Applications of Linked Lists</strong></h4>
                        <ul>
                            <li>Dynamic Memory Allocation</li>
                            <li>Implementing other data structures like stacks, queues, and graphs</li>
                            <li>Polynomial Representation</li>
                        </ul>
                    </div>

                    <div>
                        <h4><strong>7. Time Complexity of Linked List Operations</strong></h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Operation</th>
                                    <th>Singly Linked List</th>
                                    <th>Doubly Linked List</th>
                                    <th>Circular Linked List</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Access (Search)</td>
                                    <td>O(n)</td>
                                    <td>O(n)</td>
                                    <td>O(n)</td>
                                </tr>
                                <tr>
                                    <td>Insertion at Beginning</td>
                                    <td>O(1)</td>
                                    <td>O(1)</td>
                                    <td>O(1)</td>
                                </tr>
                                <tr>
                                    <td>Insertion at End</td>
                                    <td>O(n)</td>
                                    <td>O(1)</td>
                                    <td>O(1)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h4><strong>8. Conclusion</strong></h4>
                        <p>
                            Linked lists are a dynamic and flexible data structure, allowing efficient memory management and manipulation. They serve as the foundation for many complex data structures and have numerous real-world applications in computing systems.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LinkedList;
