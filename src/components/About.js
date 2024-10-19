import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Overview</h1>
      <p className="about-description">
        Virtual Labs project is an initiative of Ministry of Education (MoE), Government of India under the aegis of National Mission on Education through Information and Communication Technology (NMEICT). This project is a consortium activity of twelve participating institutes, with IIT Delhi as the coordinating institute. It represents a paradigm shift in ICT-based education, introducing for the first time a large-scale initiative in remote experimentation. Under the Virtual Labs project, over 100 Virtual Labs consisting of approximately 700+ web-enabled experiments have been developed for remote operation and viewing.
      </p>

      <h2 className="beneficiaries-title">The intended beneficiaries of the project are:</h2>
      <ul className="beneficiaries-list">
        <li>All students and faculty members of Science and Engineering Colleges who do not have access to good lab facilities and/or instruments.</li>
        <li>High-school students, whose inquisitiveness will be triggered, possibly motivating them to take up higher studies.</li>
        <li>Researchers in different institutes who can collaborate and share resources.</li>
        <li>Different engineering colleges that can benefit from the content and related teaching resources.</li>
      </ul>

      <p className="about-description">
        Virtual Labs do not require any additional infrastructural setup for conducting experiments at user premises. The simulation-based experiments can be accessed remotely via the internet.
      </p>
    </div>

  );
}

export default About;
