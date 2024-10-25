import React from "react";
import "./home.css"; // Assuming you will style this in a separate CSS file
import labImage from "../assets/lab-image.jpg"; // Assuming your image is stored in the assets folder

const Home = () => {
  return (
    <div className="home-container">
      <section className="image-section">
        <img src={labImage} alt="Virtual Lab" className="full-width-image" />
      </section>

      <section className="objectives-section">
        <h2>Objectives</h2>
        <ul>
          <li>
            To provide remote-access to simulation-based Labs in various
            disciplines of Science and Engineering.
          </li>
          <li>
            To enthuse students to conduct experiments by arousing their
            curiosity. This would help them in learning basic and advanced
            concepts through remote experimentation.
          </li>
          <li>
            To provide a complete Learning Management System around the VLabs
             where the students/teachers can avail various tools for
            learning, including additional web-resources, video-lectures,
            animated demonstrations, and self-evaluation.
          </li>
        </ul>
      </section>

      <section className="philosophy-section">
        <h2>The Philosophy</h2>
        <p>
          Good lab facilities and updated lab experiments are critical for any
          engineering college. Paucity of lab facilities often makes it
          difficult to conduct experiments. Also, good teachers are always a
          scarce resource. The VLabs project addresses this issue of lack
          of good lab facilities, as well as trained teachers, by providing
          remote-access to simulation-based Labs in various disciplines of
          science and engineering. Yet another objective is to arouse the
          curiosity of the students and permit them to learn at their own pace.
          This student-centric approach facilitates the absorption of basic and
          advanced concepts through simulation-based experimentation. Internet-based experimentation further permits the use of additional web-resources, video-lectures, animated demonstrations, and self-evaluation.
        </p>
        <p>
          Specifically, the VLabs project addresses the following:
        </p>
        <ul>
          <li>
            Access to online labs to those engineering colleges that lack these
            lab facilities
          </li>
          <li>
            Access to online labs as a complementary facility to those colleges
            that already have labs
          </li>
          <li>
            Training and skill-set augmentation through workshops and on-site/
            online training
          </li>
          <li>
            Vlabs are any place, any pace, any-time, any-type labs. It is
            a paradigm shift in student-centric, online education.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;