import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* //TODO: Logo goes here */}
        <a className="navbar-item" href="/">
          CliniSol
        </a>
        {/* Mobile Visible Bar */}
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <p className="control has-icons-right">
              <input
                className="input"
                type={"text"}
                placeholder={"Search for anything here"}
              />
              <span className="icon is-right">
                <span className="material-icons">search</span>
              </span>
            </p>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              <span className="material-icons">translate</span>
              Language
            </a>

            <div className="navbar-dropdown">
              <div className="navbar-item">English (US)</div>
              <div className="navbar-item">English (IN)</div>
            </div>
          </div>
        </div>
        {/* Ending Message */}
        <div className="navbar-end">
          <div className="navbar-item is-flex-direction-column">
            {/* Message of the day */}
            <div className="icon-text">
              <div className="icon">
                <span className="material-icons has-text-warning m-1">
                  circle
                </span>
              </div>
              <div className="">{"Good Morning"}</div>
            </div>
            <div className="">
              {/* Date */}
              <div className="heading">{"22nd April 2022"}</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
