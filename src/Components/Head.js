const Head = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvas"
        aria-labelledby="offcanvasWithBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">
            Hello
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav  ms-auto">
            <li className="nav-item heros">
              <a className="nav-link" aria-current="page" href="#heros">
                Home
              </a>
            </li>
            <li className="nav-item abouts">
              <a className="nav-link" href="#abouts">
                About
              </a>
            </li>
            <li className="nav-item projects">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item actings">
              <a className="nav-link" href="#actings">
                Films
              </a>
            </li>
            <li className="nav-item contacts">
              <a className="nav-link" href="#contacts">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav
        className="navbar fixed-top navbar-expand-md navbar-light "
        aria-label=""
      >
        <div className="container d-flex align-items-end">
          <a className="navbar-brand" href="#heros">
            {/* <img src="images/logo.png" alt="Alt" width="40" height="40" /> */}
            Hello
          </a>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            aria-controls="offcanvas"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse ">
            <ul className="navbar-nav  ms-auto">
              <li className="nav-item heros">
                <a className="nav-link" aria-current="page" href="#heros">
                  Home
                </a>
              </li>
              <li className="nav-item abouts">
                <a className="nav-link" href="#abouts">
                  About
                </a>
              </li>
              <li className="nav-item projects">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item actings">
                <a className="nav-link" href="#actings">
                  Films
                </a>
              </li>
              <li className="nav-item contacts">
                <a className="nav-link" href="#contacts">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Head;
