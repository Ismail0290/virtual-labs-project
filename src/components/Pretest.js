import React from 'react'
import Title from './Title'

function Pretest() {
    return (
        <div className='container mt-4 height'>
            <Title />
            <div className='m-4'>
                <h5 className='mt-5'><b>In parts of the processor, adders are used to calculate ____________</b></h5>
                <ol type="a" style={{display: "flex", gap: "26px"}}>
                    <input type="radio" name="one"/><li>Addresses</li>
                    <input type="radio" name="one"/><li>Table indices</li>
                    <input type="radio" name="one"/><li>Increment and decrement operators</li>
                    <input type="radio" name="one"/><li>All of the Mentioned</li>
                </ol>

                <h5 className='mt-5'><b>Total number of inputs in a half adder is __________</b></h5>
                <ol type="a" style={{display: "flex", gap: "26px"}}>
                    <input type="radio" name="two"/><li>2</li>
                    <input type="radio" name="two"/><li>3</li>
                    <input type="radio" name="two"/><li>4</li>
                    <input type="radio" name="two"/><li>1</li>
                </ol>

                <h5 className='mt-5'><b>In which operation carry is obtained?</b></h5>
                <ol type="a" style={{display: "flex", gap: "26px"}}>
                    <input type="radio" name="three"/><li>Subtraction</li>
                    <input type="radio" name="three"/><li>Addition</li>
                    <input type="radio" name="three"/><li>Multiplication</li>
                    <input type="radio" name="three"/><li>Both addition and subtraction</li>
                </ol>

                <h5 className='mt-5'><b>If A and B are the inputs of a half adder, the sum is given by __________</b></h5>
                <ol type="a" style={{display: "flex", gap: "26px"}}>
                    <input type="radio" name="four"/><li>A AND B</li>
                    <input type="radio" name="four"/><li>A OR B</li>
                    <input type="radio" name="four"/><li>A Ex-OR B</li>
                    <input type="radio" name="four"/><li>A EX-NOR B</li>
                </ol>

                <h5 className='mt-5'><b>If A and B are the inputs of a half adder, the carry is given by __________</b></h5>
                <ol type="a" style={{display: "flex", gap: "26px"}}>
                    <input type="radio" name="five"/><li>A AND B</li>
                    <input type="radio" name="five"/><li>A OR B</li>
                    <input type="radio" name="five"/><li>A Ex-OR B</li>
                    <input type="radio" name="five"/><li>A EX-NOR B</li>
                </ol>

                <button type='button' className="btn btn-primary">Submit Quiz</button>
            </div>
        </div>
    )
}

export default Pretest
