import React from 'react'
import styles from './Title.module.css';

function Title() {
    return (
        <>
            <div className={styles.links}>
                <a href='#'>Electronics and Communication Engineering {">"} </a>
                <a href='#'>Digital Electronics 1 {">"} </a>
                <a href='#'>Experiments</a>
            </div>
            <div className='mt-4'>
                <h2 className={styles.almh2}>Construction of half/ full adder using XOR and NAND gates and verification of its operation</h2>
                <hr />
            </div>
        </>
    )
}

export default Title
