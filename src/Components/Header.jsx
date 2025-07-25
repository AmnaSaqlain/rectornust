import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showSearch, setShowSearch] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === "/";

  // Detect scroll for home page
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Decide header class
  const headerClass = isHome
    ? scrolled
      ? "home-scrolled"
      : "home-top"
    : "non-home";

  return (
    <header className={`sticky-top ${headerClass}`}>
      {/* TOP BAR (Desktop) */}
      <div className="top-bar d-none d-md-flex justify-content-between align-items-center px-2">
        <div
          className="fw-bold university-text"
          style={{ fontFamily: "Calista MT" }}
        >
          National University of Sciences & Technology
        </div>
        <form className="d-flex align-items-center">
          <div className="input-group input-group-sm">
            <input
              type="text"
              className="form-control"
              placeholder="Search in NUST"
            />
            <button className="btn btn-warning" type="submit">
              <i className="fa fa-search text-dark"></i>
            </button>
          </div>
        </form>
      </div>

      {/* MOBILE TOP BAR */}
      <div
        className="d-flex d-md-none justify-content-between align-items-center px-3 py-2"
        style={{ backgroundColor: "rgba(0, 59, 110, 0.8)" }}
      >
        <button
          className="btn btn-sm text-white"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <i className="fas fa-bars fs-4"></i>
        </button>

        <div className="fw-bold text-white">Office Of Rector</div>

        <button
          className="btn btn-warning btn-sm"
          onClick={() => setShowSearch(!showSearch)}
        >
          <i className="fas fa-search text-dark fs-5"></i>
        </button>
      </div>

      {/* MOBILE SEARCH FIELD */}
      <div
        className={`mobile-search-slide d-md-none ${showSearch ? "open" : ""}`}
      >
        <form className="d-flex">
          <div className="input-group input-group-sm">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Search..."
            />
            <button className="btn btn-warning btn-sm" type="submit">
              <i className="fa fa-search text-dark"></i>
            </button>
          </div>
        </form>
      </div>

      {/* MOBILE NAVBAR */}
      <div className={`mobile-nav-slide d-md-none ${navbarOpen ? "open" : ""}`}>
        <ul className="list-unstyled mb-0">
          <li>
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/Events" className="nav-link">
              NEWS & EVENTS
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/Legacy" className="nav-link">
              LEGACY
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/Contact" className="nav-link">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      {/* FULL NAVBAR FOR LARGE SCREENS */}
      <nav className="navbar navbar-expand-md navbar-light bottom-navbar shadow-sm d-none d-md-flex">
        <div className="container-fluid">
          <Link to="https://rector.nust.edu.pk" className="navbar-brand">
            <img
              src="/images/headerlogo.png"
              style={{ padding: "0 1rem", borderRight: "2px solid #003B6E" }}
              alt="header logo"
            />
          </Link>

          <Link to="/" className="navbar-brand" style={{ fontFamily: "Calista MT" }}>
            OFFICE OF <br /> RECTOR
          </Link>
          <div className="collapse navbar-collapse show">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    navigate("/");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  HOME
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Events"
                  className="nav-link"
                  onClick={() => {
                    navigate("/");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  NEWS & EVENTS
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Legacy"
                  className="nav-link"
                  onClick={() => {
                    navigate("/");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  LEGACY
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/ContactPage"
                  className="nav-link"
                  onClick={() => {
                    navigate("/");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
