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
          <span>Phone: General Information: 8973957483</span>
          <span>Email: Vlabs-help@gmail.com</span>
        </div>
        <div className='col d-flex flex-column mt-4'>
          <span>Follow Us</span>
          <hr />
          <div>
            <a href='https://x.com/?lang=en' class="fa fa-twitter"></a><br/>
            <a href="https://www.facebook.com/" class="fa fa-facebook"></a><br/>
            <a href="https://www.youtube.com/" class="fa fa-youtube"></a><br/>
            <a href="https://in.linkedin.com/" class="fa fa-linkedin"></a><br/>
          </div>
        </div>
      </div>
      <center className={styles.fauthor}><a href="#">AGPL 3.0  &  Creative Commons (CC BY-NC-SA 4.0)</a></center>
    </div>
  )
}

export default Footer;
