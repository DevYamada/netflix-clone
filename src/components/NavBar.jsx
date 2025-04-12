function NavBar() {
  return (
    <>
      <header className="container-header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
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
                    <a className="redirects" aria-current="page" href="#">
                      Inicio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="redirects" href="#">
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
