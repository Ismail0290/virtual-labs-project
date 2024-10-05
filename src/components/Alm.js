import React from 'react'
import styles from './Alm.module.css';
import Title from './Title';

function Alm() {
    return (
        <div className="container mt-4 height">
            <Title/>
            <div>
                <p className={styles.para}>To verify the truth table of half adder and full adder by using XOR and NAND gates respectively and analyse the working of half adder and full adder circuit with the help of LEDs in simulator 1 and verify the truth table only of half adder and full adder in simulator 2.</p>
            </div>
        </div>
    )
}

export default Alm;
