import React, { useState, useEffect } from 'react';
import './Pretest.css';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Pretest = ({ topic }) => {
  const questions = {
    'Searching & Sorting': [
      { question: ' How do you describe an array?', 
        options: [' Data structure having linear access time', 
                  'Data structure containing elements of similar types in contiguous storage',
                  ' A container of unique elements of similar types', 
                  'Data structure containing elements located in various locations memory which may or may not be contiguous'], 
        answer: 'Data structure containing elements of similar types in contiguous storage' },

      { question: 'What is the time complexity of traversing through all the elements in an array?',
        options: ['O(N^2)', 'O(1)', 'O(N)', 'O(log N)'], 
        answer: 'O(N)' },

      { question: ' If for large inputs, X is a better choice than Y, then',
        options: ['Y is asymptotically more efficient than X', 
                  'X is asymptotically more efficient than Y',
                  'X and Y are equivalently efficient',
                  'None of the above'], 
        answer: 'X is asymptotically more efficient than Y' },

      { question: 'What is the prerequisite to perform Binary Search ?',
            options: ['The values in the array have a maximum bound value they can take', 
                      'Array must be sorted either in ascending or descending order',
                      'Array must be broken into sub-arrays',
                      'None of the above'], 
            answer: 'Array must be sorted either in ascending or descending order' },
            {
              question: 'Which sorting algorithm has the best average time complexity?',
              options: ['Merge Sort', 'Quick Sort', 'Heap Sort', 'Bubble Sort'],
              answer: 'Merge Sort'
            },
            {
              question: 'What is the time complexity of Binary Search?',
              options: ['O(N)', 'O(log N)', 'O(N^2)', 'O(1)'],
              answer: 'O(log N)'
            },
            {
              question: 'Which of the following is an in-place sorting algorithm?',
              options: ['Merge Sort', 'Quick Sort', 'Counting Sort', 'Radix Sort'],
              answer: 'Quick Sort'
            },
            {
              question: 'What is the worst-case time complexity of Quick Sort?',
              options: ['O(N^2)', 'O(N log N)', 'O(N)', 'O(log N)'],
              answer: 'O(N^2)'
            },
            {
              question: 'Which of the following sorting algorithms is stable?',
              options: ['Quick Sort', 'Heap Sort', 'Merge Sort', 'Selection Sort'],
              answer: 'Merge Sort'
            },
            {
              question: 'Which of the following is NOT a comparison-based sorting algorithm?',
              options: ['Merge Sort', 'Radix Sort', 'Quick Sort', 'Bubble Sort'],
              answer: 'Radix Sort'
            },
            {
              question: 'Which sorting algorithm is efficient for small datasets and nearly sorted data?',
              options: ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Quick Sort'],
              answer: 'Insertion Sort'
            },
            {
              question: 'Which algorithm repeatedly selects the smallest element from the unsorted portion?',
              options: ['Selection Sort', 'Bubble Sort', 'Merge Sort', 'Heap Sort'],
              answer: 'Selection Sort'
            },
            {
              question: 'In which scenario does Binary Search perform poorly?',
              options: ['Unsorted data', 'Sorted data', 'Large datasets', 'Sparse arrays'],
              answer: 'Unsorted data'
            },
            {
              question: 'Which of the following algorithms is best suited for sorting a linked list?',
              options: ['Merge Sort', 'Quick Sort', 'Heap Sort', 'Bubble Sort'],
              answer: 'Merge Sort'
            }
            
    ],
    Stacks: [
      { question: 'What is the principle of Stack?', 
        options: ['FIFO', 'LIFO', 'LILO', 'FILO'], 
        answer: 'LIFO' },

      { question: 'Which operation is used to insert an element into the stack?', 
        options: ['Insert', 'Append', 'Push', 'Enqueue'], 
        answer: 'Push' },

      { question: ' Which among the following represents a stack?', 
        options: ['People waiting at a counter, where the action of popping is when someone has been served at the counter', 
                      'A hand of bangles where pushing is wearing a new bangle', 
                      'A pile of plates at a dinner party', 
                      'People going around a merry-go-round'], 
        answer: 'A pile of plates at a dinner party' },

    { question: 'Consider these operations on an empty stack: push(3), push(5), pop(), push(10), push(11), pop(), push(100). What will be the stack configuration (first number is top of the stack, last is the bottom)', 
        options: ['100,10,3', 
                  '3,5,10,11,100', 
                  '3,10,100', 
                  'None of the above'], 
        answer: '100,10,3' },
        {
          question: 'Which of the following is NOT an application of stacks?',
          options: ['Function call recursion', 'Undo operation in text editors', 'Breadth First Search', 'Parenthesis matching'],
          answer: 'Breadth First Search'
        },
        {
          question: 'What is the time complexity of pushing and popping elements from a stack?',
          options: ['O(1)', 'O(N)', 'O(log N)', 'O(N^2)'],
          answer: 'O(1)'
        },
        {
          question: 'In a stack, what does the "pop" operation do?',
          options: ['Inserts an element at the top', 'Removes the top element', 'Returns the top element without removal', 'Removes the bottom element'],
          answer: 'Removes the top element'
        },
        {
          question: 'Which data structure is used for evaluating postfix expressions?',
          options: ['Queue', 'Stack', 'Tree', 'Heap'],
          answer: 'Stack'
        },
        {
          question: 'Which operation is not typically supported in a stack?',
          options: ['Peek', 'Push', 'Pop', 'Enqueue'],
          answer: 'Enqueue'
        },    
        {
          question: 'What is the result of popping from an empty stack?',
          options: ['The program crashes', 'Returns a sentinel value', 'Underflow condition', 'Overflow condition'],
          answer: 'Underflow condition'
        },
        {
          question: 'What is the postfix form of the expression (A + B) * (C + D)?',
          options: ['A B + C D + *', 'A B C + D + *', 'A B + * C D +', 'A B + C D * +'],
          answer: 'A B + C D + *'
        },
        {
          question: 'Which of the following is true for a stack?',
          options: ['Last In First Out (LIFO)', 'First In Last Out (FILO)', 'First In First Out (FIFO)', 'Random Access'],
          answer: 'Last In First Out (LIFO)'
        },
        {
          question: 'In a linked list implementation of stack, where does the push operation add an element?',
          options: ['At the end of the list', 'At the beginning of the list', 'At a random position', 'In the middle of the list'],
          answer: 'At the beginning of the list'
        },
        {
          question: 'Which of the following applications use a stack?',
          options: ['Depth First Search', 'Level Order Traversal', 'Breadth First Search', 'Shortest Path'],
          answer: 'Depth First Search'
        }   
    ],
    Queue : [
      {
        question: 'Which of the following is true for a circular queue?',
        options: ['It allows unlimited elements', 'It avoids memory wastage', 'It is always full', 'It allows dynamic resizing'],
        answer: 'It avoids memory wastage'
      },
      {
        question: 'What is the time complexity of enqueue and dequeue operations in a queue?',
        options: ['O(1)', 'O(N)', 'O(log N)', 'O(N^2)'],
        answer: 'O(1)'
      },
      {
        question: 'Which of the following is a real-world example of a queue?',
        options: ['Call stack in recursion', 'A line of people waiting for a ticket', 'Undo operation in a text editor', 'Processing of function calls'],
        answer: 'A line of people waiting for a ticket'
      },
      {
        question: 'What is a priority queue?',
        options: ['A queue where elements are served according to their priority', 'A queue where elements are added at the front', 'A queue where all elements have the same priority', 'A circular queue implementation'],
        answer: 'A queue where elements are served according to their priority'
      },
      {
        question: 'Which of the following operations is performed first in a priority queue?',
        options: ['Enqueue', 'Insert', 'Dequeue', 'Peek'],
        answer: 'Dequeue'
      },      
      {
        question: 'What is the front of a queue?',
        options: ['Element being added', 'Element being removed', 'Element at the end of the queue', 'None of the above'],
        answer: 'Element being removed'
      },
      {
        question: 'Which type of queue allows insertion and deletion at both ends?',
        options: ['Circular Queue', 'Double-ended Queue', 'Priority Queue', 'Linear Queue'],
        answer: 'Double-ended Queue'
      },
      {
        question: 'What happens when you try to dequeue from an empty queue?',
        options: ['Overflow', 'Underflow', 'Memory Leak', 'Garbage Collection'],
        answer: 'Underflow'
      },
      {
        question: 'Which of the following queues is used in the Round Robin scheduling algorithm?',
        options: ['Priority Queue', 'Circular Queue', 'Double-ended Queue', 'Linear Queue'],
        answer: 'Circular Queue'
      },
      {
        question: 'In which case is the queue full condition true in a circular queue?',
        options: ['When the last element is reached', 'When the next position of rear is front', 'When rear equals front', 'When queue size is N'],
        answer: 'When the next position of rear is front'
      }      
    ],
    LinkedList : [
      {
        question: 'Which of the following types of linked lists allows traversal in both directions?',
        options: ['Singly linked list', 'Doubly linked list', 'Circular linked list', 'Stack implemented with linked list'],
        answer: 'Doubly linked list'
      },
      {
        question: 'Which of the following is the correct time complexity to search for an element in a linked list?',
        options: ['O(1)', 'O(N)', 'O(log N)', 'O(N^2)'],
        answer: 'O(N)'
      },
      {
        question: 'What is the advantage of a linked list over an array?',
        options: ['Fixed size', 'Dynamic size', 'Faster access time', 'Memory is wasted'],
        answer: 'Dynamic size'
      },
      {
        question: 'Which of the following is true about a circular linked list?',
        options: ['The last node contains a pointer to NULL', 'The last node contains a pointer to the first node', 'The list is sorted', 'It uses double pointers for each node'],
        answer: 'The last node contains a pointer to the first node'
      },
      {
        question: 'In a doubly linked list, how many pointers does each node contain?',
        options: ['One', 'Two', 'Three', 'None'],
        answer: 'Two'
      },      
      {
        question: 'What is the main advantage of a circular linked list over a singly linked list?',
        options: ['It consumes less memory', 'Traversal is faster', 'Any node can be reached starting from any other node', 'It can store only integer data'],
        answer: 'Any node can be reached starting from any other node'
      },
      {
        question: 'In a linked list, which of the following points to the next node?',
        options: ['Data field', 'Link field', 'Previous pointer', 'Node counter'],
        answer: 'Link field'
      },
      {
        question: 'How do you represent a NULL pointer in C for linked lists?',
        options: ['0', 'null', 'NULL', 'None of the above'],
        answer: 'NULL'
      },
      {
        question: 'Which of the following linked list types allows traversing the list in both directions?',
        options: ['Singly linked list', 'Doubly linked list', 'Circular singly linked list', 'Circular doubly linked list'],
        answer: 'Doubly linked list'
      },
      {
        question: 'What is the worst-case time complexity for inserting a node at the end of a singly linked list?',
        options: ['O(1)', 'O(N)', 'O(log N)', 'O(N^2)'],
        answer: 'O(N)'
      }
      
    ],
    Tree : [
      {
        question: 'What is a balanced binary tree?',
        options: ['A binary tree in which each node has exactly two children', 'A binary tree where the depth of the left and right subtrees of every node differs by at most one', 'A binary tree with no nodes', 'A binary tree that has equal numbers of nodes on all levels'],
        answer: 'A binary tree where the depth of the left and right subtrees of every node differs by at most one'
      },
      {
        question: 'Which traversal algorithm visits nodes in the order: left subtree, root, right subtree?',
        options: ['Preorder', 'Inorder', 'Postorder', 'Level order'],
        answer: 'Inorder'
      },
      {
        question: 'What is the time complexity of inserting a node in a binary search tree in the worst case?',
        options: ['O(1)', 'O(N)', 'O(log N)', 'O(N^2)'],
        answer: 'O(N)'
      },
      {
        question: 'What is the maximum number of nodes in a binary tree of height h?',
        options: ['2^h - 1', 'h', '2^(h+1) - 1', '2^h'],
        answer: '2^(h+1) - 1'
      },
      {
        question: 'Which of the following trees is a binary search tree (BST)?',
        options: ['A tree in which the left child is smaller than the root and the right child is greater than the root', 'A tree in which the left child is greater than the root and the right child is smaller', 'A tree in which every node has two children', 'A tree in which nodes are arranged randomly'],
        answer: 'A tree in which the left child is smaller than the root and the right child is greater than the root'
      },      
      {
        question: 'What is the height of a tree?',
        options: ['The number of nodes on the longest path from the root', 'The number of edges on the longest path from the root', 'The total number of nodes in the tree', 'The total number of edges in the tree'],
        answer: 'The number of edges on the longest path from the root'
      },
      {
        question: 'Which tree traversal uses a stack to keep track of the visited nodes?',
        options: ['Inorder', 'Preorder', 'Postorder', 'Depth First Search'],
        answer: 'Depth First Search'
      },
      {
        question: 'Which tree traversal algorithm follows the order: root, left subtree, right subtree?',
        options: ['Preorder', 'Inorder', 'Postorder', 'Level Order'],
        answer: 'Preorder'
      },
      {
        question: 'Which of the following is true for a binary search tree?',
        options: ['Inorder traversal results in a sorted sequence', 'The left child is always greater than the parent node', 'Every node has at most three children', 'It is a complete binary tree'],
        answer: 'Inorder traversal results in a sorted sequence'
      },
      {
        question: 'Which of the following is a self-balancing binary search tree?',
        options: ['AVL Tree', 'Heap', 'Splay Tree', 'Trie'],
        answer: 'AVL Tree'
      }
      
    ],
    Graph : [
      {
        question: 'What is the time complexity of Breadth First Search (BFS) for a graph with V vertices and E edges?',
        options: ['O(V)', 'O(E)', 'O(V + E)', 'O(V * E)'],
        answer: 'O(V + E)'
      },
      {
        question: 'Which of the following is used to represent an undirected graph?',
        options: ['Adjacency matrix', 'Adjacency list', 'Both adjacency matrix and list', 'Stack'],
        answer: 'Both adjacency matrix and list'
      },
      {
        question: 'What is a spanning tree of a graph?',
        options: ['A subgraph that contains all vertices and is a tree', 'A tree that contains some of the vertices', 'A subgraph that contains no edges', 'A graph with no edges'],
        answer: 'A subgraph that contains all vertices and is a tree'
      },
      {
        question: 'In a graph, what is a complete graph?',
        options: ['A graph in which each pair of graph vertices is connected by an edge', 'A graph in which there are no edges', 'A graph in which all edges are directed', 'A graph with only one vertex'],
        answer: 'A graph in which each pair of graph vertices is connected by an edge'
      },
      {
        question: 'What is the time complexity of Prims algorithm to find a Minimum Spanning Tree (MST) for a graph with V vertices and E edges using an adjacency list?',
        options: ['O(V^2)', 'O(E log V)', 'O(V log E)', 'O(E)'],
        answer: 'O(E log V)'
      },      
      {
        question: 'What is the time complexity of Depth First Search (DFS) for a graph with V vertices and E edges?',
        options: ['O(V)', 'O(E)', 'O(V + E)', 'O(V * E)'],
        answer: 'O(V + E)'
      },
      {
        question: 'Which of the following is used to find the shortest path in an unweighted graph?',
        options: ['Breadth First Search', 'Depth First Search', 'Dijkstra’s Algorithm', 'Floyd Warshall Algorithm'],
        answer: 'Breadth First Search'
      },
      {
        question: 'What is an adjacency list in a graph?',
        options: ['A list of all vertices and edges', 
                  'An array of lists where each list contains all adjacent vertices of a vertex', 
                  'A matrix representing all connections', 
                  'A list of all edges'],
        answer: 'An array of lists where each list contains all adjacent vertices of a vertex'
      },
      {
        question: 'Which of the following algorithms is used to detect cycles in an undirected graph?',
        options: ['Kruskal’s Algorithm', 'Prim’s Algorithm', 'DFS', 'BFS'],
        answer: 'DFS'
      },
      {
        question: 'Which of the following is true for a connected graph?',
        options: ['There is a path between every pair of vertices', 'There is no path between any pair of vertices', 'The graph has a cycle', 'The graph has a single vertex'],
        answer: 'There is a path between every pair of vertices'
      }
      
    ]
  };

  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    
    if (topic && questions[topic]) {
      const shuffled = shuffleArray(questions[topic]);
      setShuffledQuestions(shuffled.slice(0, 5)); 
    }
  }, [topic]);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    const correctAnswers = shuffledQuestions.filter(
      (q, i) => q.answer === userAnswers[i]
    );
    setScore(correctAnswers.length);
  };

  return (
    <div className="pretest">
      <h3>Pretest for {topic}</h3>

      {shuffledQuestions.map((q, index) => (
        <div key={index} className="question-block">
          <h5>{q.question}</h5>
          <div>
            {q.options.map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  onChange={() => handleAnswerChange(index, option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button onClick={handleSubmit}>Submit Pretest</button>

      {score !== null && (
        <div className="score">
          <h4>Your Score: {score}/{shuffledQuestions.length}</h4>
        </div>
      )}
    </div>
  );
};

export default Pretest;
