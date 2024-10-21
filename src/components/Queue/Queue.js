// src/components/Queue.js
import React from 'react';
import "./Queue.css";

const Queue = () => {
    return (
        <div >
            <h1>Queues - A Fundamental Linear Data Structure</h1>
            <section >
                <h2>Chapter: Queues - A Fundamental Linear Data Structure</h2>
                <div>
                    <div >
                        <h4><strong>1. Introduction</strong></h4>
                    </div>
                    <p>
                        A <strong>queue</strong> is a linear data structure that operates on the <strong>First In, First Out (FIFO)</strong> principle. This means that the first element added to the queue is the first one to be removed. A queue resembles a real-life line or waiting list—when people stand in a queue, the person who arrives first is the first to be served.
                    </p>
                    <p>
                        Queues are widely used in various domains, including operating systems, network traffic management, and real-time systems. They provide a simple yet powerful mechanism for handling tasks in an orderly fashion. This chapter covers the fundamental concepts, types, operations, and applications of queues, along with their implementation in programming.
                    </p>

                    <div >
                        <h4><strong>2. Concepts and Terminology</strong></h4>
                        <p>
                            Before exploring the different types of queues and their operations, it’s important to understand the basic components and terminology associated with a queue:
                        </p>
                        <ul>
                            <li><strong>Queue:</strong> A linear data structure in which elements are added at one end (the rear) and removed from the other end (the front). It follows the FIFO principle.</li>
                            <li><strong>Front:</strong> The end of the queue from which elements are removed.</li>
                            <li><strong>Rear:</strong> The end of the queue at which elements are added.</li>
                            <li><strong>Enqueue:</strong> The operation of adding an element to the rear of the queue.</li>
                            <li><strong>Dequeue:</strong> The operation of removing an element from the front of the queue.</li>
                            <li><strong>Peek/Front:</strong> The operation of viewing the element at the front of the queue without removing it.</li>
                            <li><strong>IsEmpty:</strong> A check to determine if the queue contains no elements.</li>
                            <li><strong>IsFull:</strong> A check to determine if the queue is full (relevant for fixed-size queues).</li>
                        </ul>
                    </div>

                    <div>
                        <h4><strong>3. Types of Queues</strong></h4>

                        <div >
                            <h5><strong>3.1. Simple Queue (Linear Queue)</strong></h5>
                            <p>
                                The <strong>simple queue</strong>, also known as a <strong>linear queue</strong>, is the most basic type of queue. In a simple queue, elements are added at the rear and removed from the front, maintaining the FIFO order. This type of queue is ideal for simple tasks, such as managing print jobs or simulating processes waiting in line.
                            </p>
                        </div>

                        <div >
                            <h5><strong>3.2. Circular Queue</strong></h5>
                            <p>
                                A <strong>circular queue</strong> is a variation of the simple queue that overcomes the limitations of memory inefficiency by connecting the rear of the queue back to the front in a circular manner. This ensures that when the end of the array is reached, the next element is placed at the beginning.
                            </p>
                        </div>

                        <div>
                            <h5><strong>3.3. Priority Queue</strong></h5>
                            <p>
                                A <strong>priority queue</strong> is a type of queue where each element has a priority associated with it. Elements are dequeued based on their priority, not just the order of insertion. The element with the highest priority is dequeued first.
                            </p>
                        </div>

                        <div >
                            <h5><strong>3.4. Double-Ended Queue (Deque)</strong></h5>
                            <p>
                                A <strong>double-ended queue (deque)</strong> is a type of queue where elements can be added or removed from both the front and the rear. This flexibility allows both FIFO and LIFO operations.
                            </p>
                        </div>
                    </div>

                    <div >
                        <h4><strong>4. Queue Operations</strong></h4>
                        <p>
                            Queues support several basic operations that allow elements to be managed effectively:
                        </p>
                        <ul>
                            <li><strong>Enqueue:</strong> Adds an element to the rear of the queue.</li>
                            <li><strong>Dequeue:</strong> Removes the front element from the queue.</li>
                            <li><strong>Peek:</strong> Returns the front element without removing it.</li>
                            <li><strong>IsEmpty:</strong> Checks if the queue is empty.</li>
                            <li><strong>IsFull:</strong> Checks if the queue is full (in case of a circular queue).</li>
                        </ul>
                    </div>

                    <div >
                        <h4><strong>5. Queue Implementation</strong></h4>
                        <p>
                            Queues can be implemented using different data structures such as arrays and linked lists.
                        </p>

                        <div >
                            <h5><strong>5.1. Queue Implementation Using Arrays</strong></h5>
                            <pre>
{`class Queue:
    def __init__(self, capacity):
        self.capacity = capacity
        self.queue = [None] * capacity
        self.front = 0
        self.rear = -1
        self.size = 0

    def is_empty(self):
        return self.size == 0

    def is_full(self):
        return self.size == self.capacity

    def enqueue(self, item):
        if self.is_full():
            print("Queue is full")
            return
        self.rear = (self.rear + 1) % self.capacity
        self.queue[self.rear] = item
        self.size += 1

    def dequeue(self):
        if self.is_empty():
            print("Queue is empty")
            return
        front_item = self.queue[self.front]
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return front_item

    def peek(self):
        if self.is_empty():
            print("Queue is empty")
            return None
        return self.queue[self.front]
`}
                            </pre>
                        </div>

                        <div id="LinkedListImplementation">
                            <h5><strong>5.2. Queue Implementation Using Linked Lists</strong></h5>
                            <pre>
{`class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedQueue:
    def __init__(self):
        self.front = None
        self.rear = None

    def is_empty(self):
        return self.front is None

    def enqueue(self, item):
        new_node = Node(item)
        if self.is_empty():
            self.front = self.rear = new_node
        else:
            self.rear.next = new_node
            self.rear = new_node

    def dequeue(self):
        if self.is_empty():
            print("Queue is empty")
            return
        front_data = self.front.data
        self.front = self.front.next
        if self.front is None:
            self.rear = None
        return front_data

    def peek(self):
        if self.is_empty():
            print("Queue is empty")
            return None
        return self.front.data
`}
                            </pre>
                        </div>
                    </div>

                    <div>
                        <h4><strong>6. Applications of Queues</strong></h4>
                        <p>Queues are widely used in various real-world scenarios, such as:</p>
                        <ul>
                            <li><strong>Job scheduling in operating systems</strong>: Queues manage jobs waiting to be processed.</li>
                            <li><strong>Managing print jobs</strong>: Print jobs are processed in the order they are received.</li>
                            <li><strong>Network traffic management</strong>: Data packets are queued before being transmitted.</li>
                            <li><strong>Breadth-First Search (BFS) in Graphs</strong>: BFS uses a queue to explore nodes layer by layer.</li>
                        </ul>
                    </div>

                    <div>
                        <h4><strong>7. Conclusion</strong></h4>
                        <p>
                            Queues are a fundamental data structure providing an orderly method for managing tasks in various applications. Their versatility and efficiency make them a key component in many systems, from job scheduling to graph traversal.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Queue;
