function NavBar() {
  return (
    <>
      <header className="container-header sticky-top">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid div-nav">
            <h1 className="title" href="#">
              NETFLIX
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-body">
                <ul className="navbar-nav div-redirects justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <div className="d-flex div-search">
                      <input
                        className="input-search"
                        type="search"
                        placeholder="Procurar filme"
                        aria-label="Search"
                      />
                      <button className="btn" type="submit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#b23434"
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="redirects" aria-current="page" href="#">
                      Inicio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="redirects" href="#filmes">
                      Filmes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="redirects" href="#">
                      Minha lista
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
