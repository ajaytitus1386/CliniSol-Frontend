import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
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
        </div>
        {/* Ending Message */}
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              <span className="material-icons">translate</span>
              Language
            </a>

            <div className="navbar-dropdown">
              <div className="navbar-item">English (US)</div>
              <div className="navbar-item">Hindi (IN)</div>
              <div className="navbar-item">Tamil (IN)</div>
            </div>
          </div>
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
      <style jsx>{`
        .navbar {
            position: absolute;
            width: 80%;
            left: 20%;
            top: 0px;
            background: #F7FAFD;
            height: 4rem;
        }

        .navbar-start .navbar-item p{
          width: 640px;
        }
        `}</style>

    </nav>
  );
};

export default NavBar;
