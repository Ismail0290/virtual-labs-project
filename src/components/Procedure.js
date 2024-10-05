import React from 'react'
import Title from './Title'

function Procedure() {
    return (
        <div className='container mt-4 height'>
            <Title />
            <div>
                <h3>1) HALF ADDER</h3>
                <p><b>Simulator: 1</b></p>
                <span>Steps :-</span>
                <ol>
                    <li>Connect the supply(+5V) to the circuit.</li>
                    <li>First press "ADD" button to add basic state of your output in the given table.</li>
                    <li>Press the switches to select the required inputs "A" and "B".</li>
                    <li>Press "ADD" button to add your inputs and outputs in the given table.</li>
                    <li>Repeat steps 3 & 4 for next state of inputs and their corresponding outputs.</li>
                    <li>Press the "PRINT" button after completing your simulation to get your results.</li>
                    <li>Press the "RESET" button whenever you want to refresh your simulator.</li>
                </ol>

                <p><b>Simulator: 2</b></p>
                <span>Steps :-</span>
                <ol>
                    <li>Enter the Boolean input "A" and "B".</li>
                    <li>Enter the Boolean output for your corresponding inputs.</li>
                    <li>Click on "Circuit" button to check the circuit diagram for half adder.</li>
                    <li>Click on "Check" Button to verify your output.</li>
                    <li>Click "Print" if you want to get print out of Truth Table.</li>
                    <li>Click on "Reset" button if you want to reset input and outputs.</li>
                </ol>
            </div>
            <div>
                <h3>2) FULL ADDER</h3>
                <p><b>Simulator: 1</b></p>
                <span>Steps :-</span>
                <ol>
                    <li>Connect the supply(+5V) to the circuit.</li>
                    <li>First press "ADD" button to add basic state of your output in the given table.</li>
                    <li>Press the switches to select the required inputs "A" and "B" and "Cin".</li>
                    <li>Press "ADD" button to add your inputs and outputs in the given table.</li>
                    <li>Repeat steps 3 & 4 for next state of inputs and their corresponding outputs.</li>
                    <li>Press the "PRINT" button after completing your simulation to get your results.</li>
                    <li>Press the "RESET" button whenever you want to refresh your simulator.</li>
                </ol>

                <p><b>Simulator: 2</b></p>
                <span>Steps :-</span>
                <ol>
                    <li>Enter the Boolean input "A" and "B" and "Cin".</li>
                    <li>Enter the Boolean output for your corresponding inputs.</li>
                    <li>Click on "Circuit" button to check the circuit diagram for full adder.</li>
                    <li>Click on "Check" Button to verify your output.</li>
                    <li>Click "Print" if you want to get print out of Truth Table.</li>
                    <li>Click on "Reset" button if you want to reset input and outputs.</li>
                </ol>
            </div>
        </div>
    )
}

export default Procedure
