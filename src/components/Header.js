import React, { useState } from "react";
import navLogo from "../assets/logo.jpg";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

const Header = () => {
  const [rating, setRating] = useState(0);

  const popup = () => {
    alert("Submitted successfully!");
  }


  return (
    <>
      <nav className={`navbar bg-white sticky-top ${styles.navBar}`}>
        <div className="container-fluid">

          <div className={styles.navbarWrap}>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img src={navLogo} alt="Bootstrap" className={styles.img} />
            </a>
          </div>

          <div className="btns">
            <Popup modal trigger={<button type="button" className="btn btn-primary">
              Rate Me
            </button>} position="right center">
              {close => (
                <div>
                  <img src={logo} class="card-img-top" alt="..." className={styles.headerimg} />
                  <a className="close" onClick={close}>
                    &times;
                  </a>
                  <div className={styles.header}>
                    <h5 class="card-title" className={styles.rate}>Rate</h5>
                  </div>
                  <div className={styles.ratestart}>
                    {[1, 2, 3, 4, 5].map((star) => {
                      return (
                        <span
                          className='start'
                          style={{
                            cursor: 'pointer',
                            color: rating >= star ? 'gold' : 'gray',
                            fontSize: `35px`,
                            transition: `.5s`,
                          }}
                          onClick={() => {
                            setRating(star)
                          }}
                        >
                          {' '}
                          ★{' '}
                        </span>
                      )
                    })}
                  </div>
                  <hr />
                  <div className={styles.btn}>
                    <button type="submit" class="btn btn-primary" onClick={popup}>Submit</button>
                    <button type="reset" class="btn btn-primary" onClick={() => setRating(0)}>Cancel</button>
                  </div>
                </div>
              )}
            </Popup>

            <Popup modal trigger={<button type="button" className="btn btn-primary">
              Report a Bug
            </button>} position="right center">
              {close => (
                <div>
                  <a className="close" onClick={close}>
                    &times;
                  </a>
                  <div className={styles.header}>
                    <h5 class="card-title" className={styles.bug}>Bug Report</h5>
                  </div>
                  <hr />
                  <div className={styles.content}>
                    <p>Please select the issue</p>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="issue" />
                      <label class="form-check-label" for="issue">Incorrect Options</label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="issue" />
                      <label class="form-check-label" for="issue">Incorrect Answer</label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="issue" />
                      <label class="form-check-label" for="issue">Incorrect Question</label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="issue" />
                      <label class="form-check-label" for="issue">Page Not Loading</label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="issue" />
                      <label class="form-check-label" for="issue">Content Not Visible</label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="issue" />
                      <label class="form-check-label" for="issue">Incorrect Content</label>
                    </div>
                    <br />
                    <div>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Please describe your issue</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter description here..."></textarea>
                      </div>
                    </div>
                    <div>
                      <div class="form-group my-4">
                        <label for="exampleInputEmail1">Please enter your email (Optional)</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email here for communication" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className={styles.btn}>
                    <button type="submit" class="btn btn-primary" onClick={popup}>Submit</button>
                  </div>
                </div>
              )}
            </Popup>
          </div>

          {/* sider bar */}
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Virtual Labs
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link to="/alm" class='nav-link active'>Alm</Link>
                </li>
                <li class="nav-item">
                  <Link to="/theory" class='nav-link'>Theory</Link>
                </li>
                <li class="nav-item">
                  <Link to="pretest" class='nav-link'>Pretest</Link>
                </li>
                <li class="nav-item">
                  <Link to="procedure" class='nav-link'>Procedure</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" class='nav-link'>Simulation</Link>
                </li>
                <li class="nav-item">
                  <Link to="posttest" class='nav-link'>Posttest</Link>
                </li>
                <li class="nav-item">
                  <Link to="reference" class='nav-link'>Reference</Link>
                </li>
                <li class="nav-item">
                  <Link to="feedback" class='nav-link'>Feedback</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
