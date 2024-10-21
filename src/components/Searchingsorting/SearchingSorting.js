// src/components/SearchingSorting.js
import React from 'react';


const SearchingSorting = () => {
    return (
        <div className="searching-sorting-container">
            <h1>Searching and Sorting Algorithms</h1>
            <section className="overview">
                <h2>Chapter: Searching and Sorting Algorithms – Linear Search and Insertion Sort</h2>
                <div>
                    <div id="Introduction">
                        <h4><strong>1. Introduction</strong></h4>
                    </div>
                    <p>
                        In computer science, <strong>searching</strong> and <strong>sorting</strong> are two fundamental operations on data structures. Searching involves finding a specific element within a data structure, while sorting arranges the elements in a particular order, typically either ascending or descending. These operations are vital for the efficient handling and organization of data in a wide range of applications, from databases to web search engines.
                    </p>
                    <p>
                        This chapter focuses on two basic yet important algorithms: <strong>Linear Search</strong>, a simple searching technique, and <strong>Insertion Sort</strong>, an elementary sorting method. We will explore these algorithms in detail, from their step-by-step processes to real-world applications and performance analysis.
                    </p>

                    <div id='SearchingAlgorithms'>
                        <h4><strong>2. Searching Algorithms</strong></h4>
                    </div>
                    <p>
                        Searching algorithms are designed to retrieve information from data structures efficiently. The goal is to find whether a particular element (called the <strong>target</strong>) exists in a data structure like an array or list and, if so, return its position.
                    </p>
                    <div id="LinearSearch">
                        <h5><strong>2.1. Linear Search</strong></h5>
                        <p>
                            <strong>Linear Search</strong> is the simplest search algorithm. It sequentially checks each element in the data structure until it finds the target element or reaches the end. This method doesn’t require the data to be sorted, making it versatile but often less efficient for large datasets.
                        </p>

                        <h6>2.1.1. How Linear Search Works</h6>
                        <p>In <strong>linear search</strong>, the algorithm begins at the first element of the array and checks each element one by one:</p>
                        <ol>
                            <li>Start at the first element of the array.</li>
                            <li>Compare the current element with the target element.</li>
                            <li>If they match, return the index of the current element.</li>
                            <li>If they do not match, move to the next element.</li>
                            <li>Continue this process until the target is found or the end of the array is reached.</li>
                            <li>If the target is not found after checking all elements, return a "not found" indicator.</li>
                        </ol>

                        <h6>2.1.2. Algorithm for Linear Search</h6>
                        <pre>
                            LinearSearch(arr, target):
                                for i from 0 to length(arr) - 1:
                                    if arr[i] == target:
                                        return i
                                return -1  // Target not found
                        </pre>

                        <h6>2.1.3. Example of Linear Search</h6>
                        <p>
                            Consider the following array and a target element:
                        </p>
                        <pre>
                            Array: [15, 23, 9, 1, 56, 7]
                            Target: 56
                        </pre>
                        <p>The algorithm proceeds as follows:</p>
                        <ol>
                            <li>Compare 15 with 56 → No match</li>
                            <li>Compare 23 with 56 → No match</li>
                            <li>Compare 9 with 56 → No match</li>
                            <li>Compare 1 with 56 → No match</li>
                            <li>Compare 56 with 56 → Match found at index 4</li>
                        </ol>

                        <h6>2.1.4. Time Complexity of Linear Search</h6>
                        <ul>
                            <li><strong>Best-case scenario (O(1))</strong>: The target element is at the first position.</li>
                            <li><strong>Worst-case scenario (O(n))</strong>: The target element is at the last position or not in the array at all.</li>
                            <li><strong>Average-case scenario (O(n))</strong>: On average, the algorithm checks half the elements.</li>
                        </ul>

                        <h6>2.1.5. Applications of Linear Search</h6>
                        <ul>
                            <li><strong>Small datasets:</strong> Linear search performs well because of its simplicity and minimal overhead.</li>
                            <li><strong>Unsorted data:</strong> It is one of the few options for searching unsorted data.</li>
                            <li><strong>Sequential access devices:</strong> Suitable for devices like tapes where random access isn't possible.</li>
                        </ul>
                    </div>

                    <div id="SortingAlgorithms">
                        <h4><strong>3. Sorting Algorithms</strong></h4>
                        <p>Sorting arranges data in a specific order. <strong>Insertion Sort</strong>, a basic sorting algorithm, is covered here.</p>
                    </div>
                    <div id="InsertionSort">
                        <h5><strong>3.2. Insertion Sort</strong></h5>
                        <p><strong>Insertion Sort</strong> builds a sorted part of the list one element at a time, similar to how one would sort cards in hand.</p>

                        <h6>3.2.1. Algorithm for Insertion Sort</h6>
                        <pre>
                            InsertionSort(arr):
                                for i from 1 to length(arr) - 1:
                                    key = arr[i]
                                    j = i - 1
                                    while j {'>'}= 0 and arr[j] {'>'} key:
                                        arr[j + 1] = arr[j]
                                        j = j - 1
                                    arr[j + 1] = key
                        </pre>

                        <h6>3.2.2. Example of Insertion Sort</h6>
                        <p>For the array <code>[12, 11, 13, 5, 6]</code>, the steps would be:</p>
                        <ol>
                            <li>First iteration: Insert 11 in the correct position → Array becomes <code>[11, 12, 13, 5, 6]</code></li>
                            <li>Next iteration: Insert 13 → No change.</li>
                            <li>Insert 5 → Array becomes <code>[5, 11, 12, 13, 6]</code></li>
                            <li>Insert 6 → Array becomes <code>[5, 6, 11, 12, 13]</code></li>
                        </ol>

                        <h6>3.2.3. Time Complexity of Insertion Sort</h6>
                        <ul>
                            <li><strong>Best-case scenario (O(n))</strong>: The array is already sorted.</li>
                            <li><strong>Worst-case scenario (O(n^2))</strong>: The array is sorted in reverse order.</li>
                            <li><strong>Average-case scenario (O(n^2))</strong>: On average, each element is compared with half of the sorted part.</li>
                        </ul>

                        <h6>3.2.4. Applications of Insertion Sort</h6>
                        <ul>
                            <li><strong>Small datasets:</strong> Efficient for small lists due to minimal overhead.</li>
                            <li><strong>Partially sorted data:</strong> Performs well when the list is almost sorted.</li>
                        </ul>
                    </div>

                    <div id="Conclusion">
                        <h4><strong>6. Conclusion</strong></h4>
                        <p>Both <strong>linear search</strong> and <strong>insertion sort</strong> are foundational algorithms. They are simple to understand and implement but may not be optimal for large datasets. These basics form a foundation for learning more advanced algorithms.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SearchingSorting;
