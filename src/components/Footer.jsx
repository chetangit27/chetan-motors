import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="brand footer-brand" to="/">
          <span className="brand-mark">S</span>
          <span>sawant<span className="brand-light">motors</span></span>
        </Link>
        <p>Good cars. Clear prices. A better way to buy.</p>
        <span>© {new Date().getFullYear()} Sawant Motors</span>
      </div>
    </footer>
  );
}

export default Footer;