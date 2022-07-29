import React from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";

import { Outlet, Link } from "react-router-dom";
// import { About } from "./Header/about";

const Header2 = () => {
  return (
    <>
      {" "}
      <nav>
        <div className="header2">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Tv Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Web Series
              </a>
            </li>

            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a href="#">What's New?</a>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Thriller
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Romance
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Fantasy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Musical
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Comedy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Drama
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Horror
                  </a>
                </li>
              </ul>
            </div>
            <div className="Lang">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Language
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenu2"
                >
                  <li>
                    <button className="dropdown-item" type="button">
                      English
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Hindi
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Marathi
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="signup"></div>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Header2;
