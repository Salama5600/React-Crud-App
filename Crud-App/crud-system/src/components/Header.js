import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav className="navbar  bg-primary">
        <div className="container-fluid">
          <h3 className="text-light align-items-center" role="button">Crud-<span className="badge bg-white text-primary">App</span></h3>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div
            className="collapse navbar-collapse text-light"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item text-light">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  Home 
                </Link>
              </li>
              <li className="nav-item text-light">
                <Link className="nav-link text-light" to="AddProducts">
                  Add Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
