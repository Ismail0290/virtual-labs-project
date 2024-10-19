import React from 'react'
import Title from './Title'

function Posttest() {
    return (
        <div className='container mt-4 height'>
            <Title />
            <div className='m-4'>
                <h5 className='mt-5'><b>Half-adders have a major limitation in that they cannot __________</b></h5>
                <ol type="a" style={{ display: "flex", gap: "26px" }}>
                    <input type="radio" name="one" /><li>Accept a carry bit from a present stage</li>
                    <input type="radio" name="one" /><li>Accept a carry bit from a next stage</li>
                    <input type="radio" name="one" /><li>Accept a carry bit from a previous stage</li>
                    <input type="radio" name="one" /><li>Accept a carry bit from the following stages</li>
                </ol>

                <h5 className='mt-5'><b>The difference between half adder and full adder is __________</b></h5>
                <ol type="a" style={{ display: "flex", gap: "26px" }}>
                    <input type="radio" name="two" /><li>Half adder has two inputs while full adder has four inputs</li>
                    <input type="radio" name="two" /><li>Half adder has two output while full adder has two outputs</li>
                    <input type="radio" name="two" /><li>Half adder has two inputs while full adder has three inputs</li>
                    <input type="radio" name="two" /><li>All of the Mentioned</li>
                </ol>

                <h5 className='mt-5'><b>If A, B and C are the inputs of a full adder then the sum is given by __________</b></h5>
                <ol type="a" style={{ display: "flex", gap: "26px" }}>
                    <input type="radio" name="three" /><li>A AND B AND C</li>
                    <input type="radio" name="three" /><li>A OR B AND C</li>
                    <input type="radio" name="three" /><li>A Ex-OR B XOR C</li>
                    <input type="radio" name="three" /><li>A OR B OR C</li>
                </ol>

                <h5 className='mt-5'><b>If A, B and C are the inputs of a full adder then the carry is given by __________</b></h5>
                <ol type="a" style={{ display: "flex", gap: "26px" }}>
                    <input type="radio" name="four" /><li>A AND B OR (A OR B) AND C</li>
                    <input type="radio" name="four" /><li>A OR B OR (A AND B) C</li>
                    <input type="radio" name="four" /><li>(A AND B) OR (A AND B)C</li>
                    <input type="radio" name="four" /><li>A Ex-OR B Ex-OR (A Ex-OR B) AND C</li>
                </ol>

                <h5 className='mt-5'><b>How many AND, OR and Ex-OR gates are required for the configuration of full adder?</b></h5>
                <ol type="a" style={{ display: "flex", gap: "26px" }}>
                    <input type="radio" name="five" /><li>1,2,2</li>
                    <input type="radio" name="five" /><li>2,1,2</li>
                    <input type="radio" name="five" /><li>3,1,2</li>
                    <input type="radio" name="five" /><li>4,0,1</li>
                </ol>

                <button type='button' className="btn btn-primary">Submit Quiz</button>
            </div>
        </div>
    )
}

export default Posttest
