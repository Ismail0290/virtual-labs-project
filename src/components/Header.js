import React, { useState } from "react";
import navLogo from "../assets/logo.jpg";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';
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
              className="navbar-toggler"
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
                  <img src={logo} className="card-img-top" alt="..." cName={styles.headerimg} />
                  <a className="close" onClick={close}>
                    &times;
                  </a>
                  <div className={styles.header}>
                    <h5 className="card-title" cName={styles.rate}>Rate</h5>
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
                            setRating(star);
                          }}
                        >
                          {' '}{'★'}{' '}
                        </span>
                      )
                    })}
                  </div>
                  <hr />
                  <div className={styles.btn}>
                    <button type="submit" className="btn btn-primary" onClick={popup}>Submit</button>
                    <button type="reset" className="btn btn-primary" onClick={() => setRating(0)}>Cancel</button>
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
                    <h5 className="card-title" cName={styles.bug}>Bug Report</h5>
                  </div>
                  <hr />
                  <div className={styles.content}>
                    <p>Please select the issue</p>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="issue1" />
                      <label className="form-check-label" htmlFor="issue1">Incorrect Options</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="issue2" />
                      <label className="form-check-label" htmlFor="issue2">Incorrect Answer</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="issue3" />
                      <label className="form-check-label" htmlFor="issue3">Incorrect Question</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="issue4" />
                      <label className="form-check-label" htmlFor="issue4">Page Not Loading</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="issue5" />
                      <label className="form-check-label" htmlFor="issue5">Content Not Visible</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="issue6" />
                      <label className="form-check-label" htmlFor="issue6">Incorrect Content</label>
                    </div>
                    <br />
                    <div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Please describe your issue</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter description here..."></textarea>
                      </div>
                    </div>
                    <div>
                      <div className="form-group my-4">
                        <label htmlFor="exampleInputEmail1">Please enter your email (Optional)</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email here for communication" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className={styles.btn}>
                    <button type="submit" className="btn btn-primary" onClick={popup}>Submit</button>
                  </div>
                </div>
              )}
            </Popup>
          </div>

          {/* sidebar */}
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Virtual Labs
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {/* Links have been removed */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

