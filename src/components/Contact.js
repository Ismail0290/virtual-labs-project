import React from "react";
import "./contact.css"; 

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      
      <div className="contact-details">
        <p><strong>Ramdeobaba University</strong></p>
        <p>Katol Road </p>
        <p>GittiKhadan ,Nagpur , Maharashtra 440013</p>
        <p>
          <span role="img" aria-label="phone">📞</span> : 0712 258 0011
        </p>
        <p>
          <span role="img" aria-label="email">📧</span> : https://www.rbunagpur.in/
        </p>
      </div>

      <div className="map-container">
      <iframe 
            title="College Map"
            src="https://maps.google.com/maps?q=Shri%20Ramdeobaba%20College%20Of%20Engineering&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            style={{ width: "970px", height: "400px" ,alignItems:"flex-end" }}
            allowFullScreen
          ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

