import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <nav
        class="navbar is-info is-mobile   "
        role="navigation"
        aria-label="main navigation "
      >
        <div className="container">
          <div className="navbar-brand ">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src={"https://bulma.io/images/bulma-logo.png"}
                width="112"
                height="28"
                alt="logo"
              />
            </a>

            <a
              href="/"
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu ml-6 ">
            <div className="navbar-start m-4  ">
              <a href="/dashboard" class="navbar-item ">
                Home
              </a>

              <a href="/addportofolio" class="navbar-item">
                Portofolio
              </a>

              <div class="navbar-item has-dropdown is-hoverable">
                <a href="/dashboard" class="navbar-link">
                  Project
                </a>

                <div class="navbar-dropdown">
                  <a href="/addcctv" class="navbar-item">
                    Cctv
                  </a>

                  <a href="/additsupport" class="navbar-item">
                    It Support
                  </a>
                  <a href="/addsolarhomesystem" class="navbar-item">
                    Solar Home System
                  </a>
                </div>
              </div>
            </div>

            <div className="navbar-end ">
              <div className="navbar-item">
                <div className="buttons">
                  <button onClick={Logout} className="button is-danger">
                    <strong>Log Out</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
