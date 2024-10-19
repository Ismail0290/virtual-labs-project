import React from 'react'
import Title from './Title'

function Theory() {
  return (
    <div className='container mt-4 height'>
      <Title />
      <div>
        <h3>Introduction</h3>
        <p>Adders are digital circuits that carry out addition of numbers. Adders are a key component of arithmetic logic unit. Adders can be constructed for most of the numerical representations like Binary Coded Decimal (BCD), Excess – 3, Gray code, Binary etc. out of these, binary addition is the most frequently performed task by most common adders. Apart from addition, adders are also used in certain digital applications like table index calculation, address decoding etc.
        </p>
        <br />
        <p>Binary addition is similar to that of decimal addition. Some basic binary additions are shown below.</p>

        <center>
          <img className='img-diagram' src="https://de-iitr.vlabs.ac.in/exp/half-full-adder/images/1.1.png" alt="img1" />
          <p style={{ letterSpacing: "1px" }}><b>Figure 1. Schematic representation of half adder</b></p>
        </center>
      </div>
      <div>
        <h3>1) Half Adder</h3>
        <p>Half adder is a combinational circuit that performs simple addition of two binary numbers. If we assume A and B as the two bits whose addition is to be performed,the block diagram and a truth table for half adder with A, B as inputs and Sum, Carry as outputs can be tabulated as follows.
        </p>
        <br />
        <center>
          <img src="https://de-iitr.vlabs.ac.in/exp/half-full-adder/images/3.3.png" className='img-diagram' alt="img2" />
          <img src="https://de-iitr.vlabs.ac.in/exp/half-full-adder/images/2.2.png" className='img-diagram' alt="img3" />
          <p style={{ letterSpacing: "1px" }}><b>Figure 2. Block diagram and truth table of half adder</b></p>
        </center>
        <p>The sum output of the binary addition carried out above is similar to that of an Ex-OR operation while the carry output is similar to that of an AND operation. The same can be verified with help of Karnaugh Map.</p>
        <p>The truth table and K Map simplification and logic diagram for sum output is shown below.</p>
        <center>
          <img src="https://de-iitr.vlabs.ac.in/exp/half-full-adder/images/4.4.png" className='img-diagram' alt="img4" />
          <img src="https://de-iitr.vlabs.ac.in/exp/half-full-adder/images/5.5.png" className='img-diagram' alt="img5" />
          <img src="https://de-iitr.vlabs.ac.in/exp/half-full-adder/images/6.6.png" className='img-diagram' alt="img6" />
          <p style={{ letterSpacing: "1px" }}><b>Figure 3. Truth table, K Map simplification and Logic diagram for sum output of half adder</b></p>
          <p><b>Sum = A B' + A' B</b></p>
        </center>
      </div>



      <div>
        <p>The truth table and K Map simplification and logic diagram for carry is shown below.</p>
        <br />
        <center>
          <img src="https://de-iitr.vlabs.ac.in/exp/half-full-adder/images/7.7.png" className='img-diagram' alt="img7" />
          <img src="https://de-iitr.vlabs.ac.in/exp/half-full-adder/images/8.8.png" className='img-diagram' alt="img8" />
          <img src="https://de-iitr.vlabs.ac.in/exp/half-full-adder/images/9.9.png" className='img-diagram' alt="img9" />
          <p style={{ letterSpacing: "1px" }}><b>Figure 4. Truth table, K Map simplification and Logic diagram for sum output of half adder</b></p>
          <p><b>Carry = AB</b></p>
        </center>
      </div>
      <div>
        <p>If A and B are binary inputs to the half adder, then the logic function to calculate sum S is Ex – OR of A and B and logic function to calculate carry C is AND of A and B. Combining these two, the logical circuit to implement the combinational circuit of half adder is shown below.</p>
        <br />
        <center>
          <img src="https://de-iitr.vlabs.ac.in/exp/half-full-adder/images/10.10.png" className='img-diagram' alt="img10" />
          <p style={{ letterSpacing: "1px" }}><b>Figure 5. Half Adder Logic Diagram</b></p>
        </center>
        <p>As we know that NAND and NOR are called universal gates as any logic system can be implemented using these two, the half adder circuit can also be implemented using them. We know that a half adder circuit has one Ex – OR gate and one AND gate.</p>
      </div>
    </div>
  )
}

export default Theory
