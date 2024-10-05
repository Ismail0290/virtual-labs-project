import React from 'react'
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={`container-fluid ${styles.ftTop}`}>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 pt-4'>
        <div className={`col d-flex flex-column my-4 ${styles.flink}`}>
          <span>Community Links</span>
          <hr />
          <a href='#'>Sakshat Portal</a>
          <a href='#'>Outreach Portal</a>
          <a href='#'>FAQ: Virtual Labs</a>
        </div>
        <div className='col d-flex flex-column my-4'>
          <span>Contact Us</span>
          <hr />
          <span>Phone: General Information: 011-26582050</span>
          <span>Email: support@vlabs.ac.in</span>
        </div>
        <div className='col d-flex flex-column mt-4'>
          <span>Follow Us</span>
          <hr />
          <div>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-youtube"></a>
            <a href="#" class="fa fa-linkedin"></a>
          </div>
        </div>
      </div>
      <center className={styles.fauthor}><a href="#">AGPL 3.0  &  Creative Commons (CC BY-NC-SA 4.0)</a></center>
    </div>
  )
}

export default Footer;
