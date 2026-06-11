import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navRef.current && !navRef.current.contains(e.target) &&
        hamburgerRef.current && !hamburgerRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => setScrolled(window.scrollY > 50);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "About Us", path: "/about" },
  ];

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">

        {/* Stacked Logo */}
        <Link to="/" className="header__logo" onClick={closeMenu} aria-label="Home">
          <span className="header__logo-main">
            <span className="header__logo-accent">DYNAMIC</span>
          </span>
          <span className="header__logo-sub">freelance hub</span>
        </Link>

        {/* Hamburger Button */}
        <button
          ref={hamburgerRef}
          className={`header__hamburger ${menuOpen ? "header__hamburger--active" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav
          id="nav-menu"
          className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}
          ref={navRef}
        >
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="header__nav-item">
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `header__nav-link${isActive ? " header__nav-link--active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            {/* Divider before Contact */}
            <li className="header__nav-divider" aria-hidden="true" />

            <li className="header__nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `header__nav-link${isActive ? " header__nav-link--active" : ""}`
                }
                onClick={closeMenu}
              >
                Blog
              </NavLink>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="header__cta">
            <Link to="/contact" className="header__cta-link" onClick={closeMenu}>
              <button className="header__cta-btn" type="button">
                Contuct Us
              </button>
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="header__overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

export default Header;