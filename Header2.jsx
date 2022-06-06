import React from "react";

export default function Header2() {
  return (
    <>
      {" "}
      <div className="header2">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Tv Shows
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Movies
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Web Series
            </a>
          </li>

          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </button>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a href="#">What's New?</a>
                <hr class="dropdown-divider" />
              </li>

              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Thriller
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Romance
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Fantasy
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Musical
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Comedy
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Drama
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Horror
                </a>
              </li>
            </ul>
          </div>
          <div className="Lang">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Language
              </button>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenu2"
              >
                <li>
                  <button class="dropdown-item" type="button">
                    English
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Hindi
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Marathi
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="signup"></div>
        </ul>
      </div>
    </>
  );
}
