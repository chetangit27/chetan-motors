import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/" aria-label="Sawant Motors home">
          <span className="brand-mark">S</span>
          <span>sawant<span className="brand-light">motors</span></span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/inventory">Browse cars</NavLink>
          <a href="/#why-us">Why Sawant Moters</a>
        </nav>

        <Link className="button button-dark header-button" to="/sell">
          Sell your car <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;